"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotionPreference } from "@/components/shared/motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotionPreference();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-slate-200/20 pointer-events-none"
    >
      <motion.div
        style={{ scaleX }}
        className="h-full bg-gradient-to-r from-teal-700 via-teal-400 to-amber-400 origin-left shadow-[0_0_10px_rgba(20,184,166,0.7)]"
      />
    </div>
  );
}
