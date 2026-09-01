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
      className="relative border-b border-slate-200/80 bg-slate-50/70 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
    >
      <Container width="wide">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow & Credibility Badge */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border bg-teal-50 border-teal-200/90 text-teal-900">
              PROVEN OUTCOMES &bull; CASE STUDIES
            </span>

            {totalStories > 0 && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-sans text-slate-700 bg-white border border-slate-200 shadow-xs">
                <Award className="w-3.5 h-3.5 text-gold-600 shrink-0" aria-hidden="true" />
                <span>{totalStories} Verified Advisory Engagements</span>
              </span>
            )}
          </div>

          {/* Headline */}
          <h1
            id="stories-hero-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.15]"
          >
            Progress looks different for every business.
          </h1>

          {/* Subtitle */}
          <p className="type-body-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
            Real-world engagement summaries demonstrating how structured financial engineering,
            sovereign credit guarantee schemes, and statutory compliance unlock scalable
            enterprise momentum across Indian industry.
          </p>
        </div>
      </Container>
    </section>
  );
}
