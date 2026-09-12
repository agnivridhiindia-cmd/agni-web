import * as React from "react";
import { Award } from "lucide-react";
import { Container } from "@/components/shared/container";

interface SuccessStoriesHeroProps {
  totalStories: number;
}

export function SuccessStoriesHero({ totalStories }: SuccessStoriesHeroProps) {
  return (
    <section
      aria-labelledby="stories-hero-heading"
      className="relative border-b border-slate-700/60 text-slate-100 pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-[radial-gradient(circle_at_15%_25%,_rgba(245,158,11,0.12),transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_50%_90%,_rgba(14,116,144,0.12),transparent_42%),linear-gradient(180deg,#0B1329_0%,#0F1A34_45%,#0B1329_100%)]"
    >
      {/* Ambient Blueprint Grid & Radiant Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#06B6D4_1px,transparent_1px),linear-gradient(to_bottom,#06B6D4_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
        <div className="absolute -top-20 right-[-5%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18)_0%,rgba(14,116,144,0.08)_45%,transparent_70%)] blur-2xl" />
        <div className="absolute top-[38%] left-[-12%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.15)_0%,rgba(217,119,6,0.06)_45%,transparent_72%)] blur-2xl" />
        <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow & Credibility Badge */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/90 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>PROVEN OUTCOMES &bull; EDITORIAL CASE ARCHIVE</span>
            </div>

            {totalStories > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-amber-300 bg-amber-950/60 border border-amber-500/40 shadow-xs">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                <span>{totalStories} Verified Advisory Engagements</span>
              </span>
            )}
          </div>

          {/* Headline */}
          <h1
            id="stories-hero-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]"
          >
            Progress looks different for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold">
              every enterprise
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
            Real businesses. Real results. Real growth. Discover how we have helped entrepreneurs
            secure collateral-free funding, government subsidies, statutory certifications,
            and sustainable business success across India.
          </p>
        </div>
      </Container>
    </section>
  );
}
