"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNpm } from "react-icons/di";
import {
  FaCss3,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiPrettier,
  SiRedux,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "utkarshthakur3107@gmail.com",
    href: "mailto:utkarshthakur3107@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/utkarsh-bhadauriya-535125293/",
    content: "/utkarsh-bhadauriya",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/utkarshthakur303",
    content: "/utkarshthakur303",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "The backbone of every web page",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Making things look good since forever",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Nodejs",
    content: "JavaScript on the server side",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: "A JavaScript library for building user interfaces",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    content: "The React framework for production",
    icon: <RiNextjsFill size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Express.js",
    content: "Fast, unopinionated web framework for Node.js",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "MongoDB",
    content: "NoSQL database for modern applications",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Tailwind CSS",
    content: "Utility-first CSS framework",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Redux",
    content: "Predictable state container for JS apps",
    icon: <SiRedux size={"50px"} color="#764ABC" />,
    color: "#764ABC",
  },
  {
    name: "Git",
    content: "Version control that saves lives",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Where code lives and pull requests die",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "The editor that does everything",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "Prettier",
    content: "Opinionated code formatter",
    icon: <SiPrettier size={"50px"} color="#f7b93c" />,
    color: "#f7b93c",
  },
  {
    name: "NPM",
    content: "Node package manager",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Yarn",
    content: "Fast, reliable, and secure dependency management",
    icon: <FaYarn size={"50px"} color="#2C8EBB" />,
    color: "#2C8EBB",
  },
  {
    name: "Vercel",
    content: "Deploy and go touch grass",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "Where the real magic happens",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-foreground pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full lg:w-[260px] lg:flex-shrink-0">
          <div
            className="p-4 md:p-6 lg:p-8 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0">
              <div className="flex-shrink-0 flex justify-center items-center lg:w-full bg-zinc-200 dark:bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-3 lg:p-8 w-[90px] sm:w-[110px] lg:w-full aspect-square bg-zinc-200 dark:bg-zinc-800 object-cover"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-2 lg:items-center lg:mt-2">
                <p className="text-lg lg:text-center font-medium">Utkarsh Thakur</p>
                <div className="text-xs bg-zinc-200 dark:bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Fullstack Web Developer
                </div>
              </div>
            </div>
            {/* Contact links — visible on mobile too as a row */}
            <div className="mt-4 lg:hidden">
              <div className="flex flex-wrap gap-2">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.name}
                    className="flex items-center gap-2 px-3 py-2 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 border-[.5px] rounded-md text-sm"
                    href={link.href}
                  >
                    <span className="text-base">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-300 dark:border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 border-[.5px] rounded-md"
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="flex-1 min-w-0">
          <div
            className="p-5 sm:p-6 md:p-10 border-[.5px] rounded-md border-zinc-300 dark:border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-2xl sm:text-3xl mb-6 md:mb-10">About me</h1>
            <p className="mb-6 md:mb-10 text-sm sm:text-base leading-relaxed">
              Hey there! I&apos;m Utkarsh Thakur, a fullstack developer who enjoys building things that actually work (and don&apos;t break randomly… most of the time). I work with JavaScript, React, Next.js, Node.js, and modern web tools to create fast, scalable, and clean web apps. I&apos;ve also experimented with Generative AI and RAG systems to speed up development and build smarter features.
            </p>
            <p className="mb-6 md:mb-10 text-sm sm:text-base leading-relaxed">
              Currently a B.Tech CSE student at Bennett University (2023–2027), building projects, learning by doing, and trying not to fight with bugs at 3AM. I did my Fullstack Developer Internship at Maisha Infotech where I worked on a real production project (Masala Meter) — built responsive frontends, handled API integrations, and improved load time by 40%. Open to cool projects and collaborations.
            </p>
            <h1 className="text-2xl sm:text-3xl mb-6 md:mb-10">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 3,
                    breakpoints: {
                      640: { perPage: 3 },
                      768: { perPage: 4 },
                      1024: { perPage: 5 },
                    },
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
