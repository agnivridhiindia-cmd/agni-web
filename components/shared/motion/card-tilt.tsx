"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference, usePointerCapabilities } from "./motion-config";

export interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Degrees of maximum tilt (strict restraint: default 3deg)
  disabled?: boolean;
}

/**
 * Opt-in 3D card tilt micro-interaction.
 * Principles:
 * - Very small rotation range (max Ãƒâ€šÃ‚Â±2ÃƒÂ¢Ã¢â€šÂ¬ - Å“3Ãƒâ€šÃ‚Â°)
 * - Desktop pointer devices only (disabled on touch)
 * - Automatically disabled under prefers-reduced-motion
 * - Zero layout shift or text distortion
 */
export function CardTilt({
  children,
  className,
  maxTilt = 3,
  disabled = false,
}: CardTiltProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotionPreference();
  const { hasFinePointer } = usePointerCapabilities();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth physical spring with zero oscillation
  const springX = useSpring(x, { stiffness: 200, damping: 25 });
  const springY = useSpring(y, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || prefersReduced || !hasFinePointer || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized mouse position from -1 to 1 relative to card center
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Invert Y for intuitive 3D tilt
    x.set(mouseX * maxTilt);
    y.set(-mouseY * maxTilt);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (disabled || prefersReduced || !hasFinePointer) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateY: springX,
        rotateX: springY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
