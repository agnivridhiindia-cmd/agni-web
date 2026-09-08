"use client";

import * as React from "react";
import Link from "next/link";
import { 
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export interface AboutBriefProps {
  isPinned?: boolean;
}

export function AboutBrief({ isPinned = false }: AboutBriefProps) {
  const { company } = siteConfig;

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
        <div className="absolute top-1/3 -left-32 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#0891B2_1px,transparent_1px),linear-gradient(to_bottom,#0891B2_1px,transparent_1px)] [background-size:6rem_6rem] opacity-[0.02]" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="space-y-14 sm:space-y-16 lg:space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8 space-y-7">
              <FadeIn direction="up" distance={14}>
                <div className="inline-flex items-center gap-2.5 text-[#0891B2] text-xs font-mono tracking-[0.18em] uppercase">
                  <span className="h-px w-8 bg-[#0891B2]" />
                  <span>ABOUT AGNIVRIDHI INDIA &bull; AT A GLANCE</span>
                </div>
              </FadeIn>

              <FadeIn direction="up" distance={16} delay={0.05}>
                <h2
                  id="about-brief-heading"
                  className="max-w-4xl font-serif text-4xl sm:text-5xl lg:text-[4.25rem] font-normal tracking-[-0.025em] text-[#181226] leading-[1.04]"
                >
                  The institutional bridge between{" "}
                  <span className="text-[#0891B2] italic">ambition and scale</span>.
                </h2>
              </FadeIn>
            </div>

            <FadeIn direction="up" distance={14} delay={0.1} className="lg:col-span-4">
              <p className="border-l border-[#0891B2]/50 pl-5 text-sm sm:text-base leading-[1.75] text-[#475569] lg:mb-2">
                A focused advisory partner for Indian MSMEs and startups building stronger, more investable businesses.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start border-t border-cyan-200/80 pt-8 sm:pt-10">
            <FadeIn direction="up" distance={16} delay={0.1} className="lg:col-span-6">
              <div className="space-y-5 text-base sm:text-lg text-[#475569] font-sans leading-[1.75]">
                <p>
                  At <span className="font-semibold text-[#181226]">{company.name}</span>, we turn complex growth requirements into clear, executable paths for funding, compliance, certification, and digital systems.
                </p>
                <p className="text-sm sm:text-base">
                  From CGTMSE, PMEGP, and MUDRA guidance to institutional-grade documentation and workflow automation, our work helps business owners move forward with confidence.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={16} delay={0.15} className="lg:col-span-6">
              <div className="divide-y divide-cyan-200/80 border-y border-cyan-200/80">
                {[
                  ["01", "Capital readiness", "Bank-grade DPRs, CMA data, and structured funding pathways."],
                  ["02", "Regulatory confidence", "Certifications, compliance systems, and subsidy alignment."],
                  ["03", "Digital momentum", "Web, ERP, and automation systems built for the next stage."],
                ].map(([number, title, description]) => (
                  <div key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 py-4 sm:py-5">
                    <span className="font-mono text-xs font-semibold text-[#0891B2]">{number}</span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-semibold text-[#181226]">{title}</h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#64748B]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" distance={12} delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-b from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 border border-white/25 text-white font-medium text-xs sm:text-sm font-sans tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(8,145,178,0.32)] transition-all hover:-translate-y-0.5 [transform:translateZ(0)]"
              >
                <span>Explore Institutional Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/75 border border-cyan-200/90 text-xs sm:text-sm font-medium text-[#181226] hover:text-[#0891B2] hover:border-[#0891B2]/60 hover:bg-white transition-all hover:-translate-y-0.5"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
