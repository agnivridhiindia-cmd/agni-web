"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier (default 0.25 for subtle pull)
  disabled?: boolean;
}

/**
 * Opt-in magnetic wrapper for focal interactive moments.
 * Principles:
 * - Extremely subtle movement (max 6-8px)
 * - Automatically disabled on touch screens and prefers-reduced-motion
 * - Isolated zero-layout-shift container
 */
export function MagneticButton({
  children,
  className,
  strength = 0.25,
  disabled = false,
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = React.useState(false);
  const [prefersReduced, setPrefersReduced] = React.useState(false);

  React.useEffect(() => {
    // Check if device supports hover / touch detection
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(hasTouch);

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(reducedMotionQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    reducedMotionQuery.addEventListener("change", handleChange);
    return () => reducedMotionQuery.removeEventListener("change", handleChange);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Soft spring with zero cartoonish bounce
  const springX = useSpring(x, { stiffness: 180, damping: 20 });
  const springY = useSpring(y, { stiffness: 180, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || isTouch || prefersReduced || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Limit maximum pull to 8px
    const maxOffset = 8;
    const targetX = Math.max(Math.min(middleX * strength, maxOffset), -maxOffset);
    const targetY = Math.max(Math.min(middleY * strength, maxOffset), -maxOffset);

    x.set(targetX);
    y.set(targetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (disabled || isTouch || prefersReduced) {
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
