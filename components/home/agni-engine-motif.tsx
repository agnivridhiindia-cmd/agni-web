"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";
import { Landmark, ShieldCheck, Cpu, TrendingUp, ArrowRight } from "lucide-react";

export function AgniEngineMotif() {
  const pillars = [
    {
      id: "capital",
      num: "01",
      name: "CAPITAL",
      title: "Sovereign Debt Syndication",
      metric: "₹5 Cr Collateral-Free",
      detail:
        "Lead-bank appraisal & CGTMSE/PMEGP trust tagging to finance enterprise capex with zero promoter property pledge.",
      icon: Landmark,
      href: "/services#funding",
      linkText: "Explore Debt Syndication",
    },
    {
      id: "compliance",
      num: "02",
      name: "COMPLIANCE",
      title: "Statutory Governance & Defense",
      metric: "100% Audit Readiness",
      detail:
        "GST statutory defense, ISO 9001/14001 certification, MSME Udyam registration, and institutional risk mitigation.",
      icon: ShieldCheck,
      href: "/services#compliance",
      linkText: "Explore Compliance Advisory",
    },
    {
      id: "technology",
      num: "03",
      name: "TECHNOLOGY",
      title: "Systems & Software Engineering",
      metric: "Enterprise Cloud & Web",
      detail:
        "High-throughput Next.js platforms, iOS/Android mobile applications, automated ERP workflows, and cloud DevOps.",
      icon: Cpu,
      href: "/services#it",
      linkText: "Explore Technology & Software",
    },
    {
      id: "growth",
      num: "04",
      name: "GROWTH",
      title: "Market Access & Performance",
      metric: "+65% Average Scale",
      detail:
        "B2B search dominance, high-intent conversion funnels, and enterprise brand authority across regional trade corridors.",
      icon: TrendingUp,
      href: "/services#digital",
      linkText: "Explore Digital Growth",
    },
  ];

  return (
    <section
      aria-labelledby="growth-engine-heading"
      className="relative bg-[#FAF8FE] text-[#181226] py-16 sm:py-24 lg:py-28 border-b border-cyan-100/80 overflow-hidden"
    >
      <Container width="wide" className="relative z-10 space-y-12 sm:space-y-16">
        {/* Section Heading */}
        <FadeIn direction="up" distance={16}>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-cyan-200 text-xs font-mono tracking-widest text-[#0891B2] uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              <span>PROPRIETARY ARCHITECTURE &bull; THE AGNI MATRIX</span>
            </div>

            <h2
              id="growth-engine-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-[-0.015em] text-[#181226] !leading-[1.18]"
            >
              The Agni Growth Engine
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#475569] max-w-2xl leading-[1.7]">
              Scale is an engineering discipline. Our four interconnected pillars operate as a synchronized kinetic cycle—turning raw ambition into institutional dominance.
            </p>
          </div>
        </FadeIn>

        {/* 2 options per row, clean layout with redirect links (no cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 pt-4 border-t border-cyan-100/80">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="space-y-4 group text-left"
              >
                {/* Meta row: Index + Category + Metric */}
                <div className="flex items-center justify-between gap-4 pb-2 border-b border-cyan-100/60">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#0891B2] font-semibold">
                      {pillar.num}
                    </span>
                    <span className="text-xs font-mono text-[#556070] uppercase tracking-wider font-semibold">
                      {pillar.name}
                    </span>
                  </div>

                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-50/80 border border-cyan-200/60 text-[#0891B2] font-medium">
                    {pillar.metric}
                  </span>
                </div>

                {/* Title with Icon */}
                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 border border-cyan-200/80 text-[#0891B2] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0891B2] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#181226] group-hover:text-[#0891B2] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-[#475569] leading-relaxed pl-12">
                  {pillar.detail}
                </p>

                {/* Direct Redirect Link */}
                <div className="pl-12 pt-1">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0891B2] hover:text-[#0E7490] transition-colors group/link"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
