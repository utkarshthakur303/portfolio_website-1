import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact Utkarsh Thakur | Hire a Fullstack Developer",
  description:
    "Get in touch with Utkarsh Thakur for web development projects. Available for frontend, backend, and full-stack work.",
  keywords: [
    "contact Utkarsh Thakur",
    "hire utkarsh thakur",
    "utkarsh thakur contact",
    "freelance developer India",
    "hire fullstack developer India",
    "web developer for hire India",
    ...config.keywords,
  ],
  alternates: { canonical: `${config.site}/contact` },
  openGraph: {
    title: "Contact Utkarsh Thakur | Hire a Fullstack Developer",
    description:
      "Looking for a fullstack developer? Reach out to Utkarsh Thakur for projects.",
    url: `${config.site}/contact`,
    siteName: "Utkarsh Thakur",
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Contact Utkarsh Thakur" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Utkarsh Thakur | Hire a Fullstack Developer",
    description: "Reach out for web development. Frontend, backend, fullstack.",
    images: [config.ogImg],
    creator: config.social.twitterHandle,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
