import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Projects | Utkarsh Thakur — Fullstack Web Developer",
  description:
    "Real-world fullstack projects built by Utkarsh Thakur using React, Next.js, Node.js, MongoDB, and TypeScript. Explore web apps and platforms.",
  keywords: [
    "Utkarsh Thakur projects",
    "utkarsh thakur portfolio projects",
    "utkarsh thakur web projects",
    "fullstack projects React Next.js",
    "masala meter project",
    "rebyuu anime project",
    ...config.keywords,
  ],
  alternates: { canonical: `${config.site}/projects` },
  openGraph: {
    title: "Projects | Utkarsh Thakur",
    description:
      "Real-world fullstack projects by Utkarsh Thakur — built with React, Next.js, Node.js, and TypeScript.",
    url: `${config.site}/projects`,
    siteName: "Utkarsh Thakur",
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Utkarsh Thakur Projects" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Utkarsh Thakur",
    description: "Real-world fullstack projects by Utkarsh Thakur.",
    images: [config.ogImg],
    creator: config.social.twitterHandle,
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
