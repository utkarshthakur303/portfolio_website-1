import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import ElasticCursor from "@/components/ui/ElasticCursor";
import Particles from "@/components/Particles";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Preloader from "@/components/preloader";
import EasterEggs from "@/components/easter-eggs";
import { config } from "@/data/config";
import SocketContextProvider from "@/contexts/socketio";
import RemoteCursors from "@/components/realtime/remote-cursors";

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: "%s | Utkarsh Thakur",
  },
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author, url: config.site }],
  creator: config.author,
  publisher: config.author,
  metadataBase: new URL(config.site),
  alternates: { canonical: "/" },
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    siteName: "Utkarsh Thakur",
    locale: "en_IN",
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: "Utkarsh Thakur — Fullstack Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
    creator: config.social.twitterHandle,
    site: config.social.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

const personSchema = {
  "@type": "Person",
  "@id": `${config.site}/#person`,
  name: "Utkarsh Thakur",
  alternateName: "Utkarsh",
  url: config.site,
  image: {
    "@type": "ImageObject",
    "@id": `${config.site}/#personimage`,
    url: config.profileImg,
    contentUrl: config.profileImg,
    caption: "Utkarsh Thakur",
    inLanguage: "en-IN",
  },
  description:
    "Fullstack Web Developer and B.Tech CSE student at Bennett University. Specializes in React, Next.js, Node.js. Experienced with Generative AI and RAG systems.",
  jobTitle: "Fullstack Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "B.Tech CSE Program, Bennett University",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "Generative AI",
    "RAG Systems",
    "Redux",
    "Fullstack Web Development",
  ],
  sameAs: [
    config.social.github,
    config.social.linkedin,
    config.social.twitter,
    config.social.instagram,
    config.social.facebook,
    config.site,
  ],
  email: config.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${config.site}/#website`,
  url: config.site,
  name: "Utkarsh Thakur",
  description: config.description.short,
  inLanguage: "en-IN",
  author: { "@id": `${config.site}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${config.site}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const webpageSchema = {
  "@type": "WebPage",
  "@id": `${config.site}/#webpage`,
  url: config.site,
  name: "Utkarsh Thakur | Fullstack Web Developer",
  isPartOf: { "@id": `${config.site}/#website` },
  about: { "@id": `${config.site}/#person` },
  description: config.description.short,
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: config.site,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${config.site}/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: `${config.site}/projects`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Achievements",
        item: `${config.site}/achievements`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Craft",
        item: `${config.site}/craft`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: `${config.site}/contact`,
      },
    ],
  },
};

const profilePageSchema = {
  "@type": "ProfilePage",
  "@id": `${config.site}/#profilepage`,
  url: config.site,
  name: "Utkarsh Thakur — Fullstack Web Developer Portfolio",
  isPartOf: { "@id": `${config.site}/#website` },
  about: { "@id": `${config.site}/#person` },
  mainEntity: { "@id": `${config.site}/#person` },
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={[archivoBlack.className].join(" ")}>
      <head>
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                personSchema,
                websiteSchema,
                webpageSchema,
                profilePageSchema,
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Particles
            className="fixed inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <Preloader>
            <SocketContextProvider>
              <RemoteCursors />
              <TooltipProvider>
                <Header />
                {children}
                <Footer />
              </TooltipProvider>
            </SocketContextProvider>
            <Toaster />
            <EasterEggs />
            <ElasticCursor />
          </Preloader>
        </ThemeProvider>
      </body>
    </html>
  );
}
