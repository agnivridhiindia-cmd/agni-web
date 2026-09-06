import * as React from "react";
import { Landmark, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/motion";

export function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-title"
      className="relative border-b border-slate-200/80 bg-slate-50/70 pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
    >
      <Container width="wide">
        <div className="max-w-3xl space-y-6">
          <FadeIn direction="up" distance={14} delay={0.05}>
            <Eyebrow accent>INSTITUTIONAL ADVISORY PRACTICES</Eyebrow>
          </FadeIn>

          <FadeIn direction="up" distance={16} delay={0.1}>
            <h1
              id="services-hero-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-slate-900 tracking-tight leading-[1.15]"
            >
              Four Strategic Desks. Engineered for Enterprise Momentum.
            </h1>
          </FadeIn>

          <FadeIn direction="up" distance={16} delay={0.15}>
            <p className="type-body-lg text-slate-600 font-sans leading-relaxed">
              We eliminate fragmented middleman agencies by organizing our multi-disciplinary
              expertise into four synchronized practices: sovereign debt structuring, statutory
              compliance, high-conversion digital platforms, and custom enterprise software.
            </p>
          </FadeIn>

          {/* Credibility metric pills */}
          <FadeIn direction="up" distance={16} delay={0.2}>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-700 font-medium font-sans">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-xs">
                <Landmark className="w-4 h-4 text-teal-700" />
                <span>Up to ₹5 Cr CGTMSE Collateral-Free Cover</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-gold-700" />
                <span>Statutory ISO &amp; Startup India Desks</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Synchronized Execution Across 28 States</span>
              </span>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
