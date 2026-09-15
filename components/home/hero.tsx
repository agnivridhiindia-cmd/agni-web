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
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Bulletproof autoplay and off-screen pause
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly enforce muted on DOM element to pass browser autoplay policies
    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});

    if (prefersReduced) {
      video.pause();
      return;
    }

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else if (window.scrollY < 1200) {
        video.play().catch(() => {});
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 1200) {
        if (!video.paused) video.pause();
      } else {
        if (video.paused) video.play().catch(() => {});
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [prefersReduced]);

  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(
        "relative overflow-hidden border-b border-slate-700/60 text-white",
        "bg-[radial-gradient(circle_at_15%_25%,_rgba(245,158,11,0.12),transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_50%_90%,_rgba(14,116,144,0.12),transparent_42%),linear-gradient(180deg,#0B1329_0%,#0F1A34_45%,#0B1329_100%)]",
        isPinned
          ? "h-full w-full flex flex-col justify-center pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-16 lg:pb-0"
          : "pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
      )}
    >
      {/* Background Video & Architectural Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Full Hero Ambient Video Background - Tinted to Midnight Navy */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 transition-opacity duration-700"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Midnight navy glass gradient ensuring razor-sharp contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1329]/95 via-[#0B1329]/80 to-[#0B1329]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1329]/50 to-[#0B1329]" />

        {/* Primary cyan/teal atmospheric glow */}
        <div className="absolute -top-20 right-[-5%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18)_0%,rgba(14,116,144,0.08)_35%,rgba(14,116,144,0.02)_55%,transparent_70%)]" />

        {/* Secondary burnished gold glow */}
        <div className="absolute top-[38%] left-[-12%] h-[580px] w-[580px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.15)_0%,rgba(217,119,6,0.06)_38%,rgba(217,119,6,0.02)_58%,transparent_72%)]" />

        {/* Center luminous highlight */}
        <div className="absolute top-[18%] left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(14,116,144,0.12)_0%,rgba(14,116,144,0.02)_50%,transparent_70%)]" />

        {/* Architectural Grid Texture with soft radial mask */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#06B6D4_1px,transparent_1px),linear-gradient(to_bottom,#06B6D4_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_82%_70%_at_50%_42%,#000_70%,transparent_100%)]" />
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
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/90 border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>AGNIVRIDHI &bull; ADVISORY / INDIA</span>
                </div>

                {/* Refined Authoritative Headline */}
                <h1
                  id="hero-heading"
                  className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.2rem] font-bold tracking-[-0.035em] text-white !leading-[1.02]"
                >
                  Aapke Business Ki
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold">
                    Udaan,
                  </span>
                  <br />
                  Humare Saath
                </h1>

                {/* Supporting Copy */}
                <p className="font-sans text-base sm:text-lg text-slate-300 max-w-xl leading-[1.7] font-normal">
                  One stop solution for MSMEs and Startups - funding, compliance, and IT
                  solutions.
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/services"
                    className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 border border-amber-300/50 text-slate-950 font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_24px_rgba(245,158,11,0.4)] hover:shadow-[0_0_32px_rgba(245,158,11,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer [transform:translateZ(0)]"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-slate-700/80 bg-slate-900/90 hover:border-amber-400/60 hover:bg-slate-900 hover:text-amber-300 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer [transform:translateZ(0)]"
                  >
                    <span>Explore Our Services</span>
                  </Link>
                </div>
              </div>
            ) : (
              <motion.div
                initial={false}
                animate="visible"
                variants={heroStaggerContainer}
                className="space-y-6"
              >
                {/* Eyebrow */}
                <motion.div variants={heroFadeInUpItem}>
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/90 border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>AGNIVRIDHI &bull; ADVISORY / INDIA</span>
                  </div>
                </motion.div>

                {/* Refined Headline with Line-by-Line Masked Reveals */}
                <h1
                  id="hero-heading"
                  className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.2rem] font-bold tracking-[-0.035em] text-white !leading-[1.02]"
                >
                  <span className="block overflow-hidden py-1">
                    <motion.span variants={headlineLineReveal} className="block">
                      Aapke Business Ki
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden py-1">
                    <motion.span
                      variants={headlineLineReveal}
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold"
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
                  <p className="font-sans text-base sm:text-lg text-slate-300 max-w-xl leading-[1.7] font-normal">
                    One stop solution for MSMEs and Startups - funding, compliance, and IT
                    solutions.
                  </p>
                </motion.div>

                {/* Dual CTAs */}
                <motion.div variants={heroFadeInUpItem}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <Link
                      href="/services"
                      className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-b from-amber-400/95 via-amber-500/95 to-amber-600/95 text-slate-950 font-sans font-bold text-xs tracking-wider uppercase transition-all border border-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_12px_28px_-4px_rgba(245,158,11,0.45)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_16px_36px_-4px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] [transform:translateZ(0)]"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/15 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_24px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] [transform:translateZ(0)]"
                    >
                      <span>Explore Our Services</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Editorial Metadata Strip with Apple Frosted Glass Capsules */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2.5 gap-x-3 sm:gap-x-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 font-semibold">&#8377;5 CR</span>
                <span className="text-slate-300">COLLATERAL-FREE CAP</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 font-semibold">85%</span>
                <span className="text-slate-300">SOVEREIGN RISK BACKSTOP</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 font-semibold">24+</span>
                <span className="text-slate-300">REGULATORY SCHEMES</span>
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Cinematic Enterprise Architectural Visual
              ============================================================ */}
          <div className="lg:col-span-5 xl:col-span-6 relative pt-4 lg:pt-0">
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Architectural Crosshair Corner Accents */}
              <div className="absolute -top-2.5 -left-2.5 text-amber-400/50 font-mono text-xs z-30 select-none hidden sm:block">+</div>
              <div className="absolute -bottom-2.5 -right-2.5 text-cyan-400/50 font-mono text-xs z-30 select-none hidden sm:block">+</div>

              {/* Main Architectural Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-slate-800/90 bg-slate-950 shadow-[0_28px_70px_-24px_rgba(0,0,0,0.8),0_12px_28px_rgba(0,0,0,0.5)] ring-1 ring-white/10 group">
                <Image
                  src="/img/hero-enterprise.jpg"
                  alt="Agnivridhi Enterprise Infrastructure & Architecture"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transform transition-transform duration-1000 group-hover:scale-[1.03]"
                />

                {/* Subtle Cinematic Vignette & Grain */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A18]/90 via-[#050A18]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-noise pointer-events-none opacity-20" />

                {/* Top Pinned Editorial Labels */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-white uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>AGNIVRIDHI / 01 &bull; {location.city}, NCR</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-slate-950 px-3 py-1 rounded-md border border-slate-800 text-slate-300 text-[10px] font-mono shadow-xs">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-sans text-[11px] font-medium tracking-wide">
                    Industrial Scale &bull; Capital &bull; Engineering
                  </span>
                </div>

                {/* Bottom Right Sovereign Mandate Tag */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-md border border-amber-500/30 text-amber-300 text-[10px] font-mono shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold">SOVEREIGN MANDATE</span>
                </div>
              </div>

              {/* Floating Leadership Glass Tag with Soft Depth */}
              <div className="absolute -bottom-5 left-2 sm:-bottom-6 sm:-left-5 rounded-2xl bg-gradient-to-b from-[#131D38]/95 via-[#0E162B]/98 to-[#0A1020]/98 p-3.5 sm:p-4 border border-slate-700/60 shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(245,158,11,0.15)] flex items-center gap-3.5 z-30 backdrop-blur-xl">
                <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-amber-500/40 shrink-0 bg-slate-900">
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
                    <h3 className="font-heading text-sm sm:text-base font-semibold text-amber-300 truncate">
                      {siteConfig.founder.name}
                    </h3>
                  </div>
                  <p className="text-[10px] text-amber-400 font-mono uppercase tracking-wider font-medium">
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
