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
      className="relative border-b border-slate-800/80 bg-slate-950 text-slate-100 pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
    >
      {/* Ambient Blueprint Grid & Radiant Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-25 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
        <div className="absolute top-1/4 -right-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 -left-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.10)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow & Credibility Badge */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
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
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15]"
          >
            Progress looks different for{" "}
            <span className="italic bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              every enterprise
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
            Real-world engagement summaries demonstrating how structured financial engineering,
            sovereign credit guarantee schemes, and statutory compliance unlock scalable
            enterprise momentum across Indian industry.
          </p>
        </div>
      </Container>
    </section>
  );
}
