import * as React from "react";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";
import { CtaArrow } from "@/components/ui/cta-arrow";
import { FadeIn } from "@/components/shared/motion";

const missionPillars = [
  {
    step: "01",
    label: "Capital Architecture",
    description: "Structuring collateral-free debt facilities and government margin subsidies up to 35% without equity dilution.",
  },
  {
    step: "02",
    label: "Statutory Standing",
    description: "Securing ISO 9001/14001, ZED accreditations, and Udyam compliance that qualify units for national procurement tenders.",
  },
  {
    step: "03",
    label: "Digital Capability",
    description: "Engineering tailored enterprise ERP workflows and high-converting web portals built for operational scale.",
  },
];

export function MissionSection() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="relative py-20 sm:py-24 lg:py-28 bg-white text-[#0F0A1A] border-b border-purple-100 overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container width="wide" className="relative z-10 space-y-12 sm:space-y-16">
        {/* Top: Section Eyebrow & Statement */}
        <FadeIn direction="up" distance={20} delay={0.05}>
          <div className="max-w-4xl space-y-6">
            <span
              id="mission-heading"
              className="type-eyebrow text-[#581C87] font-mono tracking-widest block uppercase"
            >
              Our Central Mission
            </span>

            <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.25] text-[#0F0A1A] tracking-tight">
              &ldquo;To transform ambitious Indian enterprises into bankable, accredited, and technologically resilient market leaders by systematically eliminating the barriers between ambition and institutional execution.&rdquo;
            </blockquote>

            <p className="type-body text-[#64748B] max-w-2xl font-sans leading-relaxed">
              We reject the fragmented model of dealing with disconnected loan brokers, compliance agents, and web developers. We unify these four disciplines under one disciplined institutional roof.
            </p>
          </div>
        </FadeIn>

        {/* Middle: Tripartite Progression Grid */}
        <FadeIn direction="up" distance={20} delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-purple-100">
            {missionPillars.map((pillar) => (
              <div key={pillar.step} className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#581C87] block tracking-wider">
                  PHASE {pillar.step}
                </span>
                <h3 className="font-serif text-xl font-semibold text-white tracking-tight">
                  {pillar.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom: Contextual Services Transition */}
        <FadeIn direction="up" distance={16} delay={0.2}>
          <div className="pt-8 border-t border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block">
                Integrated Advisory Model
              </span>
              <p className="text-sm text-[#475569] font-sans">
                Explore how our four specialized desks coordinate across your enterprise lifecycle.
              </p>
            </div>

            <div className="shrink-0">
              <LinkButton
                href="/services"
                variant="outline"
                className="text-[#0F0A1A] border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:border-slate-600 hover:text-white"
                aria-label="Explore all four advisory desks and services"
              >
                <span>Explore 4 Advisory Desks</span>
                <CtaArrow className="w-4 h-4 ml-2 text-[#581C87]" />
              </LinkButton>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
