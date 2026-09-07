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
      className="relative border-b border-purple-100 bg-[#FFFFFF] pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
    >
      {/* Editorial Luxury Ambient Gradient */}
      <div
        className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(124,58,237,0.08),rgba(8,9,9,0))] pointer-events-none"
        aria-hidden="true"
      />

      <Container width="wide" className="relative z-10">
        <FadeIn direction="up" distance={20} delay={0.05}>
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2">
              <Eyebrow accent>About Agnivridhi India</Eyebrow>
              <span className="text-xs font-mono text-[#64748B] hidden sm:inline" aria-hidden="true">
                &bull; Institutional Advisory Practice &bull; Noida HQ
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              id="about-hero-heading"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#0F0A1A] tracking-tight leading-[1.15]"
            >
              A Strategic Advisory Desk Built for Indian Enterprise Momentum.
            </h1>

            {/* Supporting Positioning Paragraphs */}
            <div className="space-y-4 max-w-3xl text-[#475569] font-sans">
              <p className="type-body-lg leading-relaxed">
                Headquartered in Noida, Uttar Pradesh, Agnivridhi India operates with a single guiding conviction: micro, small, and medium enterprises represent the real sovereign growth engine of India, yet routinely encounter friction when navigating institutional credit appraisal and statutory compliance.
              </p>
              <p className="type-body leading-relaxed text-[#64748B]">
                We eliminate that friction through audit-grade financial modeling, rigorous Detailed Project Report (DPR) formulations, and deep regulatory literacy across central credit guarantee schemes and quality standards.
              </p>
            </div>

            {/* Corporate Metadata Pill Strip */}
            <div className="pt-4 flex items-center gap-4 sm:gap-6 flex-wrap text-xs text-[#64748B] font-mono border-t border-purple-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#581C87] shrink-0" />
                <span className="text-[#475569]">
                  {siteConfig.company.location.city}, {siteConfig.company.location.state}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#581C87] shrink-0" />
                <span className="text-[#475569]">Pan-India MSME &amp; Industrial Scope</span>
              </div>

              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                <span className="text-[#475569]">4 Dedicated Advisory Desks</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
