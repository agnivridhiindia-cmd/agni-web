"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { useReducedMotionPreference } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

const heroStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

const heroFadeInUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headlineLineReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export interface HeroProps {
  isPinned?: boolean;
}

export function Hero({ isPinned = false }: HeroProps) {
  const prefersReduced = useReducedMotionPreference();
  const { location } = siteConfig.company;

  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(
        "relative overflow-hidden border-b border-cyan-100/80 text-[#181226]",
        "bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_22%),radial-gradient(circle_at_82%_12%,_rgba(20,184,166,0.18),transparent_20%),radial-gradient(circle_at_50%_80%,_rgba(14,165,233,0.14),transparent_28%),linear-gradient(135deg,#f8fdff_0%,#edfaff_24%,#f9fcff_52%,#eefaf8_100%)]",
        isPinned
          ? "h-full w-full flex flex-col justify-center pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-16 lg:pb-0"
          : "pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
      )}
    >
      {/* Background Architectural Ambient Lighting - High performance hardware composited */}
      <div
        aria-hidden="true"
        className="hero-ambient-drift pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Primary cyan/teal atmospheric glow */}
        <div className="absolute -top-20 right-[-5%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22)_0%,rgba(45,212,191,0.08)_42%,transparent_70%)]" />

        {/* Secondary mint glow */}
        <div className="absolute top-[38%] left-[-12%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.15)_0%,rgba(103,232,249,0.06)_45%,transparent_72%)]" />

        {/* Center luminous highlight */}
        <div className="absolute top-[18%] left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.2)_32%,transparent_72%)]" />

        {/* Architectural Grid Texture with soft radial mask */}
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,#0891B2_1px,transparent_1px),linear-gradient(to_bottom,#0891B2_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_82%_70%_at_50%_42%,#000_68%,transparent_100%)]" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          {/* ============================================================
              LEFT COLUMN: Editorial Typography, Staggered Headline, CTAs
              ============================================================ */}
          <div className="lg:col-span-7 xl:col-span-6 relative space-y-6 sm:space-y-8 text-left">
            {prefersReduced ? (
              <div className="space-y-6">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-200/90 text-xs font-mono tracking-widest text-[#0891B2] shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
                  <span>AGNIVRIDHI &bull; ADVISORY / INDIA</span>
                </div>

                {/* Refined Serif Headline */}
                <h1
                  id="hero-heading"
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.2rem] font-normal tracking-[-0.025em] text-[#181226] !leading-[1.04]"
                >
                  Aapke Business Ki
                  <br />
                  <span className="text-[#0891B2] italic font-normal">Udaan,</span>
                  <br />
                  Humare Saath
                </h1>

                {/* Supporting Copy */}
                <p className="font-sans text-base sm:text-lg text-[#475569] max-w-xl leading-[1.7] font-normal">
                  One stop solution for MSMEs and Startups - funding, compliance, and IT
                  solutions.
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/services"
                    className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0891B2]/90 via-[#0EA5C9]/90 to-[#10B981]/90 backdrop-blur-md border border-white/25 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_24px_rgba(8,145,178,0.28)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),0_14px_32px_rgba(14,165,233,0.32)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer [transform:translateZ(0)]"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-cyan-200/90 bg-white/75 backdrop-blur-md hover:border-[#0891B2]/60 hover:bg-white/95 text-[#181226] hover:text-[#0891B2] font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_8px_20px_rgba(8,145,178,0.06)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_24px_rgba(8,145,178,0.12)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer [transform:translateZ(0)]"
                  >
                    <span>Explore Our Services</span>
                  </Link>
                </div>
              </div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={heroStaggerContainer}
                className="space-y-6"
              >
                {/* Eyebrow */}
                <motion.div variants={heroFadeInUpItem}>
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-200/90 text-xs font-mono tracking-widest text-[#0891B2] shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2] animate-pulse" />
                    <span>AGNIVRIDHI &bull; ADVISORY / INDIA</span>
                  </div>
                </motion.div>

                {/* Refined Headline with Line-by-Line Masked Reveals */}
                <h1
                  id="hero-heading"
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.2rem] font-normal tracking-[-0.025em] text-[#181226] !leading-[1.04]"
                >
                  <span className="block overflow-hidden py-1">
                    <motion.span variants={headlineLineReveal} className="block">
                      Aapke Business Ki
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden py-1">
                    <motion.span
                      variants={headlineLineReveal}
                      className="block text-[#0891B2] italic font-normal"
                    >
                      Udaan,
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden py-1">
                    <motion.span variants={headlineLineReveal} className="block">
                      Humare Saath
                    </motion.span>
                  </span>
                </h1>

                {/* Supporting Copy */}
                <motion.div variants={heroFadeInUpItem}>
                  <p className="font-sans text-base sm:text-lg text-[#475569] max-w-xl leading-[1.7] font-normal">
                    One stop solution for MSMEs and Startups - funding, compliance, and IT
                    solutions.
                  </p>
                </motion.div>

                {/* Dual CTAs */}
                <motion.div variants={heroFadeInUpItem}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <Link
                      href="/services"
                      className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0891B2]/90 via-[#0EA5C9]/90 to-[#10B981]/90 backdrop-blur-md border border-white/25 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_24px_rgba(8,145,178,0.28)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),0_14px_32px_rgba(14,165,233,0.32)] hover:-translate-y-0.5 active:translate-y-0 [transform:translateZ(0)]"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-cyan-200/90 bg-white/75 backdrop-blur-md hover:border-[#0891B2]/60 hover:bg-white/95 text-[#181226] hover:text-[#0891B2] font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_8px_20px_rgba(8,145,178,0.06)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_24px_rgba(8,145,178,0.12)] hover:-translate-y-0.5 active:translate-y-0 [transform:translateZ(0)]"
                    >
                      <span>Explore Our Services</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Editorial Metadata Strip with Soft Raised Badges */}
            <div className="pt-6 border-t border-cyan-200/80 flex flex-wrap items-center gap-y-2.5 gap-x-3 sm:gap-x-4 text-xs font-mono text-[#475569]">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/95 border border-cyan-200/80 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
                <span className="text-[#0891B2] font-semibold">&#8377;5 CR</span>
                <span className="text-[#475569]">COLLATERAL-FREE CAP</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/95 border border-cyan-200/80 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
                <span className="text-[#0891B2] font-semibold">85%</span>
                <span className="text-[#475569]">SOVEREIGN RISK BACKSTOP</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/95 border border-cyan-200/80 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
                <span className="text-[#0891B2] font-semibold">24+</span>
                <span className="text-[#475569]">REGULATORY SCHEMES</span>
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Cinematic Enterprise Architectural Visual
              ============================================================ */}
          <div className="lg:col-span-5 xl:col-span-6 relative pt-4 lg:pt-0">
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Architectural Crosshair Corner Accents */}
              <div className="absolute -top-2.5 -left-2.5 text-[#0891B2]/40 font-mono text-xs z-30 select-none hidden sm:block">+</div>
              <div className="absolute -bottom-2.5 -right-2.5 text-[#0891B2]/40 font-mono text-xs z-30 select-none hidden sm:block">+</div>

              {/* Main Architectural Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-cyan-200/90 bg-white shadow-[0_28px_70px_-24px_rgba(8,145,178,0.22),0_12px_28px_rgba(15,118,110,0.1)] ring-1 ring-white/80 group">
                <Image
                  src="/img/hero-enterprise.jpg"
                  alt="Agnivridhi Enterprise Infrastructure & Architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transform transition-transform duration-1000 group-hover:scale-[1.03]"
                />

                {/* Subtle Cinematic Vignette & Grain */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061212]/85 via-[#081c1f]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),transparent_28%),linear-gradient(180deg,rgba(8,145,178,0.06),rgba(8,145,178,0))] pointer-events-none" />
                <div className="absolute inset-0 bg-noise pointer-events-none" />

                {/* Top Pinned Editorial Labels */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-md border border-cyan-100/90 text-[10px] font-mono text-[#181226] uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
                    <span>AGNIVRIDHI / 01 &bull; {location.city}, NCR</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md border border-cyan-100/90 text-[#181226] text-[10px] font-mono shadow-xs">
                  <Building2 className="w-3.5 h-3.5 text-[#0891B2]" />
                  <span className="font-sans text-[11px] font-medium tracking-wide">
                    Industrial Scale &bull; Capital &bull; Engineering
                  </span>
                </div>

                {/* Bottom Right Sovereign Mandate Tag */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-md border border-cyan-100/90 text-[#0891B2] text-[10px] font-mono shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="font-semibold">SOVEREIGN MANDATE</span>
                </div>
              </div>

              {/* Floating Leadership Glass Tag with Soft Depth */}
              <div className="absolute -bottom-5 left-2 sm:-bottom-6 sm:-left-5 rounded-2xl bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 border border-cyan-200/90 shadow-[0_12px_36px_-8px_rgba(88,28,135,0.16),0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-3.5 z-30">
                <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-cyan-200/60 shrink-0 bg-cyan-100">
                  <Image
                    src="/img/rahul-kumar-singh.jpg"
                    alt={siteConfig.founder.name ?? "Managing Director"}
                    fill
                    sizes="44px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-0.5 min-w-0 pr-2">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif text-sm sm:text-base font-semibold text-[#181226] truncate">
                      {siteConfig.founder.name}
                    </h3>
                  </div>
                  <p className="text-[10px] text-[#0891B2] font-mono uppercase tracking-wider font-medium">
                    {siteConfig.founder.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
