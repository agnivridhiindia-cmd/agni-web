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
      className="relative py-20 sm:py-24 lg:py-32 bg-midnight-slate text-white border-b border-slate-800/80 overflow-hidden"
    >
      {/* Ambient Technical Blueprint Grid & Radiant Orbs */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_85%_70%_at_50%_50%,#000_65%,transparent_100%)]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10 space-y-12 sm:space-y-16">
        {/* Top: Section Eyebrow & Statement */}
        <FadeIn direction="up" distance={20} delay={0.05}>
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>OUR CENTRAL MISSION &bull; STRATEGIC PURPOSE</span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.25] text-white tracking-tight">
              &ldquo;To transform ambitious Indian enterprises into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 italic font-normal font-editorial">
                bankable, accredited, and technologically resilient
              </span>{" "}
              market leaders by systematically eliminating the barriers between ambition and institutional execution.&rdquo;
            </blockquote>

            <p className="type-body text-slate-300 max-w-2xl font-sans leading-relaxed">
              We reject the fragmented model of dealing with disconnected loan brokers, compliance agents, and web developers. We unify these four disciplines under one disciplined institutional roof.
            </p>
          </div>
        </FadeIn>

        {/* Middle: Tripartite Progression Grid in Jewel-Teal Cards */}
        <FadeIn direction="up" distance={20} delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
            {missionPillars.map((pillar) => (
              <div
                key={pillar.step}
                className="space-y-3 p-6 rounded-2xl bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 border border-teal-500/30 shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:border-teal-400/80 transition-all"
              >
                <span className="text-xs font-mono font-bold text-amber-400 block tracking-widest">
                  PHASE {pillar.step}
                </span>
                <h3 className="font-serif text-xl font-medium text-amber-300 tracking-tight">
                  {pillar.label}
                </h3>
                <p className="text-xs sm:text-sm text-teal-100/85 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom: Contextual Services Transition */}
        <FadeIn direction="up" distance={16} delay={0.2}>
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold block">
                Integrated Advisory Model
              </span>
              <p className="text-sm text-slate-300 font-sans">
                Explore how our four specialized desks coordinate across your enterprise lifecycle.
              </p>
            </div>

            <div className="shrink-0">
              <LinkButton
                href="/services"
                variant="primary"
                className="rounded-full px-7 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold border border-amber-300/40 shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] text-xs font-mono uppercase tracking-wider"
              >
                <span>Explore Advisory Practices</span>
                <CtaArrow className="w-4 h-4 ml-1 text-slate-950" />
              </LinkButton>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
