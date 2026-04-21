"use client";
import React from "react";
import { BlurIn } from "@/components/reveal-animations";
import ContactForm from "@/components/ContactForm";
import { config } from "@/data/config";
import { Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-foreground pt-20 pb-20 min-h-screen">
      <BlurIn delay={0.3}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Let&apos;s Work Together</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 sm:mb-12 text-base sm:text-lg">
          Got a project in mind? Drop me a message and let&apos;s make it happen.
        </p>
      </BlurIn>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
        {/* Left - Info */}
        <BlurIn delay={0.5}>
          <div className="space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-6 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600" style={{ backdropFilter: "blur(2px)" }}>
              <div className="flex items-center gap-3 mb-3">
                <Mail size={20} className="text-zinc-500 dark:text-zinc-400 flex-shrink-0" />
                <h3 className="text-base sm:text-lg font-semibold">Email me directly</h3>
              </div>
              <a
                href={`mailto:${config.email}`}
                className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm break-all"
              >
                {config.email}
              </a>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600" style={{ backdropFilter: "blur(2px)" }}>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                I usually respond within 24 hours. For urgent projects, feel free to reach out on WhatsApp directly from the <a href="/craft" className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300">Craft</a> page.
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600" style={{ backdropFilter: "blur(2px)" }}>
              <h3 className="text-base sm:text-lg font-semibold mb-2">What I can help with</h3>
              <ul className="text-zinc-500 dark:text-zinc-400 text-sm space-y-1 mt-2">
                <li>• Frontend Development</li>
                <li>• Backend Development</li>
                <li>• Full Website Development</li>
                <li>• Bug Fixes & Maintenance</li>
              </ul>
            </div>
          </div>
        </BlurIn>

        {/* Right - Form */}
        <BlurIn delay={0.7}>
          <Card className="bg-white/5 dark:bg-black/40 backdrop-blur-sm rounded-2xl border-zinc-300 dark:border-zinc-700">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl">Send a Message</CardTitle>
              <CardDescription className="text-zinc-400">
                Fill in the details and I&apos;ll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </BlurIn>
      </div>
    </div>
  );
}

export default Page;
