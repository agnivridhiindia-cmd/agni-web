"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionDuration, motionEase } from "@/lib/tokens/motion";
import { useReducedMotionPreference, defaultViewport } from "./motion-config";

export interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  inView?: boolean;
  once?: boolean;
  className?: string;
}

/**
 * Orchestrated container for sequential child reveals.
 * Useful for grid cards, navigation lists, and service metrics.
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0,
  inView = true,
  once = true,
  className,
  ...props
}: StaggerContainerProps) {
  const prefersReduced = useReducedMotionPreference();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  if (inView) {
    return (
      <motion.div
        initial={false}
        whileInView="visible"
        viewport={{ ...defaultViewport, once }}
        variants={containerVariants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={false}
      animate="visible"
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  distance?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

/**
 * Child item for StaggerContainer with restrained 12-14px entrance.
 */
export function StaggerItem({
  children,
  distance = 12,
  direction = "up",
  duration = motionDuration.normal,
  className,
  ...props
}: StaggerItemProps) {
  const prefersReduced = useReducedMotionPreference();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={false}
      variants={{
        hidden: {
          opacity: 0,
          x: direction === "left" ? -distance : direction === "right" ? distance : 0,
          y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
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
