import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.6", color: "#333" }}>
    <h1 style={{ color: "#000", borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>
      New Contact Form Message
    </h1>
    <div style={{ marginTop: "20px" }}>
      <p><strong>From:</strong> {fullName}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
    <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#f5f5f5", borderRadius: "5px" }}>
      <h2 style={{ marginTop: "0", color: "#007bff" }}>Message:</h2>
      <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
    </div>
    <div style={{ marginTop: "30px", padding: "10px", fontSize: "12px", color: "#666", borderTop: "1px solid #ddd" }}>
      <p>This message was sent from your portfolio contact form.</p>
    </div>
  </div>
);
