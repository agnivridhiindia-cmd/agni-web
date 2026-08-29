"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionDuration, motionEase } from "@/lib/tokens/motion";
import { useReducedMotionPreference, defaultViewport } from "./motion-config";

export interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  margin?: string;
  className?: string;
}

/**
 * Viewport-triggered Reveal component for headings, cards, and editorial sections.
 * Automatically animates once upon entering the viewport with restrained 16px motion.
 */
export function Reveal({
  children,
  delay = 0,
  duration = motionDuration.normal,
  distance = 16,
  once = defaultViewport.once,
  margin = defaultViewport.margin,
  className,
  ...props
}: RevealProps) {
  const prefersReduced = useReducedMotionPreference();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{
        duration,
        delay,
        ease: motionEase.entrance,
      }}
      className={cn("will-change-[opacity,transform]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
