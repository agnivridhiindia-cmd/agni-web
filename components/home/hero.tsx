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
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const heroFadeInUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const headlineLineReveal: Variants = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1] as const,
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
      className={cn("relative overflow-hidden bg-[#FFFFFF] text-[#0F0A1A] border-b border-purple-100", isPinned ? "h-full w-full flex flex-col justify-center py-6 sm:py-8 lg:py-0" : "pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28")}
    >
      {/* Background Architectural Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Deep ambient brass glow - Top Right */}
        <div className="absolute -top-32 right-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_70%)] blur-3xl" />
        
        {/* Deep terracotta ambient glow - Bottom Left */}
        <div className="absolute top-1/2 left-[-12%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.05)_0%,transparent_70%)] blur-3xl" />

        {/* Architectural Grid Texture */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
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
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-xs font-mono tracking-widest text-[#581C87]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#581C87]" />
                  <span>AGNIVRIDHI &bull; ADVISORY / INDIA</span>
                </div>

                {/* Massive Headline */}
                <h1
                  id="hero-heading"
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[5.8rem] font-normal tracking-tight text-[#0F0A1A] !leading-[0.96] uppercase"
                >
                  Capital.
                  <br />
                  <span className="text-[#581C87] italic font-light">Compliance.</span>
                  <br />
                  Growth.
                </h1>

                {/* Supporting Copy */}
                <p className="font-sans text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed font-normal">
                  Strategic advisory for ambitious Indian enterprises navigating capital,
                  compliance and technological transformation.
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/services"
                    className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#581C87] hover:bg-[#4C1D95] text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(88,28,135,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Explore Advisory</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg border border-purple-200/90 hover:border-[#581C87] text-[#0F0A1A] hover:text-[#581C87] hover:bg-purple-50/70 font-sans font-semibold text-xs tracking-wider uppercase transition-all"
                  >
                    <span>Speak with an Advisor</span>
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
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-xs font-mono tracking-widest text-[#581C87]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#581C87] animate-pulse" />
                    <span>AGNIVRIDHI &bull; ADVISORY / INDIA</span>
                  </div>
                </motion.div>

                {/* Massive Headline with Line-by-Line Masked Reveals */}
                <h1
                  id="hero-heading"
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[5.8rem] font-normal tracking-tight text-[#0F0A1A] !leading-[0.96] uppercase"
                >
                  <span className="block overflow-hidden py-1">
                    <motion.span variants={headlineLineReveal} className="block">
                      Capital.
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden py-1">
                    <motion.span
                      variants={headlineLineReveal}
                      className="block text-[#581C87] italic font-light"
                    >
                      Compliance.
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden py-1">
                    <motion.span variants={headlineLineReveal} className="block">
                      Growth.
                    </motion.span>
                  </span>
                </h1>

                {/* Supporting Copy */}
                <motion.div variants={heroFadeInUpItem}>
                  <p className="font-sans text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed font-normal">
                    Strategic advisory for ambitious Indian enterprises navigating capital,
                    compliance and technological transformation.
                  </p>
                </motion.div>

                {/* Dual CTAs */}
                <motion.div variants={heroFadeInUpItem}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <Link
                      href="/services"
                      className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#581C87] hover:bg-[#4C1D95] text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(88,28,135,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Explore Advisory</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg border border-purple-200/90 hover:border-[#581C87] text-[#0F0A1A] hover:text-[#581C87] hover:bg-purple-50/70 font-sans font-semibold text-xs tracking-wider uppercase transition-all"
                    >
                      <span>Speak with an Advisor</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Editorial Metadata Strip */}
            <div className="pt-6 border-t border-purple-100 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-[11px] font-mono text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#581C87]" />
                <span className="text-[#581C87] font-semibold">₹5 CR</span>
                <span>COLLATERAL-FREE CAP</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-purple-200 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#581C87]" />
                <span className="text-[#581C87] font-semibold">85%</span>
                <span>SOVEREIGN RISK BACKSTOP</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-purple-200 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#581C87]" />
                <span className="text-[#581C87] font-semibold">24+</span>
                <span>REGULATORY SCHEMES</span>
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
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Architectural Crosshair Corner Accents */}
              <div className="absolute -top-2.5 -left-2.5 text-[#581C87]/40 font-mono text-xs z-30 select-none hidden sm:block">+</div>
              <div className="absolute -bottom-2.5 -right-2.5 text-[#581C87]/40 font-mono text-xs z-30 select-none hidden sm:block">+</div>

              {/* Main Architectural Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-purple-100 shadow-[0_20px_60px_-15px_rgba(88,28,135,0.12)] bg-white group">
                <Image
                  src="/img/hero-enterprise.jpg"
                  alt="Agnivridhi Enterprise Infrastructure & Architecture"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transform transition-transform duration-1000 group-hover:scale-[1.03]"
                />

                {/* Subtle Cinematic Vignette & Grain */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/80 via-transparent to-[#080909]/20 pointer-events-none" />
                <div className="absolute inset-0 bg-noise pointer-events-none" />

                {/* Top Pinned Editorial Labels */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md border border-purple-100 text-[10px] font-mono text-[#0F0A1A] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#581C87]" />
                    <span>AGNIVRIDHI / 01 &bull; {location.city}, NCR</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md border border-purple-100 text-[#0F0A1A] text-[10px] font-mono">
                  <Building2 className="w-3.5 h-3.5 text-[#581C87]" />
                  <span className="font-sans text-[11px] font-medium tracking-wide">
                    Industrial Scale &bull; Capital &bull; Engineering
                  </span>
                </div>

                {/* Bottom Right Sovereign Mandate Tag */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-purple-100 text-[#581C87] text-[10px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SOVEREIGN MANDATE</span>
                </div>
              </div>

              {/* Floating Leadership Glass Tag */}
              <div className="absolute -bottom-5 left-2 sm:-bottom-6 sm:-left-5 rounded-xl bg-white/95 backdrop-blur-xl p-3 sm:p-3.5 border border-purple-100 shadow-xl flex items-center gap-3 z-30">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/15 shrink-0 bg-black">
                  <Image
                    src="/img/rahul-kumar-singh.jpg"
                    alt={siteConfig.founder.name ?? "Managing Director"}
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-0.5 min-w-0 pr-2">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif text-xs sm:text-sm font-semibold text-[#0F0A1A] truncate">
                      {siteConfig.founder.name}
                    </h3>
                  </div>
                  <p className="text-[10px] text-[#581C87] font-mono uppercase tracking-wider">
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
