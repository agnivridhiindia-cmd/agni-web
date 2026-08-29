import type { Transition } from "framer-motion";

/**
 * Agnivridhi Visual System - Motion Tokens
 * Principles:
 * 1. Micro-interactions should feel immediate (100ms-200ms)
 * 2. Section and card entrances should feel smooth and editorial (350ms)
 * 3. Large structural movements should be slower (600ms)
 * 4. Strictly no cartoonish bouncing or erratic springs
 * 5. Full compliance with prefers-reduced-motion
 */

export const motionDuration = {
  instant: 0.1, // 100ms: micro-states, button presses, focus
  fast: 0.2, // 200ms: dropdowns, tooltips, hover transitions
  normal: 0.35, // 350ms: modal open, tab switch, card reveal
  slow: 0.6, // 600ms: hero text staggered reveals, page transitions
} as const;

export type MotionDuration = keyof typeof motionDuration;

export const motionEase = {
  // Balanced cubic bezier for general UI interaction
  standard: [0.2, 0.0, 0, 1.0],
  // Emphasized curve for deliberate, premium focal elements
  emphasized: [0.05, 0.7, 0.1, 1.0],
  // Smooth deceleration for elements entering the screen
  entrance: [0.0, 0.0, 0.2, 1.0],
  // Crisp acceleration for elements exiting the view
  exit: [0.4, 0.0, 1.0, 1.0],
} as const;

export type MotionEase = keyof typeof motionEase;

export const motionTransitions = {
  instant: {
    duration: motionDuration.instant,
    ease: motionEase.standard,
  } satisfies Transition,
  fast: {
    duration: motionDuration.fast,
    ease: motionEase.standard,
  } satisfies Transition,
  normal: {
    duration: motionDuration.normal,
    ease: motionEase.entrance,
  } satisfies Transition,
  slow: {
    duration: motionDuration.slow,
    ease: motionEase.emphasized,
  } satisfies Transition,
  reduced: {
    duration: 0.01,
    ease: "linear",
  } satisfies Transition,
} as const;

/**
 * Returns accessible transition configuration that respects reduced motion.
 */
export function getTransition(
  preset: keyof typeof motionTransitions = "normal",
  prefersReducedMotion = false
): Transition {
  if (prefersReducedMotion) {
    return motionTransitions.reduced;
  }
  return motionTransitions[preset];
}
