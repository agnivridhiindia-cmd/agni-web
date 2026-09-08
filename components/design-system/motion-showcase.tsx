"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge, Eyebrow } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { CtaArrow } from "@/components/ui/cta-arrow";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  FadeIn,
  Reveal,
  StaggerContainer,
  StaggerItem,
  CardTilt,
  Parallax,
  AnimatedCounter,
  ImageHover,
  useReducedMotionPreference,
  usePointerCapabilities,
} from "@/components/shared/motion";

export function MotionShowcase() {
  const isReducedMotion = useReducedMotionPreference();
  const { hasFinePointer, canHover } = usePointerCapabilities();
  const [staggerKey, setStaggerKey] = React.useState(0);
  const [counterKey, setCounterKey] = React.useState(0);

  return (
    <section className="space-y-12 bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-card">
      {/* Section Header */}
      <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Eyebrow>Phase 6 System Verification</Eyebrow>
            <Badge variant="primary">Framer Motion + CSS</Badge>
            <Badge variant={isReducedMotion ? "warning" : "success"}>
              {isReducedMotion ? "Reduced Motion Active" : "Full Motion Enabled"}
            </Badge>
          </div>
          <h2 className="type-h2 text-slate-900 mt-1">
            Motion, Transitions & Interaction System
          </h2>
          <p className="type-body text-slate-600 max-w-2xl mt-1.5">
            Demonstrating calibrated motion tokens, micro-interactions, viewport reveals, opt-in card tilt, magnetic physics, and strict accessibility fallbacks.
          </p>
        </div>

        {/* Hardware & Accessibility Capabilities */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono bg-slate-50 border border-slate-200/80 p-3 rounded-lg">
          <span className="text-slate-500">Device Pointer:</span>
          <span className="font-semibold text-slate-800">
            {hasFinePointer ? "Fine (Mouse/Trackpad)" : "Coarse (Touchscreen)"}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500">Hover:</span>
          <span className="font-semibold text-slate-800">
            {canHover ? "Supported" : "Touch / None"}
          </span>
        </div>
      </div>

      {/* Grid of Motion Primitives */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 1. FadeIn & Directional Presets */}
        <Card variant="standard" className="space-y-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="type-caption text-teal-600 font-mono">01. &lt;FadeIn /&gt;</span>
              <Badge variant="outline">Restrained 16px</Badge>
            </div>
            <CardTitle>Directional Fade Presets</CardTitle>
            <CardDescription>
              Micro-entrances with cubic bezier deceleration and zero layout shift.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <FadeIn direction="up">
              <div className="p-2.5 rounded bg-teal-50 border border-teal-200/70 text-xs font-medium text-teal-900">
                FadeIn Direction: Up (default 16px)
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800">
                FadeIn Direction: Left (16px)
              </div>
            </FadeIn>
            <FadeIn direction="none" delay={0.2}>
              <div className="p-2.5 rounded bg-gold-50 border border-gold-200 text-xs font-medium text-gold-900">
                FadeIn Direction: None (Opacity Only)
              </div>
            </FadeIn>
          </CardContent>
        </Card>

        {/* 2. Viewport Reveal */}
        <Card variant="standard" className="space-y-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="type-caption text-teal-600 font-mono">02. &lt;Reveal /&gt;</span>
              <Badge variant="outline">whileInView</Badge>
            </div>
            <CardTitle>Viewport Scroll Reveal</CardTitle>
            <CardDescription>
              Triggers once when element scrolls into view (-40px margin).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Reveal>
              <div className="p-4 rounded-lg bg-slate-900 text-white space-y-1">
                <span className="type-caption text-gold-400 uppercase font-mono tracking-widest">
                  Editorial Reveal
                </span>
                <p className="text-sm font-serif font-semibold">
                  Smooth 350ms entrance curve
                </p>
                <p className="text-xs text-slate-400">
                  Animates once and avoids repeated re-triggering.
                </p>
              </div>
            </Reveal>
          </CardContent>
        </Card>

        {/* 3. Stagger Mechanism */}
        <Card variant="standard" className="space-y-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="type-caption text-teal-600 font-mono">03. &lt;StaggerContainer /&gt;</span>
              <button
                type="button"
                onClick={() => setStaggerKey((k) => k + 1)}
                className="text-xs text-teal-600 hover:text-teal-700 font-medium inline-flex items-center gap-1"
                aria-label="Replay stagger sequence"
              >
                <RotateCcw className="w-3 h-3" /> Replay
              </button>
            </div>
            <CardTitle>Orchestrated Stagger</CardTitle>
            <CardDescription>
              Subtle 80ms sequential reveal for lists and cards.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StaggerContainer key={staggerKey} className="space-y-2">
              <StaggerItem className="p-2.5 rounded bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                <span>Step 1: Scheme Appraisal</span>
                <Badge variant="primary" className="text-[10px]">Active</Badge>
              </StaggerItem>
              <StaggerItem className="p-2.5 rounded bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                <span>Step 2: DPR Documentation</span>
                <Badge variant="outline" className="text-[10px]">Queued</Badge>
              </StaggerItem>
              <StaggerItem className="p-2.5 rounded bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                <span>Step 3: Credit Guarantee Sanction</span>
                <Badge variant="muted" className="text-[10px]">Verified</Badge>
              </StaggerItem>
            </StaggerContainer>
          </CardContent>
        </Card>

        {/* 4. Button Interactions */}
        <Card variant="standard" className="space-y-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="type-caption text-teal-600 font-mono">04. Micro-Feedback</span>
              <Badge variant="outline">Hover & Active</Badge>
            </div>
            <CardTitle>Button States</CardTitle>
            <CardDescription>
              Subtle hover elevation, 0.98 active press scale, and accessible focus ring.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2.5">
              <Button variant="primary" size="sm">
                Hover Me
              </Button>
              <Button variant="accent" size="sm">
                Press Feedback
              </Button>
              <Button variant="outline" size="sm">
                Outline Shift
              </Button>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              Test keyboard focus via Tab: observe the 2px teal focus ring with 2px offset.
            </p>
          </CardContent>
        </Card>

        {/* 5. Magnetic Button */}
        <Card variant="standard" className="space-y-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="type-caption text-teal-600 font-mono">05. &lt;MagneticButton /&gt;</span>
              <Badge variant="accent">Opt-in (Max 6px)</Badge>
            </div>
            <CardTitle>Magnetic Physics</CardTitle>
            <CardDescription>
              Subtle pointer pull for conversion CTAs. Disabled on touch and reduced motion.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-200/80">
              <MagneticButton>
                <Button variant="primary" size="default" rightIcon={<Sparkles className="w-4 h-4" />}>
                  Magnetic Pull Action
                </Button>
              </MagneticButton>
            </div>
            <p className="text-xs text-slate-500 text-center">
              Move your mouse near the button to feel the restrained 6px attraction.
            </p>
          </CardContent>
        </Card>

        {/* 6. Card Interaction Variants */}
        <Card variant="standard" className="space-y-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="type-caption text-teal-600 font-mono">06. Card Variants</span>
              <Badge variant="outline">Interactive Levels</Badge>
            </div>
            <CardTitle>Card Hover Hierarchy</CardTitle>
            <CardDescription>
              Different levels of feedback based on component importance.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Card variant="interactive" className="p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">variant=&quot;interactive&quot;</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">Lift + border emphasis + cursor feedback</p>
            </Card>
            <Card variant="glow" className="p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">variant=&quot;glow&quot;</span>
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">Soft teal glow for flagship items</p>
            </Card>
          </CardContent>
        </Card>

        {/* 7. Opt-in Card Tilt */}
        <Card variant="standard" className="space-y-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="type-caption text-teal-600 font-mono">07. &lt;CardTilt /&gt;</span>
              <Badge variant="accent">Max &plusmn;3&deg;</Badge>
            </div>
            <CardTitle>Opt-in 3D Card Tilt</CardTitle>
            <CardDescription>
              Delicate perspective tilt for featured editorial cards. Disabled on touch.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardTilt>
              <div className="p-5 rounded-lg bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-elevated space-y-2">
                <Badge variant="accent" className="text-[10px]">Featured Offering</Badge>
                <h4 className="font-serif text-base font-semibold">
                  CGTMSE Sovereign Guarantee
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Move cursor over this card to observe the gentle 3-degree 3D tilt.
                </p>
              </div>
            </CardTilt>
          </CardContent>
        </Card>

        {/* 8. Image Hover Scale */}
        <Card variant="standard" className="space-y-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="type-caption text-teal-600 font-mono">08. &lt;ImageHover /&gt;</span>
              <Badge variant="outline">1.03x Scale</Badge>
            </div>
            <CardTitle>Image Interaction</CardTitle>
            <CardDescription>
              Restrained zoom with overflow clipping and zero bounding box shift.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ImageHover overlay className="h-32 bg-slate-200">
              <div className="w-full h-full bg-gradient-to-tr from-teal-800 via-teal-700 to-gold-600 flex items-center justify-center text-white">
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Hover to Observe Zoom
                </span>
              </div>
            </ImageHover>
          </CardContent>
        </Card>

        {/* 9. Animated Counter */}
        <Card variant="standard" className="space-y-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="type-caption text-teal-600 font-mono">09. &lt;AnimatedCounter /&gt;</span>
              <button
                type="button"
                onClick={() => setCounterKey((k) => k + 1)}
                className="text-xs text-teal-600 hover:text-teal-700 font-medium inline-flex items-center gap-1"
                aria-label="Replay counter"
              >
                <RotateCcw className="w-3 h-3" /> Replay
              </button>
            </div>
            <CardTitle>Numerical Stat Counter</CardTitle>
            <CardDescription>
              Interpolates smoothly to target upon entering viewport with Indian locale formatting.
            </CardDescription>
          </CardHeader>
          <CardContent key={counterKey} className="space-y-3">
            <div className="flex items-baseline justify-between p-3 bg-slate-50 rounded border border-slate-200">
              <span className="text-xs text-slate-500">Metric 1:</span>
              <span className="font-serif text-2xl font-bold text-teal-700">
                <AnimatedCounter value={50} prefix="ÃƒÂ¢ - Å¡Ã‚Â¹" suffix=" Cr+" />
              </span>
            </div>
            <div className="flex items-baseline justify-between p-3 bg-slate-50 rounded border border-slate-200">
              <span className="text-xs text-slate-500">Metric 2:</span>
              <span className="font-serif text-2xl font-bold text-slate-900">
                <AnimatedCounter value={250} suffix="+" />
              </span>
            </div>
          </CardContent>
        </Card>

        {/* 10. Parallax Decorative Accent */}
        <Card variant="standard" className="space-y-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="type-caption text-teal-600 font-mono">10. &lt;Parallax /&gt;</span>
              <Badge variant="outline">Restrained 20px</Badge>
            </div>
            <CardTitle>Decorative Scroll Parallax</CardTitle>
            <CardDescription>
              Gentle scroll interpolation for background visual accents. Disabled on reduced motion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-28 rounded-lg bg-slate-100 overflow-hidden relative flex items-center justify-center p-4 border border-slate-200">
              <Parallax speed={0.2} offsetDistance={16}>
                <div className="p-3 rounded-md bg-white border border-teal-200/80 shadow-subtle flex items-center gap-2 text-xs text-teal-800 font-medium">
                  <Compass className="w-4 h-4 text-teal-600" />
                  <span>Gentle Decorative Scroll Float</span>
                </div>
              </Parallax>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Link & Arrow Micro-Interactions */}
      <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="type-h4 text-slate-900">Link &amp; CTA Arrow Micro-Movement</h4>
          <p className="type-body-sm text-slate-600">
            Arrows translate 3px to the right on group hover with zero layout reflow.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm">
          <Link
            href="/services"
            className="font-medium text-teal-600 hover:text-teal-700 inline-flex items-center gap-1.5 group transition-colors"
          >
            <span>Explore advisory catalog</span>
            <CtaArrow className="w-4 h-4" />
          </Link>
          <Link
            href="/about"
            className="font-medium text-slate-700 hover:text-slate-900 inline-flex items-center gap-1.5 group transition-colors"
          >
            <span>Company profile</span>
            <CtaArrow className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Accordion and Dialog Micro-Interactions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Accordion */}
        <div className="border border-slate-200 rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="type-h4 text-slate-900">Accordion Motion</h4>
            <Badge variant="outline">CSS Keyframes</Badge>
          </div>
          <p className="type-body-sm text-slate-600">
            Smooth height and opacity expansion respecting reduced motion.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>CGTMSE Margin and Guarantee Terms</AccordionTrigger>
              <AccordionContent>
                Guarantee cover extends up to 85% for micro-enterprises and women entrepreneurs, facilitating collateral-free credit without real estate pledges.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>ISO 9001:2015 Audit Readiness</AccordionTrigger>
              <AccordionContent>
                Structured internal audit checklists and quality manual documentation prepared in compliance with accredited certification bodies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Dialog */}
        <div className="border border-slate-200 rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="type-h4 text-slate-900">Dialog Transition</h4>
            <Badge variant="outline">Radix + Fade/Scale</Badge>
          </div>
          <p className="type-body-sm text-slate-600">
            Subtle backdrop blur fade and 95% to 100% zoom-in with full keyboard accessibility.
          </p>
          <div className="pt-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Accessible Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Accessible Modal Animation</DialogTitle>
                  <DialogDescription>
                    This modal enters with a smooth opacity fade and a 5% scale settle. Focus is automatically trapped and pressing Escape dismisses it.
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4 rounded-md bg-slate-50 text-xs text-slate-600">
                  Full WCAG 2.1 compliance with focus restoration upon dismissal.
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="primary" size="sm">
                      Dismiss Dialog
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
