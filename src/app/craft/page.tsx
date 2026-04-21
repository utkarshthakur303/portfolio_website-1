"use client";
import React from "react";
import { BlurIn, BoxReveal } from "@/components/reveal-animations";
import { Code, Server, Globe, CheckCircle, AlertCircle, Mail, ExternalLink, School, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { config } from "@/data/config";

const SERVICES = [
  {
    icon: <Code size={40} className="text-blue-400" />,
    title: "Frontend Development",
    description:
      "Clean, responsive, and modern UI built with React / Next.js, Tailwind CSS, and smooth animations. Pixel-perfect designs that work across all devices.",
    includes: [
      "Responsive design (mobile + desktop)",
      "React / Next.js development",
      "Tailwind CSS styling",
      "Animations & interactions",
      "1 month free bug fixes",
    ],
  },
  {
    icon: <Server size={40} className="text-green-400" />,
    title: "Backend Development",
    description:
      "Robust and scalable backend APIs built with Node.js and Express. Database design, authentication, and server-side logic handled end to end.",
    includes: [
      "REST API development",
      "Database design (MongoDB / PostgreSQL)",
      "Authentication & authorization",
      "Server deployment",
      "1 month free bug fixes",
    ],
  },
  {
    icon: <Globe size={40} className="text-purple-400" />,
    title: "Full Website Development",
    description:
      "Complete end-to-end website — from UI to backend, database to deployment. Price varies based on features and complexity.",
    includes: [
      "Full frontend + backend",
      "Database setup & management",
      "Deployment & hosting setup",
      "1 month free management & bug fixes",
      "Feature-based pricing",
    ],
  },
];

const POLICY = [
  {
    icon: <CheckCircle size={24} className="text-green-400 mt-1 flex-shrink-0" />,
    title: "First 1 Month (Free Support)",
    desc: "After delivery, I'll manage the project for 1 month — bug fixes and minor changes are completely free.",
  },
  {
    icon: <AlertCircle size={24} className="text-yellow-400 mt-1 flex-shrink-0" />,
    title: "After 1 Month",
    desc: "Both bug fixes and changes will be chargeable. Pricing depends on the scope of work.",
  },
  {
    icon: <AlertCircle size={24} className="text-orange-400 mt-1 flex-shrink-0" />,
    title: "Feature Changes (Anytime)",
    desc: "Adding new features or major changes will always have an additional charge, even within the first month.",
  },
];

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-foreground pt-20 pb-20 min-h-screen">
      <BlurIn delay={0.3}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Craft</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 sm:mb-12 text-base sm:text-lg">
          What I build, what I charge, and how I work.
        </p>
      </BlurIn>

      {/* What I've Built */}
      <BlurIn delay={0.5}>
        <div
          className="p-5 sm:p-8 md:p-10 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 mb-10 sm:mb-12"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">What I&apos;ve Built</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">Real projects, real clients.</p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 hover:border-zinc-400 transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <School size={26} className="text-green-400 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold leading-tight">Masala Meter</h3>
                  <p className="text-zinc-500 text-sm">Client — Maisha Infotech (Internship)</p>
                </div>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                A review aggregation platform that pulls data from multiple APIs and turns it into one clean, usable score. Built with responsive UI, smart caching, and smooth Swiper carousel experience.
              </p>
              <Link href="#" target="_blank"
                className="inline-flex items-center gap-2 text-sm text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors break-all">
                masalameter.com <ExternalLink size={13} className="flex-shrink-0" />
              </Link>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 hover:border-zinc-400 transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <ShoppingBag size={26} className="text-pink-400 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold leading-tight">Rebyuu</h3>
                  <p className="text-zinc-500 text-sm">Personal Project</p>
                </div>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                An anime review platform with 100+ active users and 500+ monthly interactions. Users can browse, rate, review, and create personal anime lists.
              </p>
              <Link href="#" target="_blank"
                className="inline-flex items-center gap-2 text-sm text-pink-400 hover:text-pink-300 transition-colors">
                rebyuu.com <ExternalLink size={13} className="flex-shrink-0" />
              </Link>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Link href="/#projects">
              <button className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-600 hover:border-zinc-400 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base">
                View More Projects <ExternalLink size={15} />
              </button>
            </Link>
          </div>
        </div>
      </BlurIn>

      {/* What I Offer */}
      <BlurIn delay={0.7}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">What I Offer</h2>
      </BlurIn>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {SERVICES.map((service, index) => (
          <BoxReveal key={service.title} delay={0.8 + index * 0.15} width="100%">
            <div
              className="p-5 sm:p-6 md:p-8 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 hover:border-zinc-400 transition-all duration-300 h-full flex flex-col"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="mb-3">{service.icon}</div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
              <ul className="space-y-2 mt-auto">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
                    <CheckCircle size={15} className="text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BoxReveal>
        ))}
      </div>

      {/* Policy Section */}
      <BlurIn delay={1.1}>
        <div
          className="p-5 sm:p-8 md:p-10 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 mb-10 sm:mb-12"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Support & Maintenance Policy</h2>
          <div className="space-y-5 sm:space-y-6">
            {POLICY.map((p) => (
              <div key={p.title} className="flex gap-3 sm:gap-4">
                {p.icon}
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurIn>

      {/* CTA */}
      <BlurIn delay={1.3}>
        <div
          className="p-5 sm:p-8 md:p-10 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 text-center"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Ready to build something?</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-5 sm:mb-6 text-base sm:text-lg">
            Let&apos;s discuss your project and figure out the best plan for you.
          </p>
          <Link
            href={`https://wa.me/9311693794?text=${encodeURIComponent("Hi Utkarsh! 👋\n\nI'd like to discuss a project with you.\n\n*Project Type:* (Frontend / Backend / Full Website)\n*Description:* (Brief about your project)\n*Budget:* \n*Timeline:* \n\nLooking forward to hearing from you!")}`}
            target="_blank"
          >
            <button className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-green-400 transition-colors text-sm sm:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message me on WhatsApp
            </button>
          </Link>
        </div>
      </BlurIn>
    </div>
  );
}

export default Page;
