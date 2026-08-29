"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionDuration, motionEase } from "@/lib/tokens/motion";
import { useReducedMotionPreference } from "./motion-config";

export interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Ultra-lightweight page transition foundation for Next.js App Router.
 * Features:
 * - Extremely short 200ms duration (never feels sluggish or presentation-like)
 * - Micro 6px vertical settle (zero layout shift)
 * - Instantly disabled under prefers-reduced-motion
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const prefersReduced = useReducedMotionPreference();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: motionDuration.fast,
        ease: motionEase.standard,
      }}
      className={cn("w-full will-change-[opacity,transform]", className)}
    >
      {children}
    </motion.div>
  );
}
