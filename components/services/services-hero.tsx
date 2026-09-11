import * as React from "react";
import { Landmark, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";

export function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-title"
      className="relative border-b border-slate-800/80 bg-slate-950 text-white pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
    >
      {/* Subtle Editorial Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-blueprint-grid opacity-25 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_65%,transparent_100%)]" />
        <div className="absolute top-1/4 -right-28 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-5 -left-28 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="max-w-3xl space-y-6">
          <FadeIn direction="up" distance={14} delay={0.05}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>INSTITUTIONAL ADVISORY PRACTICES &bull; ALL VERTICALS</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" distance={16} delay={0.1}>
            <h1
              id="services-hero-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal text-white tracking-tight leading-[1.15]"
            >
              Four Strategic Desks.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 italic font-light">
                Engineered for Enterprise Momentum.
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" distance={16} delay={0.15}>
            <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
              We eliminate fragmented middleman agencies by organizing our multi-disciplinary
              expertise into four synchronized practices: sovereign debt structuring, statutory
              compliance, high-conversion digital platforms, and custom enterprise software.
            </p>
          </FadeIn>

          {/* Credibility metric pills */}
          <FadeIn direction="up" distance={16} delay={0.2}>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-sans">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-b from-teal-900/70 to-teal-950/90 border border-teal-500/30 text-teal-100 shadow-xs text-xs font-mono">
                <Landmark className="w-4 h-4 text-amber-400" />
                <span>Up to <strong className="text-amber-300 font-semibold">₹5 Cr</strong> CGTMSE Collateral-Free Cover</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-b from-teal-900/70 to-teal-950/90 border border-teal-500/30 text-teal-100 shadow-xs text-xs font-mono">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Statutory <strong className="text-amber-300 font-semibold">ISO &amp; Startup India</strong> Desks</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-b from-teal-900/70 to-teal-950/90 border border-teal-500/30 text-teal-100 shadow-xs text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Synchronized Execution Across <strong className="text-amber-300 font-semibold">28 States</strong></span>
              </span>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
