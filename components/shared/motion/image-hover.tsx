"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference, usePointerCapabilities } from "./motion-config";

export interface ImageHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  scale?: "subtle" | "normal" | "none";
  overlay?: boolean;
}

/**
 * Reusable image interaction wrapper.
 * Principles:
 * - Restrained scale (1.03x maximum) with overflow clipping
 * - Zero layout shift (preserves outer bounding box)
 * - Automatically disabled on touch screens and under prefers-reduced-motion
 */
export function ImageHover({
  children,
  scale = "subtle",
  overlay = false,
  className,
  ...props
}: ImageHoverProps) {
  const prefersReduced = useReducedMotionPreference();
  const { hasFinePointer } = usePointerCapabilities();

  const enableMotion = !prefersReduced && hasFinePointer && scale !== "none";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg group select-none",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full h-full transform-gpu transition-transform duration-500 ease-out",
          enableMotion && scale === "subtle" && "group-hover:scale-[1.03]",
          enableMotion && scale === "normal" && "group-hover:scale-[1.05]"
        )}
      >
        {children}
      </div>

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
}
