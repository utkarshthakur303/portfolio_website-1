"use client";
import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import { usePathname } from "next/navigation";

function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-4 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between flex-wrap">
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
        © {year} {config.author}. All rights reserved.
      </p>
      <SocialMediaButtons />
      <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 sm:gap-6 z-10">
        {footer.filter(link => link.href !== pathname).map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant={"link"}>{title}</Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
