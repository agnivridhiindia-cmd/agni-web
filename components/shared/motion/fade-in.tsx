"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionDuration } from "@/lib/tokens/motion";
import { useReducedMotionPreference, defaultViewport } from "./motion-config";
import { getDirectionalVariants } from "./motion-presets";

export interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  delay?: number;
  duration?: number;
  inView?: boolean;
  viewportOnce?: boolean;
  className?: string;
}

/**
 * Reusable FadeIn motion primitive.
 * Supports directional entry, viewport triggering, and automatic reduced motion fallback.
 */
export function FadeIn({
  children,
  direction = "up",
  distance = 16,
  delay = 0,
  duration = motionDuration.normal,
  inView = false,
  viewportOnce = true,
  className,
  ...props
}: FadeInProps) {
  const prefersReduced = useReducedMotionPreference();
  const variants = React.useMemo(
    () => getDirectionalVariants(direction, distance, prefersReduced),
    [direction, distance, prefersReduced]
  );

  if (prefersReduced) {
    return (
      <div className={cn("opacity-100", className)}>
        {children}
      </div>
    );
  }

  const initialProp = props.initial !== undefined ? props.initial : false;

  if (inView) {
    return (
      <motion.div
        initial={initialProp}
        whileInView="visible"
        viewport={{ ...defaultViewport, once: viewportOnce }}
        variants={variants}
        custom={{ delay, duration }}
        className={cn("will-change-[opacity,transform]", className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initialProp}
      animate="visible"
      variants={variants}
      custom={{ delay, duration }}
      className={cn("will-change-[opacity,transform]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
