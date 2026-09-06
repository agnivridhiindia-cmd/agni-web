"use client";

import * as React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { CtaArrow } from "@/components/ui/cta-arrow";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  useReducedMotionPreference,
} from "@/components/shared/motion";
import { motionDuration, motionEase } from "@/lib/tokens/motion";

const heroStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const heroFadeInUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

function HeroHeadline() {
  return (
    <h1
      id="hero-heading"
      className="font-serif text-3xl sm:text-4xl md:text-[2.65rem] lg:text-[3.1rem] xl:text-[3.35rem] font-bold tracking-tight text-slate-950 !leading-[1.16]"
    >
      Aapke Business Ki Udaan,{" "}
      <span className="text-teal-700 italic font-serif relative inline-block">
        Humare Saath
        <span
          aria-hidden="true"
          className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-teal-600/80 via-amber-500/80 to-amber-600/60 rounded-full"
        />
      </span>
      <span className="block font-sans text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 pt-2 tracking-tight">
        Funding &bull; Compliance &bull; Technology &bull; Marketing
      </span>
    </h1>
  );
}

export function Hero() {
  const { location, name } = siteConfig.company;
  const prefersReduced = useReducedMotionPreference();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-teal-50/25 via-white to-slate-50/50 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 border-b border-slate-200/80"
    >
      {/* ============================================================
          1. FLOATING DECORATIVE AMBIENT SHAPES (Bconsult Motion Style)
          ============================================================ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Soft Blurred Teal Orb - Drifting Top Right */}
        {prefersReduced ? (
          <div className="absolute -top-24 right-[-5%] h-[520px] w-[520px] rounded-full bg-teal-400/15 blur-[120px]" />
        ) : (
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -35, 20, 0],
              scale: [1, 1.08, 0.95, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-24 right-[-5%] h-[520px] w-[520px] rounded-full bg-teal-400/15 blur-[120px] will-change-transform"
          />
        )}

        {/* Soft Burnished Gold Orb - Drifting Center/Bottom Left */}
        {prefersReduced ? (
          <div className="absolute top-1/3 left-[-8%] h-[460px] w-[460px] rounded-full bg-gold-400/15 blur-[110px]" />
        ) : (
          <motion.div
            animate={{
              x: [0, -25, 15, 0],
              y: [0, 30, -15, 0],
              scale: [1, 0.96, 1.06, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 left-[-8%] h-[460px] w-[460px] rounded-full bg-gold-400/15 blur-[110px] will-change-transform"
          />
        )}

        {/* Architectural Grid Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          {/* ============================================================
              LEFT COLUMN: Editorial Pitch, Staggered Headline, Dual Pills
              ============================================================ */}
          <div className="lg:col-span-7 xl:col-span-6 relative space-y-4 sm:space-y-5 text-left">
            {/* Faint, low-opacity teal radial gradient behind primary typography */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-14 -left-16 sm:-left-24 w-[480px] sm:w-[620px] h-[440px] sm:h-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.12)_0%,rgba(13,148,136,0.04)_45%,transparent_70%)] blur-2xl -z-10 select-none"
            />

            {prefersReduced ? (
              <div className="space-y-4 sm:space-y-5">
                {/* Pill Eyebrow Badge */}
                <div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-subtle hover:border-teal-400/50 transition-colors">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
                    </span>
                    <Eyebrow
                      accent
                      className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-700 font-sans uppercase"
                    >
                      <span>
                        ONE-STOP MSME &amp; STARTUP ENGINE &bull; 500+ ENTERPRISES ENABLED
                      </span>
                    </Eyebrow>
                  </div>
                </div>

                {/* Main Headline */}
                <HeroHeadline />

                {/* Supporting Copy */}
                <p className="type-body-lg text-slate-600 max-w-xl leading-relaxed font-sans">
                  From collateral-free debt (CGTMSE, PMEGP, MUDRA) and statutory certifications
                  to custom software engineering, mobile apps, and B2B performance marketing—Agnivridhi
                  India delivers the turnkey capital and technological infrastructure to accelerate
                  enterprise scale from {location.city}, {location.country}.
                </p>

                {/* Dual Rounded-Pill CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                  <MagneticButton strength={0.15} maxOffset={5}>
                    <LinkButton
                      href="/contact"
                      variant="primary"
                      className="rounded-full px-6 py-3 text-base font-semibold shadow-card hover:shadow-glow-teal bg-teal-600 hover:bg-teal-700 text-white inline-flex items-center justify-center gap-2.5 transition-all group"
                    >
                      <span>Schedule Scheme Appraisal</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-teal-700 transition-all duration-200 shrink-0">
                        <Sparkles className="w-3.5 h-3.5" />
                      </span>
                    </LinkButton>
                  </MagneticButton>

                  <LinkButton
                    href="/services"
                    variant="outline"
                    className="rounded-full px-6 py-3 text-base font-semibold border-2 border-slate-200 bg-white/90 hover:bg-white text-slate-800 hover:border-teal-500/60 hover:text-teal-800 inline-flex items-center justify-center gap-2.5 shadow-xs transition-all group"
                  >
                    <span>Explore 4 Advisory Desks</span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-700 transition-all duration-200 shrink-0">
                      <CtaArrow className="w-3.5 h-3.5" />
                    </span>
                  </LinkButton>
                </div>
              </div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={heroStaggerContainer}
                className="space-y-4 sm:space-y-5"
              >
                {/* Pill Eyebrow Badge */}
                <motion.div variants={heroFadeInUpItem}>
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-subtle hover:border-teal-400/50 transition-colors">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
                    </span>
                    <Eyebrow
                      accent
                      className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-700 font-sans uppercase"
                    >
                      <span>
                        ONE-STOP MSME &amp; STARTUP ENGINE &bull; 500+ ENTERPRISES ENABLED
                      </span>
                    </Eyebrow>
                  </div>
                </motion.div>

                {/* Staggered Fraunces Headline */}
                <motion.div variants={heroFadeInUpItem}>
                  <HeroHeadline />
                </motion.div>

                {/* Supporting Copy */}
                <motion.div variants={heroFadeInUpItem}>
                  <p className="type-body-lg text-slate-600 max-w-xl leading-relaxed font-sans">
                    From collateral-free debt (CGTMSE, PMEGP, MUDRA) and statutory certifications
                    to custom software engineering, mobile apps, and B2B performance marketing—Agnivridhi
                    India delivers the turnkey capital and technological infrastructure to accelerate
                    enterprise scale from {location.city}, {location.country}.
                  </p>
                </motion.div>

                {/* Dual Rounded-Pill CTA Buttons */}
                <motion.div variants={heroFadeInUpItem}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                    {/* Primary Conversion Pill */}
                    <MagneticButton strength={0.15} maxOffset={5}>
                      <LinkButton
                        href="/contact"
                        variant="primary"
                        className="rounded-full px-6 py-3 text-base font-semibold shadow-card hover:shadow-glow-teal bg-teal-600 hover:bg-teal-700 text-white inline-flex items-center justify-center gap-2.5 transition-all group"
                      >
                        <span>Schedule Scheme Appraisal</span>
                        <span className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-teal-700 transition-all duration-200 shrink-0">
                          <Sparkles className="w-3.5 h-3.5" />
                        </span>
                      </LinkButton>
                    </MagneticButton>

                    {/* Secondary Exploration Pill */}
                    <LinkButton
                      href="/services"
                      variant="outline"
                      className="rounded-full px-6 py-3 text-base font-semibold border-2 border-slate-200 bg-white/90 hover:bg-white text-slate-800 hover:border-teal-500/60 hover:text-teal-800 inline-flex items-center justify-center gap-2.5 shadow-xs transition-all group"
                    >
                      <span>Explore 4 Advisory Desks</span>
                      <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-700 transition-all duration-200 shrink-0">
                        <CtaArrow className="w-3.5 h-3.5" />
                      </span>
                    </LinkButton>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Verified Trust Micro-Signals */}
            <StaggerContainer
              inView={false}
              delayChildren={0.35}
              staggerDelay={0.06}
              className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-slate-600 font-sans"
            >
              <StaggerItem direction="left" distance={12}>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-700">
                    Direct Liaison with Scheduled Commercial Banks
                  </span>
                </div>
              </StaggerItem>
              <StaggerItem direction="left" distance={12}>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-700">
                    Zero Upfront Collateral Mandates (CGTMSE)
                  </span>
                </div>
              </StaggerItem>
              <StaggerItem direction="left" distance={12}>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-700">
                    Headquartered in {location.city}, {location.state}
                  </span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Layered Image Collage & Floating Value Cards
              ============================================================ */}
          <div className="lg:col-span-5 xl:col-span-6 relative pt-4 lg:pt-0">
            <FadeIn direction="up" distance={20} delay={0.18}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* 1. Main Anchor Image (Agnivridhi Advisory Offices) */}
                <div className="relative aspect-[4/3] sm:aspect-[14/10] w-full rounded-3xl overflow-hidden shadow-floating border border-white/90 bg-slate-900 group">
                  <Image
                    src="/img/hero-bg.jpg"
                    alt="Agnivridhi Corporate Advisory Operations"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient sheen overlay for photographic depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent pointer-events-none" />

                  {/* Subtle Office Location Badge pinned to main frame bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs font-mono">
                    <div className="flex items-center gap-2 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                      <Building2 className="w-3.5 h-3.5 text-teal-400" />
                      <span className="font-sans text-[11px] font-medium tracking-wide">
                        Advisory Operations &bull; {location.city}, NCR
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 bg-emerald-950/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 text-emerald-300 text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active Mandates</span>
                    </div>
                  </div>
                </div>

                {/* 2. Floating Top-Right Scheme Metric Badge */}
                <div className="absolute -top-6 -right-2 sm:-top-8 sm:-right-4 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3.5 shadow-floating border border-gold-500/30 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 text-gold-700 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-serif text-lg sm:text-xl font-bold text-slate-950 block leading-tight">
                      ₹5.00 Crore
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold-700 font-sans block">
                      Max Collateral-Free Cover
                    </span>
                  </div>
                </div>

                {/* 3. Floating Bottom-Left Executive Leadership Card */}
                <div className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-6 max-w-[290px] sm:max-w-[320px] rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-4.5 shadow-floating border border-slate-200/90 z-20">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-teal-600/40 shadow-xs shrink-0 bg-slate-100">
                      <Image
                        src="/img/rahul-kumar-singh.jpg"
                        alt={siteConfig.founder.name ?? "Principal Executive"}
                        fill
                        sizes="48px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-serif text-sm font-bold text-slate-900 truncate">
                          {siteConfig.founder.name}
                        </h3>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </div>
                      <p className="text-[11px] text-teal-800 font-medium truncate font-sans">
                        {siteConfig.founder.role}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono pt-0.5">
                        <span className="truncate">Ex-Banking Underwriter</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
