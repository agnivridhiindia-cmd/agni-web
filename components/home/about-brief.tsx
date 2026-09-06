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
      "Structuring bank-grade DPRs, CMA data, and DSCR models to unlock up to ₹5 Cr collateral-free credit and ₹50 Cr+ structured credit facilities.",
    icon: Landmark,
    accent: "#C79A4A",
  },
  {
    number: "02",
    title: "Statutory Compliance & Governance",
    subtitle: "ISO Certifications, ZED Ratings & Subsidies",
    description:
      "Guiding enterprises through zero-defect regulatory frameworks, ISO 9001/14001/45001 accreditations, and central/state subsidy recovery.",
    icon: ShieldCheck,
    accent: "#DFC286",
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
      className={cn("relative bg-[#080909] text-[#F3EFE7] border-b border-white/[0.08] overflow-hidden", isPinned ? "h-full w-full flex flex-col justify-center py-6 sm:py-8 lg:py-0" : "py-20 sm:py-24 lg:py-28")}
    >
      {/* Ambient background architectural lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(199,154,74,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(243,239,231,0.02)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:6rem_6rem] opacity-[0.02]" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Who We Are Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Editorial Category Eyebrow */}
            <FadeIn direction="up" distance={14}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#C79A4A] text-xs font-mono tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C79A4A] animate-pulse" />
                <span>ABOUT AGNIVRIDHI INDIA &bull; AT A GLANCE</span>
              </div>
            </FadeIn>

            {/* Dominant Headline */}
            <FadeIn direction="up" distance={16} delay={0.05}>
              <h2
                id="about-brief-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F3EFE7] leading-[1.18]"
              >
                Bridging Indian Industrial Grit with{" "}
                <span className="text-[#C79A4A] italic font-light">
                  Institutional Capital &amp; Structure.
                </span>
              </h2>
            </FadeIn>

            {/* Narrative Prose */}
            <FadeIn direction="up" distance={16} delay={0.1}>
              <div className="space-y-4 text-base sm:text-lg text-[#A5A29A] font-sans font-normal leading-relaxed">
                <p>
                  Headquartered in Sector 62, Noida (NCR) under the stewardship of Founder &amp; Managing Director{" "}
                  <strong className="text-[#F3EFE7] font-medium">{founder.name}</strong>,{" "}
                  <span className="text-[#F3EFE7] font-medium">{company.name}</span> is a multi-disciplinary 
                  institutional advisory firm engineered specifically for Indian MSMEs, manufacturers, and emerging enterprises.
                </p>
                <p className="text-sm sm:text-base text-[#8E8B82]">
                  Most enterprise founders excel on the factory floor and in market execution—yet face severe friction 
                  when navigating bank credit appraisal, statutory regulatory certifications, or modern technology adoption. 
                  We eliminate this fragmentation by serving as an integrated strategic growth partner under one sovereign advisory roof.
                </p>
              </div>
            </FadeIn>

            {/* Operational Anchor Badges */}
            <FadeIn direction="up" distance={14} delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#111313] border border-white/[0.07] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C79A4A]/10 border border-[#C79A4A]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#C79A4A]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-[#8E8B82] uppercase tracking-wider">
                      Headquarters
                    </span>
                    <span className="block text-xs font-semibold text-[#F3EFE7]">
                      Sector 62, Noida (NCR)
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#111313] border border-white/[0.07] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C79A4A]/10 border border-[#C79A4A]/20 flex items-center justify-center shrink-0">
                    <Users2 className="w-4 h-4 text-[#C79A4A]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-[#8E8B82] uppercase tracking-wider">
                      Leadership
                    </span>
                    <span className="block text-xs font-semibold text-[#F3EFE7]">
                      Rahul Kumar Singh, MD
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#111313] border border-white/[0.07] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C79A4A]/10 border border-[#C79A4A]/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#C79A4A]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-[#8E8B82] uppercase tracking-wider">
                      Statutory Scope
                    </span>
                    <span className="block text-xs font-semibold text-[#F3EFE7]">
                      Pan-India MSME Mandate
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
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#C79A4A] text-[#080909] font-medium text-xs sm:text-sm font-sans tracking-wide hover:bg-[#DFC286] transition-all group shadow-[0_0_20px_rgba(199,154,74,0.15)]"
                >
                  <span>Explore Institutional Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-[#F3EFE7] hover:text-[#C79A4A] hover:border-[#C79A4A]/40 transition-colors"
                >
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: The 3 Core Pillars Stack (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <FadeIn direction="up" distance={16} delay={0.08}>
              <div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent">
                <div className="rounded-[14px] bg-[#111313] p-6 sm:p-7 border border-white/[0.07] space-y-6">
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#C79A4A]" />
                      <span className="text-xs font-mono uppercase tracking-widest text-[#C79A4A] font-semibold">
                        CORE ADVISORY MANDATE
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#8E8B82]">
                      03 INTEGRATED PILLARS
                    </span>
                  </div>

                  <div className="space-y-4">
                    {corePillars.map((pillar) => {
                      const Icon = pillar.icon;
                      return (
                        <div
                          key={pillar.number}
                          className="p-4 rounded-xl bg-[#0D0E0E] border border-white/[0.05] hover:border-[#C79A4A]/30 transition-all group relative overflow-hidden"
                        >
                          <div className="flex items-start gap-3.5">
                            <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#C79A4A]/40 transition-colors">
                              <Icon className="w-4 h-4 text-[#C79A4A]" />
                            </div>
                            <div className="space-y-1 min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-[#F3EFE7] group-hover:text-[#DFC286] transition-colors leading-tight">
                                  {pillar.title}
                                </h3>
                                <span className="text-[11px] font-mono text-[#C79A4A]/60 shrink-0 ml-2">
                                  {pillar.number}
                                </span>
                              </div>
                              <p className="text-xs text-[#8E8B82] leading-snug">
                                {pillar.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Institutional Assurance Footer */}
                  <div className="pt-2 border-t border-white/[0.07] flex items-center justify-between text-xs text-[#8E8B82]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C79A4A]" />
                      <span>Direct bank &amp; statutory alignment</span>
                    </div>
                    <Link
                      href="/services"
                      className="font-mono text-[11px] uppercase tracking-wider text-[#C79A4A] hover:text-[#DFC286] transition-colors inline-flex items-center gap-1"
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
