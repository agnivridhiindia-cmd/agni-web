"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "@/components/shared/motion/motion-config";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * Color theme variant for the hairline border glow:
   * - "amber": Burnished slate-amber (#D97706 / #B8891F) for flagship industrial & financial status
   * - "teal": Primary brand teal (#0891B2) for technology and institutional compliance
   * - "slate": Understated neutral platinum (#64748B)
   */
  glowVariant?: "amber" | "teal" | "slate";
  /** Radius of the radial spotlight in pixels */
  spotlightRadius?: number;
  /** Optional animated continuous border-beam sweep */
  borderBeam?: boolean;
  /** Additional class for the inner card wrapper */
  innerClassName?: string;
}

const variantGlowMap = {
  amber: {
    border: "rgba(217, 119, 6, 0.42)",
    inner: "rgba(245, 158, 11, 0.04)",
    beam: "from-transparent via-amber-500/50 to-transparent",
  },
  teal: {
    border: "rgba(8, 145, 178, 0.45)",
    inner: "rgba(13, 148, 136, 0.04)",
    beam: "from-transparent via-teal-500/50 to-transparent",
  },
  slate: {
    border: "rgba(100, 116, 139, 0.35)",
    inner: "rgba(148, 163, 184, 0.03)",
    beam: "from-transparent via-slate-400/40 to-transparent",
  },
};

export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  (
    {
      children,
      className,
      innerClassName,
      glowVariant = "amber",
      spotlightRadius = 340,
      borderBeam = false,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    forwardedRef
  ) => {
    const localRef = React.useRef<HTMLDivElement>(null);
    const prefersReduced = useReducedMotionPreference();
    const config = variantGlowMap[glowVariant] || variantGlowMap.amber;

    // Direct DOM manipulation of CSS variables avoids React re-renders on mousemove
    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (prefersReduced) return;
        const target = localRef.current;
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
        target.style.setProperty("--spotlight-opacity", "1");

        onMouseMove?.(e);
      },
      [prefersReduced, onMouseMove]
    );

    const handleMouseLeave = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const target = localRef.current;
        if (target) {
          target.style.setProperty("--spotlight-opacity", "0");
        }
        onMouseLeave?.(e);
      },
      [onMouseLeave]
    );

    // Merge forwarded ref and local ref
    React.useImperativeHandle(forwardedRef, () => localRef.current as HTMLDivElement);

    return (
      <div
        ref={localRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "group/spotlight relative rounded-3xl p-[1px] overflow-hidden transition-all duration-300",
          "bg-slate-200/90 hover:shadow-[0_16px_36px_-8px_rgba(15,23,42,0.08)]",
          className
        )}
        style={
          {
            "--mouse-x": "-999px",
            "--mouse-y": "-999px",
            "--spotlight-opacity": "0",
          } as React.CSSProperties
        }
        {...props}
      >
        {/* Layer 1: Cursor-Following Hairline Border Glow */}
        {!prefersReduced && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-out"
            style={{
              opacity: "var(--spotlight-opacity, 0)",
              background: `radial-gradient(${spotlightRadius}px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), ${config.border}, transparent 65%)`,
            }}
            aria-hidden="true"
          />
        )}

        {/* Layer 2: Optional Border-Beam Continuous Trace */}
        {borderBeam && !prefersReduced && (
          <div
            className="absolute -inset-[100%] pointer-events-none opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-500 animate-[spin_6s_linear_infinite]"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${config.border} 60deg, transparent 120deg)`,
            }}
            aria-hidden="true"
          />
        )}

        {/* Layer 3: Inner Card Canvas */}
        <div
          className={cn(
            "relative h-full w-full rounded-[calc(1.5rem-1px)] bg-white p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300",
            innerClassName
          )}
        >
          {/* Layer 4: Subtle Interior Ambient Glow */}
          {!prefersReduced && (
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-out"
              style={{
                opacity: "var(--spotlight-opacity, 0)",
                background: `radial-gradient(${spotlightRadius * 1.3}px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), ${config.inner}, transparent 70%)`,
              }}
              aria-hidden="true"
            />
          )}

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

SpotlightCard.displayName = "SpotlightCard";
