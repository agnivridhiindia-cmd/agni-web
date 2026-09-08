"use client";

import { Hero } from "@/components/home/hero";
import { AboutBrief } from "@/components/home/about-brief";

export function HeroHorizontalFlow() {
  return (
    <div className="bg-[#FAF9FE]">
      <Hero />
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent"
        aria-hidden="true"
      />
      <AboutBrief />
    </div>
  );
}
