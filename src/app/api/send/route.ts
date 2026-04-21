import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});
export async function POST(req: Request) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service is not configured. Please contact directly at utkarshthakur3107@gmail.com" }),
        { 
          status: 503,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      return new Response(
        JSON.stringify({ error: "Invalid request format. Please check your input." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess) {
      return new Response(
        JSON.stringify({ error: zodError?.errors[0]?.message || "Validation failed" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    console.log("Attempting to send email to:", config.email);
    console.log("From:", zodData.email, "Name:", zodData.fullName);
    
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      replyTo: zodData.email,
      subject: `New Contact Form Message from ${zodData.fullName}`,
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      console.error("Resend API error details:", JSON.stringify(resendError, null, 2));
      return new Response(
        JSON.stringify({ 
          error: `Failed to send email: ${resendError.message || "Unknown error"}. Please contact directly at utkarshthakur3107@gmail.com` 
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    console.log("Email sent successfully:", resendData);

    return new Response(
      JSON.stringify(resendData),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error: any) {
    console.error("Contact form error - Full error:", error);
    console.error("Error stack:", error?.stack);
    console.error("Error name:", error?.name);
    return new Response(
      JSON.stringify({ 
        error: error?.message || `An unexpected error occurred: ${error?.toString() || "Unknown error"}. Please try again later or contact directly at utkarshthakur3107@gmail.com` 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
