"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "./motion-config";

export interface AnimatedCounterProps {
  /**
   * Numeric value to count up to. Can be number or parsable string.
   * If null/undefined (e.g. unverified single source of truth metric), renders fallback.
   */
  value: number | string | null | undefined;
  prefix?: string;
  suffix?: string;
  duration?: number; // Duration in seconds (default: 1.4s)
  decimals?: number;
  locale?: string;
  fallback?: string;
  className?: string;
}

/**
 * Reusable animated counter foundation for statistics and numerical metrics.
 * Principles:
 * - Interpolates from 0 to target value once upon entering viewport
 * - Automatically displays final value instantly under prefers-reduced-motion
 * - Strictly handles null / unverified metrics without crashing
 */
export function AnimatedCounter({
  value,
  prefix,
  suffix,
  duration = 1.4,
  decimals = 0,
  locale = "en-IN",
  fallback = "ÃƒÂ¢Ã¢â€šÂ¬ - Â",
  className,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const prefersReduced = useReducedMotionPreference();

  // Parse numeric target from string or number
  const numericTarget = React.useMemo(() => {
    if (value === null || value === undefined) return null;
    if (typeof value === "number") return value;
    const clean = String(value).replace(/[^0-9.-]+/g, "");
    const parsed = parseFloat(clean);
    return isNaN(parsed) ? null : parsed;
  }, [value]);

  const formatter = React.useMemo(() => {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [locale, decimals]);

  const [displayValue, setDisplayValue] = React.useState<string>(() =>
    numericTarget === null ? fallback : formatter.format(0)
  );

  React.useEffect(() => {
    if (numericTarget === null || prefersReduced || !inView) {
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Smooth ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * numericTarget;

      setDisplayValue(formatter.format(current));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(formatter.format(numericTarget));
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, numericTarget, duration, formatter, prefersReduced]);

  if (numericTarget === null) {
    return <span ref={ref} className={className}>{fallback}</span>;
  }

  const renderedValue = prefersReduced ? formatter.format(numericTarget) : displayValue;

  return (
    <span
      ref={ref}
      className={cn("tabular-nums inline-flex items-baseline", className)}
      aria-label={`${prefix ?? ""}${numericTarget}${suffix ?? ""}`}
    >
      {prefix && <span className="mr-0.5 select-none">{prefix}</span>}
      <span>{renderedValue}</span>
      {suffix && <span className="ml-0.5 select-none">{suffix}</span>}
    </span>
  );
}
