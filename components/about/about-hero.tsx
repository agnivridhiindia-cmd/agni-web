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
      className="relative border-b border-slate-800/80 bg-slate-950 text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      {/* Editorial Luxury Ambient Gradient & Blueprint Vector Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_85%_70%_at_50%_50%,#000_65%,transparent_100%)]" />
        <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(245,158,11,0.12),transparent)]" />
        <div className="absolute top-1/3 -right-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 -left-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10">
        <FadeIn direction="up" distance={20} delay={0.05}>
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>ABOUT AGNIVRIDHI INDIA &bull; INSTITUTIONAL ADVISORY</span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              id="about-hero-heading"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.15]"
            >
              A Strategic Advisory Desk Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 italic font-normal font-editorial">
                Indian Enterprise Momentum.
              </span>
            </h1>

            {/* Supporting Positioning Paragraphs */}
            <div className="space-y-4 max-w-3xl text-slate-300 font-sans">
              <p className="type-body-lg leading-relaxed text-slate-200">
                Headquartered in Noida, Uttar Pradesh, Agnivridhi India operates with a single guiding conviction: micro, small, and medium enterprises represent the real sovereign growth engine of India, yet routinely encounter friction when navigating institutional credit appraisal and statutory compliance.
              </p>
              <p className="type-body leading-relaxed text-slate-400">
                We eliminate that friction through audit-grade financial modeling, rigorous Detailed Project Report (DPR) formulations, and deep regulatory literacy across central credit guarantee schemes and quality standards.
              </p>
            </div>

            {/* Corporate Metadata Pill Strip */}
            <div className="pt-6 flex items-center gap-4 sm:gap-6 flex-wrap text-xs text-slate-400 font-mono border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-300">
                  {siteConfig.company.location.city}, {siteConfig.company.location.state}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-300">Pan-India MSME &amp; Industrial Scope</span>
              </div>

              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-300">4 Dedicated Advisory Desks</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
