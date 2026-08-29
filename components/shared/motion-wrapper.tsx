"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionDuration, motionEase } from "@/lib/tokens/motion";

export interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "none";
}

/**
 * Lightweight entrance animation respecting prefers-reduced-motion.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const yOffset = direction === "up" ? 14 : direction === "down" ? -14 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: motionDuration.normal,
        ease: motionEase.entrance,
        delay,
      }}
      className={cn("will-change-[opacity,transform]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  ...props
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
}

export function StaggerItem({
  children,
  className,
  ...props
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: motionDuration.normal,
            ease: motionEase.entrance,
          },
        },
      }}
      className={cn("will-change-[opacity,transform]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
