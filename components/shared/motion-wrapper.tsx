"use client";

/**
 * Backwards-compatible bridge for Phase 4 callers.
 * Re-exports the unified motion primitives from @/components/shared/motion.
 */
export {
  FadeIn,
  type FadeInProps,
  StaggerContainer,
  type StaggerContainerProps,
  StaggerItem,
  type StaggerItemProps,
  Reveal,
  type RevealProps,
  CardTilt,
  type CardTiltProps,
  Parallax,
  type ParallaxProps,
  AnimatedCounter,
  type AnimatedCounterProps,
  PageTransition,
  type PageTransitionProps,
  ImageHover,
  type ImageHoverProps,
} from "./motion";
