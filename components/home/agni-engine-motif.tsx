"use client";

import * as React from "react";
import { Container } from "@/components/shared/container";
import { FadeIn, useReducedMotionPreference } from "@/components/shared/motion";
import { Landmark, ShieldCheck, Cpu, TrendingUp } from "lucide-react";

export function AgniEngineMotif() {
  const prefersReduced = useReducedMotionPreference();
  const [activePillar, setActivePillar] = React.useState<number>(0);

  const pillars = [
    {
      id: "capital",
      num: "01",
      name: "CAPITAL",
      title: "Sovereign Debt Syndication",
      metric: "₹5 Cr Collateral-Free",
      detail: "Lead-bank appraisal & CGTMSE/PMEGP trust tagging to finance capex with zero promoter property pledge.",
      icon: Landmark,
      color: "#581C87",
    },
    {
      id: "compliance",
      num: "02",
      name: "COMPLIANCE",
      title: "Statutory Governance",
      metric: "100% Audit Readiness",
      detail: "GST statutory defense, ISO 9001/14001 certification, MSME Udyam, and institutional risk mitigation.",
      icon: ShieldCheck,
      color: "#7C3AED",
    },
    {
      id: "technology",
      num: "03",
      name: "TECHNOLOGY",
      title: "Systems & Engineering",
      metric: "Enterprise Cloud & Web",
      detail: "High-throughput Next.js platforms, iOS/Android mobile apps, automated ERP workflows, and cloud DevOps.",
      icon: Cpu,
      color: "#4C1D95",
    },
    {
      id: "growth",
      num: "04",
      name: "GROWTH",
      title: "Market Access & SEO",
      metric: "+65% Average Scale",
      detail: "B2B search dominance, high-intent performance funnels, and enterprise brand authority across Indian hubs.",
      icon: TrendingUp,
      color: "#581C87",
    },
  ];

  return (
    <section
      aria-labelledby="growth-engine-heading"
      className="relative bg-[#FAF9FE] text-[#0F0A1A] py-20 sm:py-28 lg:py-36 border-b border-purple-100 overflow-hidden"
    >
      {/* Background Architectural Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none opacity-40"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10 space-y-14 sm:space-y-20">
        {/* Section Heading */}
        <FadeIn direction="up" distance={16}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200 text-xs font-mono tracking-widest text-[#581C87] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#581C87]" />
              <span>PROPRIETARY ARCHITECTURE &bull; THE AGNI MATRIX</span>
            </div>

            <h2
              id="growth-engine-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0F0A1A] !leading-[1.15]"
            >
              The Agni Growth Engine
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
              Scale is an engineering discipline. Our four interconnected pillars
              operate as a synchronized kinetic cycle—turning raw ambition into institutional dominance.
            </p>
          </div>
        </FadeIn>

        {/* Central Architectural Kinetic Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG Connector Axis Framework */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none hidden md:flex items-center justify-center select-none"
          >
            <svg
              className="w-full h-full max-w-[620px] max-h-[420px]"
              viewBox="0 0 620 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Architectural Framing Diamond */}
              <polygon
                points="310,20 600,210 310,400 20,210"
                stroke="rgba(243, 239, 231, 0.08)"
                strokeWidth="1"
                fill="none"
              />

              {/* Diagonal Crosshair Guidelines */}
              <line
                x1="310"
                y1="20"
                x2="310"
                y2="400"
                stroke="rgba(199, 154, 74, 0.2)"
                strokeDasharray="3 3"
              />
              <line
                x1="20"
                y1="210"
                x2="600"
                y2="210"
                stroke="rgba(199, 154, 74, 0.2)"
                strokeDasharray="3 3"
              />

              {/* Concentric Kinetic Radar Rings */}
              <circle
                cx="310"
                cy="210"
                r="65"
                stroke="rgba(199, 154, 74, 0.25)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle
                cx="310"
                cy="210"
                r="110"
                stroke="rgba(243, 239, 231, 0.05)"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* 4 Quadrant Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === idx;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  onMouseEnter={() => setActivePillar(idx)}
                  className={`group relative p-6 sm:p-8 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#581C87]/50 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.9)]"
                      : "bg-white/50 hover:bg-white border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  {/* Active Indicator Line */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-[2px] transition-all duration-300 ${
                      isSelected
                        ? "bg-gradient-to-r from-transparent via-[#581C87] to-transparent opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  <div className="space-y-4">
                    {/* Top Meta: Index + Metric */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#581C87] font-semibold">
                          {pillar.num}
                        </span>
                        <span className="text-[10px] font-mono text-[#8E8D86] uppercase tracking-widest">
                          {pillar.name}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#0F0A1A]">
                        {pillar.metric}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3.5 pt-1">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 shrink-0 ${
                          isSelected
                            ? "bg-[#581C87] text-white border-[#581C87] shadow-sm"
                            : "bg-white/[0.04] text-[#581C87] border-purple-100 group-hover:border-[#581C87]/40"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0F0A1A] group-hover:text-[#7C3AED] transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Detailed Paragraph */}
                    <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
