import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-center items-center md:items-start",
            "px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40"
          )}
        >
          {!isLoading && (
            <>
              <div className="">
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-base text-slate-500 dark:text-zinc-400 ml-1",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text"
                    )}
                  >
                    Hi, I am
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "font-thin text-[clamp(3.5rem,12vw,8rem)] text-transparent text-slate-800 ml-1 text-left",
                          "cursor-default text-edge-outline font-display"
                        )}
                      >
                        Utkarsh
                        {/* PLEASE hello??

                        <br className="md:block hiidden" />
                        UNMUTE ME 😢😢 */}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      sideOffset={8}
                      className="dark:bg-white dark:text-black max-w-[200px] text-center"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-base text-slate-500 dark:text-zinc-400 ml-1",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text"
                    )}
                  >
                    A Fullstack Web Developer
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 ml-1 flex flex-col gap-3 w-full max-w-xs">
                <Link
                  href={
                    "https://drive.google.com/file/d/1ctPVv5xJ8GHUnP40DXTZfdZ28xCfiiVh/view?usp=sharing"
                  }
                  target="_blank"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"mailto:utkarshthakur3107@gmail.com"} className="flex-1">
                        <Button
                          variant={"outline"}
                          className="w-full"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link
                    href={config.social.github}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiGithub size={24} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiLinkedin size={24} />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
