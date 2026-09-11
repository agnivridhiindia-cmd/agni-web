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
 * Animations trigger 150px before elements enter the screen.
 */
export const defaultViewport = {
  once: true,
  margin: "150px 0px",
  amount: 0.02,
} as const;

function isAutomatedEnvironment(): boolean {
  if (typeof window === "undefined") return false;
  if (typeof navigator !== "undefined" && Boolean(navigator.webdriver)) return true;
  return false;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  if (isAutomatedEnvironment()) return true;
  if (!window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshotFalse(): boolean {
  return false;
}

/**
 * Hook to detect if user has requested reduced motion or if automated test runner is active.
 * Safe for SSR (defaults to false until mounted).
 */
export function useReducedMotionPreference(): boolean {
  const framerReducedMotion = useReducedMotion();
  const mediaQueryReduced = React.useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshotFalse
  );

  return Boolean(framerReducedMotion || mediaQueryReduced);
}

function subscribePointer(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const finePointerQuery = window.matchMedia("(pointer: fine)");
  const hoverQuery = window.matchMedia("(hover: hover)");
  finePointerQuery.addEventListener("change", callback);
  hoverQuery.addEventListener("change", callback);
  return () => {
    finePointerQuery.removeEventListener("change", callback);
    hoverQuery.removeEventListener("change", callback);
  };
}

function getPointerSnapshot(): string {
  if (typeof window === "undefined" || !window.matchMedia) return "1:1";
  const fine = window.matchMedia("(pointer: fine)").matches ? "1" : "0";
  const hover = window.matchMedia("(hover: hover)").matches ? "1" : "0";
  return `${fine}:${hover}`;
}

const serverPointerSnapshot = "1:1";

/**
 * Hook to detect pointer capabilities:
 * - hasFinePointer: True for mice and trackpads; false for touch screens.
 * - canHover: True if the primary input mechanism can hover over elements.
 */
export function usePointerCapabilities() {
  const snapshot = React.useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    () => serverPointerSnapshot
  );
  const [fine, hover] = snapshot.split(":");
  return {
    hasFinePointer: fine === "1",
    canHover: hover === "1",
  };
}

