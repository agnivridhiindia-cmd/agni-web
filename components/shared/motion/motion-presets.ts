import type { Variants, Transition } from "framer-motion";
import { motionDuration, motionEase } from "@/lib/tokens/motion";

/**
 * Standard transition curve for UI reveals and entrances
 */
export const defaultTransition: Transition = {
  duration: motionDuration.normal, // 350ms
  ease: motionEase.entrance,
};

/**
 * Fast transition for micro-interactions and small controls
 */
export const fastTransition: Transition = {
  duration: motionDuration.fast, // 200ms
  ease: motionEase.standard,
};

/**
 * Reduced motion fallback transition (instantaneous with linear fade)
 */
export const reducedTransition: Transition = {
  duration: 0.05,
  ease: "linear",
};

/**
 * Core Motion Variants
 * Distances are strictly restrained between 12px and 20px.
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    transition: {
      duration: custom?.duration ?? motionDuration.normal,
      delay: custom?.delay ?? 0,
      ease: motionEase.entrance,
    },
  }),
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom?.duration ?? motionDuration.normal,
      delay: custom?.delay ?? 0,
      ease: motionEase.entrance,
    },
  }),
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom?.duration ?? motionDuration.normal,
      delay: custom?.delay ?? 0,
      ease: motionEase.entrance,
    },
  }),
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom?.duration ?? motionDuration.normal,
      delay: custom?.delay ?? 0,
      ease: motionEase.entrance,
    },
  }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom?.duration ?? motionDuration.normal,
      delay: custom?.delay ?? 0,
      ease: motionEase.entrance,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom?.duration ?? motionDuration.normal,
      delay: custom?.delay ?? 0,
      ease: motionEase.entrance,
    },
  }),
};

export const subtleReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom?.duration ?? motionDuration.fast,
      delay: custom?.delay ?? 0,
      ease: motionEase.standard,
    },
  }),
};

/**
 * Reduced motion preset that eliminates all transforms
 */
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: reducedTransition,
  },
};

/**
 * Factory for creating custom direction-based fade variants
 */
export function getDirectionalVariants(
  direction: "up" | "down" | "left" | "right" | "none" = "up",
  distance: number = 16,
  prefersReduced: boolean = false
): Variants {
  if (prefersReduced) {
    return reducedMotionVariants;
  }

  return {
    hidden: {
      opacity: 0,
    },
    visible: (custom?: { delay?: number; duration?: number }) => ({
      opacity: 1,
      transition: {
        duration: custom?.duration ?? motionDuration.normal,
        delay: custom?.delay ?? 0,
        ease: motionEase.entrance,
      },
    }),
  };
}
