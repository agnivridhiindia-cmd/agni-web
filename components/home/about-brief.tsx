"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        "relative bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFDFE_20%,#F3F7FB_48%,#E5F0F8_78%,#D8E8F5_100%)] border-b border-[#C0D8EB] overflow-hidden",
        isPinned ? "h-full w-full flex flex-col justify-center py-6 sm:py-8 lg:py-0" : "py-20 sm:py-24 lg:py-32"
      )}
    >
      {/* Precision architectural ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        {/* Soft top ambient rule */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 [background-image:radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_50%,transparent_100%)]" />
        {/* Soft ambient light spheres */}
        <div className="absolute top-1/4 -left-28 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.04)_0%,rgba(245,158,11,0.01)_45%,transparent_70%)]" />
        <div className="absolute -bottom-10 -right-20 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,rgba(14,165,233,0.01)_45%,transparent_70%)]" />
        <div className="absolute -bottom-16 left-1/4 h-[450px] w-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05)_0%,rgba(56,189,248,0.01)_45%,transparent_70%)] pointer-events-none" />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8 space-y-6">
              <FadeIn direction="up" distance={14}>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-mono tracking-[0.14em] uppercase shadow-2xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>ABOUT AGNIVRIDHI INDIA &bull; AT A GLANCE</span>
                </div>
              </FadeIn>

              <FadeIn direction="up" distance={16} delay={0.05}>
                <h2
                  id="about-brief-heading"
                  className="max-w-4xl font-heading text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-[-0.03em] text-slate-900 leading-[1.08]"
                >
                  The institutional bridge between{" "}
                  <span className="text-amber-600 font-bold">ambition and scale</span>.
                </h2>
              </FadeIn>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <FadeIn direction="up" distance={14} delay={0.1}>
                <p className="font-sans text-base text-slate-600 leading-relaxed">
                  A focused advisory partner for Indian MSMEs and startups building stronger, more investable businesses.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <FadeIn direction="up" distance={16} delay={0.1} className="lg:col-span-6">
              <div className="space-y-5">
                <p className="font-sans text-base sm:text-lg leading-relaxed text-slate-800 font-medium">
                  At <strong className="font-bold text-slate-950">Agnivridhi India</strong>, we turn complex growth requirements into clear, executable paths for funding, compliance, certification, and digital systems.
                </p>
                <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-600">
                  From CGTMSE, PMEGP, and MUDRA guidance to institutional-grade documentation and workflow automation, our work helps business owners move forward with confidence.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={16} delay={0.15} className="lg:col-span-6">
              <div className="rounded-[2rem] border border-white/80 bg-white/95 p-6 sm:p-8 shadow-[0_20px_45px_-12px_rgba(14,165,233,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] ring-1 ring-slate-900/5">
                <div className="divide-y divide-slate-100/90">
                  {[
                    ["01", "Capital readiness", "Bank-grade DPRs, CMA data, and structured funding pathways."],
                    ["02", "Regulatory confidence", "Certifications, compliance systems, and subsidy alignment."],
                    ["03", "Digital momentum", "Web, ERP, and automation systems built for the next stage."],
                  ].map(([number, title, description]) => (
                    <div key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 py-4 sm:py-5 first:pt-0 last:pb-0">
                      <span className="font-mono text-xs font-bold text-amber-600 pt-0.5">{number}</span>
                      <div className="space-y-1">
                        <h3 className="font-heading text-sm sm:text-base font-semibold text-slate-900">{title}</h3>
                        <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-600">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" distance={12} delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-950 text-white font-semibold text-xs sm:text-sm font-sans tracking-wide border border-white/20 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.35),0_10px_24px_-4px_rgba(15,23,42,0.25)] hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all [transform:translateZ(0)]"
              >
                <span>Explore Institutional Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_8px_20px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all"
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
