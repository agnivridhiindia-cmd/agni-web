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
        <div className="absolute top-1/3 -left-32 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#0891B2_1px,transparent_1px),linear-gradient(to_bottom,#0891B2_1px,transparent_1px)] [background-size:6rem_6rem] opacity-[0.02]" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 gap-12 items-start">
          {/* Left Column: Who We Are Narrative (7 Cols) */}
          <div className="space-y-8">
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

            {/* Action Anchors */}
            <FadeIn direction="up" distance={12} delay={0.2}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-b from-[#0AA5C7]/90 via-[#0891B2]/95 to-[#0E7490]/95 backdrop-blur-md border border-white/25 text-white font-medium text-xs sm:text-sm font-sans tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_16px_rgba(8,145,178,0.22)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(8,145,178,0.32)] transition-all group hover:-translate-y-0.5 [transform:translateZ(0)]"
                >
                  <span>Explore Institutional Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/75 backdrop-blur-md border border-cyan-200/90 text-xs sm:text-sm font-medium text-[#181226] hover:text-[#0891B2] hover:border-[#0891B2]/60 hover:bg-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_14px_rgba(8,145,178,0.12)] transition-all hover:-translate-y-0.5 [transform:translateZ(0)]"
                >
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </FadeIn>
          </div>

        </div>
      </Container>
    </section>
  );
}
