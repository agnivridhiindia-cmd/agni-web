import * as React from "react";
import { MapPin, Building2, Layers } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/motion";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative border-b border-slate-200/80 bg-slate-50/70 bg-noise pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
    >
      <Container width="wide">
        <FadeIn direction="up" distance={20} delay={0.05}>
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2">
              <Eyebrow>About Agnivridhi India</Eyebrow>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline" aria-hidden="true">
                &bull; Institutional Advisory Practice
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              id="about-hero-heading"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-950 tracking-tight leading-[1.15]"
            >
              A Strategic Advisory Desk Built for Indian Enterprise Momentum.
            </h1>

            {/* Supporting Positioning Paragraphs */}
            <div className="space-y-4 max-w-3xl text-slate-600 font-sans">
              <p className="type-body-lg leading-relaxed">
                Headquartered in Noida, Uttar Pradesh, Agnivridhi India operates with a single guiding conviction: micro, small, and medium enterprises represent the real sovereign growth engine of India, yet routinely encounter friction when navigating institutional credit appraisal and statutory compliance.
              </p>
              <p className="type-body leading-relaxed text-slate-600">
                We eliminate that friction through audit-grade financial modeling, rigorous Detailed Project Report (DPR) formulations, and deep regulatory literacy across central credit guarantee schemes and quality standards.
              </p>
            </div>

            {/* Corporate Metadata Pill Strip */}
            <div className="pt-4 flex items-center gap-4 sm:gap-6 flex-wrap text-xs text-slate-600 font-mono border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>
                  {siteConfig.company.location.city}, {siteConfig.company.location.state}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>Pan-India MSME &amp; Industrial Scope</span>
              </div>

              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>4 Dedicated Advisory Desks</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
