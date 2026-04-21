"use client";
import React from "react";
import { BlurIn, BoxReveal } from "@/components/reveal-animations";
import { Briefcase, GraduationCap, Code2, Star, Zap, Rocket, CheckCircle } from "lucide-react";

const EXPERIENCE_STATS = [
  { label: "Projects Built", value: "10+", icon: <Rocket size={28} className="text-orange-400" /> },
  { label: "Production Apps", value: "2+", icon: <Code2 size={28} className="text-purple-400" /> },
  { label: "Load Time Improved", value: "40%", icon: <Zap size={28} className="text-yellow-400" /> },
  { label: "Active Users Served", value: "100+", icon: <Star size={28} className="text-blue-400" /> },
];

const EXPERIENCE = [
  {
    title: "Fullstack Developer Intern",
    company: "Maisha Infotech",
    icon: <Briefcase size={36} className="text-blue-400" />,
    description: "Worked on a real production project (Masala Meter). Built responsive frontend, handled API integrations, implemented caching, retries, and error handling. Added Swiper carousel and dark mode. Improved load time by 40% and data reliability by 50%.",
    period: "Jun 2025 – Jul 2025",
    badge: "💼 Internship",
    badgeColor: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  },
];

const EDUCATION = [
  {
    title: "B.Tech in Computer Science",
    institution: "Bennett University",
    icon: <GraduationCap size={36} className="text-green-400" />,
    description: "Currently pursuing B.Tech CSE. Building projects, learning by doing, and exploring modern web technologies, Generative AI, and RAG systems.",
    period: "2023 – 2027",
    badge: "🎓 Ongoing",
    badgeColor: "bg-green-500/20 text-green-400 border border-green-500/30",
  },
];

const SKILLS_BREAKDOWN = [
  { category: "Frontend", skills: "React, Next.js, Tailwind CSS, JavaScript, TypeScript, Redux" },
  { category: "Backend", skills: "Node.js, Express.js, MongoDB, REST APIs" },
  { category: "Other", skills: "Generative AI, RAG, Vector DB, Data Structures, Git/GitHub" },
];

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-foreground pt-20 pb-20 min-h-screen">
      <BlurIn delay={0.3}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-12 text-lg">
          My journey through internships, university, and building things that actually work.
        </p>
      </BlurIn>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
        {EXPERIENCE_STATS.map((stat, index) => (
          <BoxReveal key={stat.label} delay={0.3 + index * 0.1} width="100%">
            <div
              className="p-4 sm:p-5 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 text-center flex flex-col items-center gap-2"
              style={{ backdropFilter: "blur(2px)" }}
            >
              {stat.icon}
              <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
              <p className="text-zinc-500 text-xs leading-tight">{stat.label}</p>
            </div>
          </BoxReveal>
        ))}
      </div>

      {/* Experience */}
      <BlurIn delay={0.5}>
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
      </BlurIn>
      <div className="grid md:grid-cols-1 gap-4 sm:gap-6 mb-16 items-stretch">
        {EXPERIENCE.map((exp, index) => (
          <BoxReveal key={exp.title} delay={0.6 + index * 0.15} width="100%">
            <div
              className="p-5 sm:p-6 md:p-8 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 hover:border-zinc-400 dark:hover:border-zinc-400 transition-all duration-300 h-full flex flex-col"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="flex items-start justify-between mb-4">
                {exp.icon}
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${exp.badgeColor}`}>
                  {exp.badge}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-base text-zinc-400 mb-1">{exp.company}</p>
              <span className="text-xs text-zinc-500 mb-4">{exp.period}</span>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm mt-auto">{exp.description}</p>
            </div>
          </BoxReveal>
        ))}
      </div>

      {/* Education */}
      <BlurIn delay={0.8}>
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
      </BlurIn>
      <div className="grid md:grid-cols-1 gap-4 sm:gap-6 mb-16 items-stretch">
        {EDUCATION.map((edu, index) => (
          <BoxReveal key={edu.title} delay={0.9 + index * 0.15} width="100%">
            <div
              className="p-5 sm:p-6 md:p-8 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 hover:border-zinc-400 dark:hover:border-zinc-400 transition-all duration-300 h-full flex flex-col"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="flex items-start justify-between mb-4">
                {edu.icon}
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${edu.badgeColor}`}>
                  {edu.badge}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
              <p className="text-base text-zinc-400 mb-1">{edu.institution}</p>
              <span className="text-xs text-zinc-500 mb-4">{edu.period}</span>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm mt-auto">{edu.description}</p>
            </div>
          </BoxReveal>
        ))}
      </div>

      {/* Skills Breakdown */}
      <BlurIn delay={1.0}>
        <div
          className="p-5 sm:p-8 md:p-10 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 mb-10"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Code2 size={24} className="text-purple-400 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-semibold">Skills Breakdown</h2>
          </div>
          <div className="space-y-5 sm:space-y-6">
            {SKILLS_BREAKDOWN.map((group) => (
              <div key={group.category} className="flex gap-3 sm:gap-4">
                <CheckCircle size={24} className="text-green-400 mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">{group.category}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">{group.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurIn>

      {/* Journey */}
      <BlurIn delay={1.2}>
        <div
          className="p-5 sm:p-8 md:p-10 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Star size={24} className="text-purple-400 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-semibold">The Journey</h2>
          </div>
          <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
            <p>
              It started with a simple question — <strong className="text-zinc-800 dark:text-zinc-200">&quot;what if I just built this myself?&quot;</strong>{" "}
              That curiosity turned into a habit. From hacking together small scripts to deploying full-stack apps
              with real users — it&apos;s been a ride.
            </p>
            <p>
              My internship at <strong className="text-zinc-800 dark:text-zinc-200">Maisha Infotech</strong> taught me
              what it&apos;s like to work on a <strong className="text-zinc-800 dark:text-zinc-200">real production codebase</strong>.
              Not the &quot;todo app in a tutorial&quot; kind — the &quot;APIs are flaky, the deadline is tomorrow,
              and the client wants dark mode by EOD&quot; kind.
            </p>
            <p>
              Building <strong className="text-zinc-800 dark:text-zinc-200">Rebyuu</strong> showed me what happens when
              you build something people actually want to use — 100+ users, 500+ monthly interactions, and anime fans
              who have very strong opinions about everything.
            </p>
            <p>
              Now I&apos;m exploring <strong className="text-zinc-800 dark:text-zinc-200">Generative AI and RAG systems</strong>,
              figuring out how to make development faster and features smarter. Because if AI can write code,
              the least I can do is tell it what to write.
            </p>
            <p>
              The real flex? I&apos;m still learning. Still building. Still trying not to push to main on a Friday.
            </p>
          </div>
        </div>
      </BlurIn>
    </div>
  );
}

export default Page;
