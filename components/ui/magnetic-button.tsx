"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  useReducedMotionPreference,
  usePointerCapabilities,
} from "@/components/shared/motion";

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier (default 0.2 for subtle pull)
  maxOffset?: number; // Maximum pixel displacement (strictly 6px default)
  disabled?: boolean;
}

/**
 * Opt-in magnetic wrapper for focal interactive moments.
 * Principles:
 * - Extremely subtle movement (max 6px)
 * - Automatically disabled on touch screens and prefers-reduced-motion
 * - Isolated zero-layout-shift container
 * - Never interferes with keyboard navigation or focus
 */
export function MagneticButton({
  children,
  className,
  strength = 0.2,
  maxOffset = 6,
  disabled = false,
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotionPreference();
  const { hasFinePointer } = usePointerCapabilities();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Soft physical spring with zero cartoonish oscillation
  const springX = useSpring(x, { stiffness: 220, damping: 24 });
  const springY = useSpring(y, { stiffness: 220, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !hasFinePointer || prefersReduced || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    const targetX = Math.max(Math.min(middleX * strength, maxOffset), -maxOffset);
    const targetY = Math.max(Math.min(middleY * strength, maxOffset), -maxOffset);

    x.set(targetX);
    y.set(targetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (disabled || !hasFinePointer || prefersReduced) {
    return <div className={cn("inline-block", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("inline-block will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
