"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Building2, 
  Landmark, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Users2,
  Sparkles
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const corePillars = [
  {
    number: "01",
    title: "Sovereign Debt & Capital Syndication",
    subtitle: "CGTMSE, MUDRA, PMEGP & Private Consortiums",
    description:
      "Structuring bank-grade DPRs, CMA data, and DSCR models to unlock up to   -  5 Cr collateral-free credit and   -  50 Cr+ structured credit facilities.",
    icon: Landmark,
    accent: "#0891B2",
  },
  {
    number: "02",
    title: "Statutory Compliance & Governance",
    subtitle: "ISO Certifications, ZED Ratings & Subsidies",
    description:
      "Guiding enterprises through zero-defect regulatory frameworks, ISO 9001/14001/45001 accreditations, and central/state subsidy recovery.",
    icon: ShieldCheck,
    accent: "#06B6D4",
  },
  {
    number: "03",
    title: "Digital Systems & Automation",
    subtitle: "Enterprise Software, Web & ERP Architecture",
    description:
      "Modernizing legacy operations with bespoke enterprise platforms, digital workflow automation, and institutional web presence.",
    icon: Cpu,
    accent: "#8C3B24",
  },
];

export interface AboutBriefProps {
  isPinned?: boolean;
}

export function AboutBrief({ isPinned = false }: AboutBriefProps) {
  const { company, founder } = siteConfig;

  return (
    <section
      id="about-brief"
      aria-labelledby="about-brief-heading"
      className={cn(
        "relative bg-gradient-to-b from-[#FAF8FE] via-[#F5F1FB] to-[#FAF8FE] text-[#181226] border-b border-cyan-100/80 overflow-hidden",
        isPinned ? "h-full w-full flex flex-col justify-center py-6 sm:py-8 lg:py-0" : "py-20 sm:py-24 lg:py-28"
      )}
    >
      {/* Ambient background architectural lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-1/3 -left-32 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.07)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.04)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#0891B2_1px,transparent_1px),linear-gradient(to_bottom,#0891B2_1px,transparent_1px)] [background-size:6rem_6rem] opacity-[0.02]" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Who We Are Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Editorial Category Eyebrow */}
            <FadeIn direction="up" distance={14}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-200/90 text-[#0891B2] text-xs font-mono tracking-widest uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2] animate-pulse" />
                <span>ABOUT AGNIVRIDHI INDIA &bull; AT A GLANCE</span>
              </div>
            </FadeIn>

            {/* Dominant Headline */}
            <FadeIn direction="up" distance={16} delay={0.05}>
              <h2
                id="about-brief-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.015em] text-[#181226] leading-[1.2]"
              >
                Empowering MSMEs and Startups with{" "}
                <span className="text-[#0891B2] italic font-normal font-editorial">
                  Expert Funding, Certifications, and Growth Solutions.
                </span>
              </h2>
            </FadeIn>

            {/* Narrative Prose */}
            <FadeIn direction="up" distance={16} delay={0.1}>
              <div className="space-y-4 text-base sm:text-lg text-[#475569] font-sans font-normal leading-[1.75]">
                <p>
                  At <span className="text-[#181226] font-semibold">{company.name}</span>, we believe every business deserves the opportunity to grow
                  and thrive. Our mission is to bridge the gap between ambitious MSMEs, startups, and the
                  resources they need to succeed.
                </p>
                <p className="text-sm sm:text-base text-[#475569] leading-[1.75]">
                  We provide comprehensive support in funding, compliance, certifications, and digital growth -
                  ensuring your business has everything it needs to scale with confidence. With deep expertise
                  in CGTMSE, PMEGP, MUDRA, and certification processes, we simplify complex procedures and
                  help you access the capital and credentials your business deserves.
                </p>
              </div>
            </FadeIn>

            {/* Operational Anchor Badges */}
            <FadeIn direction="up" distance={14} delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/95 border border-cyan-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#0891B2]" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-[#556070] uppercase tracking-wider">
                      Headquarters
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-[#181226]">
                      Sector 62, Noida (NCR)
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/95 border border-cyan-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                    <Users2 className="w-4 h-4 text-[#0891B2]" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-[#556070] uppercase tracking-wider">
                      Leadership
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-[#181226]">
                      Rahul Kumar Singh, MD
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/95 border border-cyan-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#0891B2]" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-[#556070] uppercase tracking-wider">
                      Statutory Scope
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-[#181226]">
                      Pan-India Mandate
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Action Anchors */}
            <FadeIn direction="up" distance={12} delay={0.2}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0891B2] text-white font-medium text-xs sm:text-sm font-sans tracking-wide hover:bg-[#0E7490] transition-all group shadow-[0_4px_16px_rgba(88,28,135,0.2)] hover:shadow-[0_8px_24px_rgba(88,28,135,0.28)] hover:-translate-y-0.5"
                >
                  <span>Explore Institutional Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-cyan-200/90 text-xs sm:text-sm font-medium text-[#181226] hover:text-[#0891B2] hover:border-[#0891B2]/60 hover:bg-cyan-50/70 shadow-xs transition-all hover:-translate-y-0.5"
                >
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: The 3 Core Pillars Stack (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <FadeIn direction="up" distance={16} delay={0.08}>
              <div className="p-1.5 rounded-3xl bg-gradient-to-b from-cyan-200/60 via-cyan-100/40 to-cyan-200/30 shadow-[0_16px_40px_-12px_rgba(88,28,135,0.08)]">
                <div className="rounded-[22px] bg-white/95 p-6 sm:p-7 border border-cyan-100/90 shadow-sm space-y-5">
                  <div className="flex items-center justify-between border-b border-cyan-100 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#0891B2]" />
                      <span className="text-xs font-mono uppercase tracking-widest text-[#0891B2] font-semibold">
                        CORE ADVISORY MANDATE
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      03 INTEGRATED PILLARS
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {corePillars.map((pillar) => {
                      const Icon = pillar.icon;
                      return (
                        <div
                          key={pillar.number}
                          className="p-4 sm:p-4.5 rounded-xl bg-gradient-to-r from-white to-[#FAF7FE] border border-cyan-200/80 hover:border-[#06B6D4]/50 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                        >
                          <div className="flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center shrink-0 group-hover:border-[#0891B2]/40 group-hover:bg-[#0891B2] group-hover:text-white transition-all duration-300">
                              <Icon className="w-4 h-4 text-[#0891B2] group-hover:text-white transition-colors" />
                            </div>
                            <div className="space-y-1 min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="text-sm sm:text-base font-semibold text-[#181226] group-hover:text-[#0891B2] transition-colors leading-tight">
                                  {pillar.title}
                                </h3>
                                <span className="text-xs font-mono text-[#0891B2] font-semibold shrink-0 ml-2">
                                  {pillar.number}
                                </span>
                              </div>
                              <p className="text-xs font-mono text-[#0891B2]/90 font-medium">
                                {pillar.subtitle}
                              </p>
                              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pt-0.5">
                                {pillar.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Institutional Assurance Footer */}
                  <div className="pt-3 border-t border-cyan-100 flex items-center justify-between text-xs text-[#475569]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0891B2]" />
                      <span>Direct bank &amp; statutory alignment</span>
                    </div>
                    <Link
                      href="/services"
                      className="font-mono text-[11px] uppercase tracking-wider text-[#0891B2] hover:text-[#0E7490] font-semibold transition-colors inline-flex items-center gap-1"
                    >
                      <span>All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
