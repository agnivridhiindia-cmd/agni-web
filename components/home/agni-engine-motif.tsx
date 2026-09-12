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
      className="relative bg-gradient-to-b from-[#091020] via-[#0B1329] to-[#0A1122] text-white py-20 sm:py-26 lg:py-36 border-b border-slate-800/80 overflow-hidden"
    >
      {/* Precision architectural ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(6,182,212,0.12)_1px,transparent_1px)] [background-size:32px_32px] opacity-60 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_50%,transparent_100%)]" />
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.1)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        {/* Subtle corner crosshairs */}
        <div className="absolute top-8 left-8 font-mono text-xs text-cyan-400/40 select-none">+</div>
        <div className="absolute top-8 right-8 font-mono text-xs text-amber-400/40 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10 space-y-12 sm:space-y-16">
        {/* Section Heading */}
        <FadeIn direction="up" distance={16}>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>PROPRIETARY ARCHITECTURE &bull; THE AGNI MATRIX</span>
            </div>

            <h2
              id="growth-engine-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-[-0.03em] text-white !leading-[1.14]"
            >
              The Agni{" "}
              <span className="text-amber-600 font-bold">
                Growth Engine Architecture.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl leading-[1.7]">
              Scale is an engineering discipline. Our four interconnected pillars operate as a synchronized kinetic cycle—turning raw ambition into institutional dominance.
            </p>
          </div>
        </FadeIn>

        {/* Apple Bento Grid with Frosted Glass Panels in Light Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="space-y-4 text-left p-7 sm:p-9 rounded-[2.5rem] border border-slate-700/60 bg-gradient-to-b from-[#111D3A] to-[#0D162D] hover:border-sky-400/60 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/10 hover:shadow-[0_24px_50px_-10px_rgba(14,165,233,0.2)] transition-all duration-300 hover:-translate-y-1 group [transform:translateZ(0)]"
              >
                {/* Meta row: Index + Category + Metric */}
                <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-amber-400 font-bold tracking-wider">
                      {pillar.num}
                    </span>
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-widest font-semibold">
                      {pillar.name}
                    </span>
                  </div>

                  <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 font-semibold shadow-xs">
                    {pillar.metric}
                  </span>
                </div>

                {/* Title with Icon */}
                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-11 h-11 rounded-2xl bg-slate-800/80 border border-slate-700 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 transition-all duration-300 shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-slate-300 leading-relaxed pl-0 sm:pl-14">
                  {pillar.detail}
                </p>

                {/* Apple Liquid Glass Link Pill */}
                <div className="pl-0 sm:pl-14 pt-2">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 border border-slate-700 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 text-xs font-mono tracking-wider uppercase text-slate-200 transition-all shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.25)] group/link hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/link:text-slate-950 transition-transform group-hover/link:translate-x-1" />
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
