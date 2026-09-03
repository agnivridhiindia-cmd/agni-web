"use client";

import * as React from "react";
import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { CtaArrow } from "@/components/ui/cta-arrow";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FadeIn, StaggerContainer, StaggerItem, useReducedMotionPreference } from "@/components/shared/motion";
import { motion } from "framer-motion";
import { motionDuration, motionEase } from "@/lib/tokens/motion";

const headlineWords = [
  { text: "Catalyzing" },
  { text: "Enterprise" },
  { text: "Scale" },
  { text: "Through" },
  { text: "Sovereign Capital", className: "text-teal-700 italic font-serif relative" },
  { text: "&" },
  { text: "Compliance.", className: "text-gold-600 font-serif" },
];

function HeroHeadline() {
  const prefersReduced = useReducedMotionPreference();

  return (
    <StaggerContainer
      inView={false}
      delayChildren={0.12}
      staggerDelay={0.07}
      className=""
    >
      <h1
        id="hero-heading"
        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-slate-950 leading-[1.14]"
      >
        {headlineWords.map((word, index) => (
          <React.Fragment key={word.text}>
          <span className="inline-block overflow-hidden align-bottom">
            {prefersReduced ? (
              <span key="static" className={`hero-headline-word ${word.className ?? ""}`}>
                {word.text}
                {word.text === "Sovereign Capital" && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-teal-600/80 to-teal-400/20 rounded-full"
                  />
                )}
              </span>
            ) : (
              <motion.span
                key="animated"
                initial="hidden"
                variants={{
                  hidden: { clipPath: "inset(0 100% 0 0)" },
                  visible: {
                    clipPath: "inset(0 0% 0 0)",
                    transition: {
                      duration: motionDuration.slow,
                      ease: motionEase.entrance,
                    },
                  },
                }}
                className={`hero-headline-word ${word.className ?? ""}`}
              >
                {word.text}
                {word.text === "Sovereign Capital" && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-teal-600/80 to-teal-400/20 rounded-full"
                  />
                )}
              </motion.span>
            )}
          </span>
          {index < headlineWords.length - 1 && " "}
          </React.Fragment>
        ))}
      </h1>
    </StaggerContainer>
  );
}

export function Hero() {
  const { location, name } = siteConfig.company;
  const prefersReduced = useReducedMotionPreference();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    if (prefersReduced) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay policy fallback
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [prefersReduced]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24 lg:pt-36 lg:pb-32 border-b border-slate-200/80"
    >
      {/* 1. Hero Background Video with Sophisticated Atmospheric Overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Background Video with Poster Fallback */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/img/hero-bg.jpg"
          className="absolute inset-0 h-full w-full object-cover object-center transform-gpu will-change-transform"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"
            type="video/mp4"
          />
          {/* Fallback Static Image */}
          <Image
            src="/img/hero-bg.jpg"
            alt="Agnivridhi Strategic Advisory Office"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transform-gpu will-change-transform"
          />
        </video>

        <div aria-hidden="true" className="hero-ambient-drift" />

        {/* Directional Optical Veil: Soft localized wash over left text column, clear view for right image area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/15 sm:from-white/88 sm:via-white/50 sm:to-transparent" />

        {/* Vertical Transition: Subtle fade at top and bottom to seamlessly merge with navbar and lower section */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/70" />

        {/* Soft Teal Radial Aura - Top Right */}
        <div className="absolute -top-32 right-[-10%] h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px] will-change-transform" />

        {/* Soft Burnished Gold Ambient Whisper - Bottom Left */}
        <div className="absolute -bottom-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[100px] will-change-transform" />

        {/* Fine Architectural Grid Pattern with Radial Gradient Fade */}
        <div
          className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
        />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Category Eyebrow */}
          <FadeIn direction="none" delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-subtle max-w-full">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse shrink-0" />
              <Eyebrow accent className="text-[10px] sm:text-[11px] tracking-wider sm:tracking-widest text-slate-700 truncate">
                GOVERNMENT SCHEMES • CGTMSE FUNDING • COMPLIANCE • GROWTH
              </Eyebrow>
            </div>
          </FadeIn>

          {/* Primary Headline (Single <h1>) */}
          <FadeIn direction="up" distance={16} delay={0.12}>
            <h1
              id="hero-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-slate-950 leading-[1.14]"
            >
              Catalyzing Enterprise Scale Through{" "}
              <span className="text-teal-700 italic font-serif relative inline-block">
                Sovereign Capital
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-teal-600/80 to-teal-400/20 rounded-full"
                />
              </span>{" "}
              &amp;{" "}
              <span className="text-gold-600 font-serif">Compliance</span>.
            </h1>
          </FadeIn>

          {/* Supporting Value Proposition */}
          <FadeIn direction="up" distance={16} delay={0.22}>
            <p className="type-body-lg text-slate-600 max-w-2xl leading-relaxed">
              {name} empowers micro, small, and mid-market enterprises across India with collateral-free debt structuring under central guarantee schemes, statutory certifications, and modern digital governance—delivered with institutional rigor from {location.city}, {location.country}.
            </p>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn direction="up" distance={16} delay={0.32}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              {/* Primary Conversion CTA with opt-in magnetic pull */}
              <MagneticButton strength={0.18} maxOffset={6}>
                <LinkButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="shadow-card hover:shadow-glow-teal font-medium group text-base px-7 h-12"
                >
                  <span>Schedule Scheme Appraisal</span>
                  <Sparkles className="w-4 h-4 ml-2 text-teal-200 group-hover:rotate-12 transition-transform duration-200" />
                </LinkButton>
              </MagneticButton>

              {/* Secondary Exploration Link with micro-arrow */}
              <LinkButton
                href="/services"
                variant="glass"
                size="lg"
                className="font-medium text-base px-6 h-12 border-slate-200/90 text-slate-800 hover:text-teal-800 hover:border-teal-400/50 group"
              >
                <span>Explore Advisory Catalog</span>
                <CtaArrow className="w-4 h-4 ml-2 text-slate-500 group-hover:text-teal-600" />
              </LinkButton>
            </div>
          </FadeIn>

          {/* Verified Trust Micro-Signals */}
          <StaggerContainer
            inView={false}
            delayChildren={1.12}
            staggerDelay={0.08}
            className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-sans"
          >
            <StaggerItem direction="left" distance={16}>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Liaison with Public &amp; Private Scheduled Banks</span>
              </div>
            </StaggerItem>
            <StaggerItem direction="left" distance={16}>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Upfront Real Estate Collateral Mandates</span>
              </div>
            </StaggerItem>
            <StaggerItem direction="left" distance={16}>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Headquartered in {location.city}, {location.state}</span>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
