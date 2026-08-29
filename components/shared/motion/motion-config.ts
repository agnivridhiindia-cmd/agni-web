"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import {
  motionDuration,
  motionEase,
  motionTransitions,
  getTransition,
  type MotionDuration,
  type MotionEase,
} from "@/lib/tokens/motion";

export {
  motionDuration,
  motionEase,
  motionTransitions,
  getTransition,
  type MotionDuration,
  type MotionEase,
};

/**
 * Standard viewport configuration for scroll-triggered reveals.
 * Animations trigger once when ~20% of the element enters the viewport with a -40px margin.
 */
export const defaultViewport = {
  once: true,
  margin: "-40px",
  amount: 0.2,
} as const;

/**
 * Hook to detect if user has requested reduced motion.
 * Safe for SSR (defaults to false until mounted).
 */
export function useReducedMotionPreference(): boolean {
  const framerReducedMotion = useReducedMotion();
  const [mediaQueryReduced, setMediaQueryReduced] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMediaQueryReduced(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setMediaQueryReduced(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return Boolean(framerReducedMotion || mediaQueryReduced);
}

/**
 * Hook to detect pointer capabilities:
 * - hasFinePointer: True for mice and trackpads; false for touch screens.
 * - canHover: True if the primary input mechanism can hover over elements.
 */
export function usePointerCapabilities() {
  const [capabilities, setCapabilities] = React.useState({
    hasFinePointer: true,
    canHover: true,
  });

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const hoverQuery = window.matchMedia("(hover: hover)");

    const update = () => {
      setCapabilities({
        hasFinePointer: finePointerQuery.matches,
        canHover: hoverQuery.matches,
      });
    };

    update();

    finePointerQuery.addEventListener("change", update);
    hoverQuery.addEventListener("change", update);

    return () => {
      finePointerQuery.removeEventListener("change", update);
      hoverQuery.removeEventListener("change", update);
    };
  }, []);

  return capabilities;
}
