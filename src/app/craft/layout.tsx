import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Craft & Services | Utkarsh Thakur — Web Development Services",
  description:
    "Utkarsh Thakur's freelance web development services. Frontend, Backend, Full Website development. React, Next.js, Node.js with quality support.",
  keywords: [
    "Utkarsh Thakur services",
    "utkarsh thakur freelance",
    "utkarsh thakur craft",
    "web development services India",
    "hire React developer India",
    "Next.js developer for hire",
    "affordable web development India",
    "freelance fullstack developer utkarsh",
    ...config.keywords,
  ],
  alternates: { canonical: `${config.site}/craft` },
  openGraph: {
    title: "Craft & Services | Utkarsh Thakur",
    description:
      "Freelance web development by Utkarsh Thakur. Frontend, backend, fullstack. React, Next.js, Node.js.",
    url: `${config.site}/craft`,
    siteName: "Utkarsh Thakur",
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Utkarsh Thakur Services" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft & Services | Utkarsh Thakur",
    description: "Freelance web dev by Utkarsh Thakur. Frontend, backend, fullstack.",
    images: [config.ogImg],
    creator: config.social.twitterHandle,
  },
};

export default function CraftLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
