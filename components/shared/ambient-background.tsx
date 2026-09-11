"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  className?: string;
  showSpotlight?: boolean;
  showGrid?: boolean;
}

function useMediaQuery(query: string, serverFallback = false): boolean {
  const subscribe = React.useCallback(
    (callback: () => void) => {
      if (typeof window === "undefined") return () => {};
      const matchMedia = window.matchMedia(query);
      matchMedia.addEventListener("change", callback);
      return () => matchMedia.removeEventListener("change", callback);
    },
    [query]
  );

  const getSnapshot = () => {
    if (typeof window === "undefined") return serverFallback;
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => serverFallback;

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function AmbientBackground({
  className,
  showSpotlight = true,
  showGrid = true,
}: AmbientBackgroundProps) {
  const [mousePos, setMousePos] = React.useState({ x: -1000, y: -1000 });
  const isPointerFine = useMediaQuery("(pointer: fine)", false);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)", false);
  const targetPos = React.useRef({ x: -1000, y: -1000 });
  const currentPos = React.useRef({ x: -1000, y: -1000 });
  const rafRef = React.useRef<number | null>(null);

  // Smooth lerp mouse tracking for desktop spotlight
  React.useEffect(() => {
    if (!showSpotlight || !isPointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      targetPos.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.09);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.09);

      setMousePos({
        x: Math.round(currentPos.current.x),
        y: Math.round(currentPos.current.y),
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [showSpotlight, isPointerFine]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-0 select-none overflow-hidden",
        className
      )}
    >
      {/* 1. High-Performance Fluid Aurora Drift Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Electric Cyan & Sapphire Aurora Orb (Top Right) */}
        <div
          className={cn(
            "absolute -top-[12%] -right-[10%] h-[800px] w-[800px] rounded-full",
            "bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18)_0%,rgba(14,116,144,0.1)_45%,transparent_70%)]",
            "blur-[90px]",
            !prefersReducedMotion && "animate-ambient-drift-primary"
          )}
        />

        {/* Secondary Agni Warm Burnished Gold / Amber Catalyst Orb (Left Center) */}
        <div
          className={cn(
            "absolute top-[30%] -left-[12%] h-[750px] w-[750px] rounded-full",
            "bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.16)_0%,rgba(217,119,6,0.08)_50%,transparent_72%)]",
            "blur-[100px]",
            !prefersReducedMotion && "animate-ambient-drift-secondary"
          )}
        />

        {/* Tertiary Growth Emerald / Sovereign Teal Orb (Bottom Center) */}
        <div
          className={cn(
            "absolute -bottom-[15%] left-[25%] h-[850px] w-[850px] rounded-full",
            "bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.13)_0%,rgba(6,182,212,0.08)_48%,transparent_70%)]",
            "blur-[110px]",
            !prefersReducedMotion && "animate-ambient-drift-tertiary"
          )}
        />

        {/* Deep Royal Midnight Blue Atmospheric Wash */}
        <div
          className="absolute top-[15%] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(14,116,144,0.12)_0%,transparent_70%)] blur-[80px]"
        />
      </div>

      {/* 2. Precision Architectural Grid & Vignette */}
      {showGrid && (
        <div
          className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_90%_75%_at_50%_45%,#000_65%,transparent_100%)] opacity-80"
        />
      )}

      {/* 3. Interactive Mouse Spotlight (Desktop only, GPU accelerated) */}
      {showSpotlight && isPointerFine && (
        <div
          className="absolute pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle at center, rgba(245, 158, 11, 0.1) 0%, rgba(6, 182, 212, 0.08) 35%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(20px)",
            opacity: mousePos.x > -500 ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      )}
    </div>
  );
}
