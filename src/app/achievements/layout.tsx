import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Experience & Education | Utkarsh Thakur",
  description:
    "Utkarsh Thakur's professional experience and education. Fullstack Developer Intern at Maisha Infotech. B.Tech CSE at Bennett University (2023–2027).",
  keywords: [
    "Utkarsh Thakur experience",
    "utkarsh thakur intern",
    "utkarsh thakur maisha infotech",
    "utkarsh thakur bennett university",
    "fullstack developer intern",
    ...config.keywords,
  ],
  alternates: { canonical: `${config.site}/achievements` },
  openGraph: {
    title: "Experience & Education | Utkarsh Thakur",
    description:
      "Fullstack Developer Intern at Maisha Infotech. B.Tech CSE at Bennett University. Utkarsh Thakur's professional journey.",
    url: `${config.site}/achievements`,
    siteName: "Utkarsh Thakur",
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Utkarsh Thakur Experience" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience & Education | Utkarsh Thakur",
    description: "Fullstack Developer Intern at Maisha Infotech. B.Tech CSE at Bennett University.",
    images: [config.ogImg],
    creator: config.social.twitterHandle,
  },
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
