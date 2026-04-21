import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "About Utkarsh Thakur | Fullstack Web Developer",
  description:
    "Learn about Utkarsh Thakur — B.Tech CSE student and Fullstack Web Developer. Skilled in React, Next.js, Node.js, TypeScript, MongoDB, Generative AI, and more.",
  keywords: [
    "Utkarsh Thakur about",
    "about utkarsh thakur",
    "utkarsh thakur developer",
    "utkarsh thakur bennett university",
    "utkarsh thakur skills",
    "fullstack developer India",
    ...config.keywords,
  ],
  alternates: { canonical: `${config.site}/about` },
  openGraph: {
    title: "About Utkarsh Thakur | Fullstack Web Developer",
    description:
      "B.Tech CSE student and Fullstack Web Developer. React, Next.js, Node.js, TypeScript specialist. Generative AI enthusiast.",
    url: `${config.site}/about`,
    siteName: "Utkarsh Thakur",
    images: [{ url: config.profileImg, width: 800, height: 800, alt: "Utkarsh Thakur" }],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Utkarsh Thakur | Fullstack Web Developer",
    description: "B.Tech CSE student and Fullstack Web Developer. React, Next.js, Node.js specialist.",
    images: [config.profileImg],
    creator: config.social.twitterHandle,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
