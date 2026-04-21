"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Masala Meter",
    description: `A review aggregation platform that pulls data from multiple APIs and turns it into one clean, usable score.
Built with responsive UI, smart caching, retries, and error handling. Reduced load time by 40% and improved reliability by 50%.`,
    link: "#",
    images: [
      "/assets/projects-screenshots/masala-meter/landing.png",
    ],
  },
  {
    id: 2,
    name: "Rebyuu",
    description: `An anime review platform — basically IMDb but for anime fans. 100+ active users and 500+ monthly interactions.
Users can browse, rate, review, and create lists. Optimized API calls and state management for better performance. Improved load speed by ~30%.`,
    link: "#",
    images: [
      "/assets/projects-screenshots/rebyuu/landing.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 md:px-[50px] xl:px-[150px] text-foreground h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-content-around">
          {PROJECTS.map((project) => (
            <li
              className="w-full border-[.5px] rounded-md border-zinc-300 dark:border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-full h-[200px] rounded-t-md bg-zinc-200 dark:bg-zinc-900 object-cover"
                        width={600}
                        height={200}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
