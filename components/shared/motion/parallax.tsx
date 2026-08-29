"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "./motion-config";

export interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Subtle offset multiplier (-0.3 to +0.3 recommended)
  offsetDistance?: number; // Maximum pixel translation (default 24px)
}

/**
 * Opt-in lightweight parallax component for decorative accents and background elements.
 * Principles:
 * - Extremely restrained movement (max 20-30px)
 * - Automatically disabled under prefers-reduced-motion
 * - Never applied to critical typography or interactive controls
 */
export function Parallax({
  children,
  className,
  speed = 0.15,
  offsetDistance = 24,
}: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotionPreference();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = Math.min(Math.abs(offsetDistance), 40) * Math.sign(speed);
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("overflow-visible", className)}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
