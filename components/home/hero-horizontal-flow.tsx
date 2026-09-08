"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Hero } from "@/components/home/hero";
import { AboutBrief } from "@/components/home/about-brief";
import { useReducedMotionPreference } from "@/components/shared/motion";

export function HeroHorizontalFlow() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotionPreference();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Snappy physics spring interpolation eliminates discrete scroll ticks and wheel lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    mass: 0.1,
    restDelta: 0.0001,
  });

  // Slide horizontally across the 2-panel track smoothly
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  return (
    <>
      {/* ============================================================
          DESKTOP (>= 1024px): Fast, Silky-Smooth Pinned Slide Flow
          Optimized height (150vh) + GPU hardware-composited translation
          ============================================================ */}
      <div
        ref={containerRef}
        className="hidden lg:block relative h-[150vh] bg-[#FAF9FE]"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={prefersReduced ? undefined : { x }}
            className="flex h-full w-[200vw] flex-row [transform:translateZ(0)]"
          >
            {/* Panel 1: Hero Section (100vw x 100vh) */}
            <div className="w-screen h-screen shrink-0 overflow-hidden flex flex-col justify-center">
              <Hero isPinned />
            </div>

            {/* Panel 2: About Section (100vw x 100vh) */}
            <div className="w-screen h-screen shrink-0 overflow-hidden flex flex-col justify-center">
              <AboutBrief isPinned />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================
          MOBILE & TABLET (< 1024px): Standard Vertical Flow
          No horizontal slide-jacking, natural smooth touch scrolling
          ============================================================ */}
      <div className="block lg:hidden bg-[#FAF9FE]">
        <Hero />
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent"
          aria-hidden="true"
        />
        <AboutBrief />
      </div>
    </>
  );
}
