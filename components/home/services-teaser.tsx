"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Cpu, Globe } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn, useReducedMotionPreference } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

interface PracticeInfo {
  id: string;
  num: string;
  discipline: string;
  headline: string;
  subhead: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
  deliverables: string[];
  anchor: string;
  icon: React.ElementType;
}

const practices: PracticeInfo[] = [
  {
    id: "funding",
    num: "01",
    discipline: "CAPITAL & DEBT SYNDICATION",
    headline: "Institutional Debt & Sovereign Credit",
    subhead: "TEV & DPR Modeling",
    description:
      "Direct banking liaison and audit-grade Detailed Project Reports (DPR) to secure collateral-free CGTMSE credit up to   -  5 Cr, 35% PMEGP subsidies, and project term loans.",
    image: "/img/practice-capital.jpg",
    imageAlt: "Indian automated CNC machining plant financed via sovereign debt",
    tag: "  -  5 Cr Collateral-Free Ceiling",
    deliverables: ["CGTMSE Guarantee Trust", "PMEGP 35% Capital Subsidies", "Lead Bank Sanctions"],
    anchor: "/services#funding",
    icon: Building2,
  },
  {
    id: "compliance",
    num: "02",
    discipline: "STATUTORY & REGULATORY GOVERNANCE",
    headline: "Statutory Certifications & Audits",
    subhead: "ISO & Regulatory Shield",
    description:
      "Turnkey regulatory advisory across GST statutory defenses, MSME/Udyam registrations, international ISO 9001/14001 certification frameworks, and corporate trademark protection.",
    image: "/img/practice-compliance.jpg",
    imageAlt: "Indian industrial quality testing and ISO audit facility",
    tag: "Audit-Grade Institutional Readiness",
    deliverables: ["ISO 9001/14001 Audits", "GST Statutory Defense", "Trademark Defense"],
    anchor: "/services#compliance",
    icon: ShieldCheck,
  },
  {
    id: "it",
    num: "03",
    discipline: "SOFTWARE & SYSTEMS ENGINEERING",
    headline: "Enterprise Platforms & Cloud Architecture",
    subhead: "Full-Stack Engineering",
    description:
      "Custom software engineering, high-throughput Next.js enterprise portals, native iOS & Android applications, automated cloud DevOps, and ERP workflows.",
    image: "/img/practice-systems.jpg",
    imageAlt: "Indian enterprise cloud software architecture lab",
    tag: "100% Client Code Ownership",
    deliverables: ["Next.js Enterprise Web", "Native iOS & Android Apps", "Automated Cloud DevOps"],
    anchor: "/services#it",
    icon: Cpu,
  },
  {
    id: "digital",
    num: "04",
    discipline: "DIGITAL GROWTH & MARKET ACCESS",
    headline: "B2B Search Authority & Growth Funnels",
    subhead: "Search & Market Expansion",
    description:
      "Dominant B2B organic search engine positioning, high-intent performance advertising funnels, and institutional brand positioning designed to capture sovereign contracts.",
    image: "/img/practice-growth.jpg",
    imageAlt: "Indian enterprise executive strategy session on digital expansion",
    tag: "B2B Organic Discovery",
    deliverables: ["Technical B2B SEO", "High-Intent Lead Funnels", "Corporate Brand Authority"],
    anchor: "/services#digital",
    icon: Globe,
  },
];

export function ServicesTeaser() {
  const [activePracticeId, setActivePracticeId] = React.useState<string>("funding");
  const prefersReduced = useReducedMotionPreference();

  const activePractice = practices.find((p) => p.id === activePracticeId) ?? practices[0];

  return (
    <section
      aria-labelledby="services-teaser-heading"
      className="relative overflow-hidden border-b border-cyan-100/80 bg-[radial-gradient(circle_at_10%_10%,rgba(103,232,249,0.16),transparent_24%),radial-gradient(circle_at_90%_15%,rgba(45,212,191,0.14),transparent_20%),linear-gradient(180deg,#fbfeff_0%,#f3fbfd_24%,#ffffff_100%)] py-20 text-[#181226] sm:py-28 lg:py-36"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute -right-24 top-1/4 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -left-24 bottom-8 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.09)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <FadeIn direction="up" distance={16}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-cyan-100/80 pb-8">
            <div className="space-y-3.5 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-200/90 text-xs font-mono tracking-widest text-[#0891B2] uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
                <span>OUR SERVICES</span>
              </div>

              <h2
                id="services-teaser-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.015em] text-[#181226] !leading-[1.15]"
              >
                Comprehensive Solutions for Your Business
                <br />
                <span className="text-[#0891B2] italic font-normal font-editorial">Funding, Compliance, and Growth.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#475569] leading-[1.7]">
                From funding to certifications to growth - everything you need under one roof.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-200/90 hover:border-[#0891B2]/60 text-[#181226] hover:text-[#0891B2] bg-white/75 backdrop-blur-md hover:bg-white/95 text-xs font-mono tracking-wider uppercase transition-all group shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_14px_rgba(8,145,178,0.12)] hover:-translate-y-0.5 [transform:translateZ(0)]"
              >
                <span>Complete Service Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* ============================================================
            SPLIT INTERACTIVE PRACTICE NAVIGATION & PHOTOGRAPHY FRAME
            ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: 4 Interactive Practice Rows (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {practices.map((practice) => {
              const isActive = activePracticeId === practice.id;

              return (
                <div
                  key={practice.id}
                  onMouseEnter={() => setActivePracticeId(practice.id)}
                  onFocus={() => setActivePracticeId(practice.id)}
                  className={cn(
                    "group relative cursor-pointer rounded-2xl border p-5 transition-all duration-300 sm:p-6 [transform:translateZ(0)]",
                    isActive
                      ? "border-white/70 bg-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_12px_32px_rgba(8,145,178,0.14)]"
                      : "border-white/50 bg-white/70 hover:border-white/80 hover:bg-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_4px_16px_rgba(8,145,178,0.05)]"
                  )}
                >
                  {/* Active highlight pill on left edge */}
                  <div
                    className={cn(
                      "absolute left-0 top-5 bottom-5 w-1 rounded-r-full transition-all duration-300",
                      isActive
                        ? "bg-[#0891B2] opacity-100"
                        : "bg-transparent opacity-0 group-hover:opacity-40 group-hover:bg-[#06B6D4]"
                    )}
                  />

                  <Link href={practice.anchor} className="block pl-3 sm:pl-4 space-y-2.5">
                    {/* Row Top: Number + Discipline Tag */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-mono text-xs tracking-wider uppercase transition-colors",
                            isActive ? "text-[#0891B2] font-semibold" : "text-[#556070]"
                          )}
                        >
                          PRACTICE {practice.num} &bull; {practice.discipline}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#06B6D4] hidden sm:inline font-medium">
                        [{practice.subhead}]
                      </span>
                    </div>

                    {/* Headline */}
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={cn(
                          "font-serif text-xl sm:text-2xl font-medium transition-all duration-300",
                          isActive
                            ? "text-[#0891B2] translate-x-0.5"
                            : "text-[#181226] group-hover:text-[#0891B2]"
                        )}
                      >
                        {practice.headline}
                      </h3>

                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                          isActive
                            ? "border-[#0891B2] bg-gradient-to-br from-[#0891B2] to-[#10B981] text-white shadow-[0_6px_16px_rgba(8,145,178,0.28)]"
                            : "border-cyan-200 text-[#475569] group-hover:border-[#0891B2] group-hover:text-[#0891B2]"
                        )}
                      >
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="font-sans text-xs sm:text-sm text-[#475569] leading-[1.65] max-w-xl">
                      {practice.description}
                    </p>

                    {/* Deliverables Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {practice.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono text-[#0891B2] bg-white border border-cyan-200/80 shadow-2xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Architectural Photography Frame (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_20px_50px_rgba(8,145,178,0.12)] group aspect-[4/3] [transform:translateZ(0)]">
              {/* Corner Blueprint Crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-xs text-[#0891B2]/40 z-30 select-none">
                +
              </div>
              <div className="absolute bottom-2 right-2 font-mono text-xs text-[#0891B2]/40 z-30 select-none">
                +
              </div>

              {/* Crossfading Photography */}
              {practices.map((practice) => {
                const isCurrent = practice.id === activePractice.id;
                return (
                  <div
                    key={practice.id}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-700 ease-in-out",
                      isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    )}
                  >
                    <Image
                      src={practice.image}
                      alt={practice.imageAlt}
                      fill
                      sizes="(max-width: 1200px) 40vw, 500px"
                      className={cn(
                        "object-cover object-center transform transition-transform duration-1000",
                        isCurrent && "scale-105"
                      )}
                    />
                    {/* Dark gradient & micrograin */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/90 via-[#080909]/30 to-transparent" />
                    <div className="absolute inset-0 bg-noise pointer-events-none" />
                  </div>
                );
              })}

              {/* Foreground Technical Metadata Overlay */}
              <div className="relative z-20 h-full p-6 flex flex-col justify-between pointer-events-none">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-md border border-cyan-100/90 text-[10px] font-mono text-[#181226] uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2] animate-pulse" />
                    <span>DESK {activePractice.num} &bull; CONTEXT</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-cyan-100/90 text-[10px] font-mono text-[#0891B2] shadow-xs font-semibold">
                    {activePractice.tag}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="space-y-1 bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.05)] [transform:translateZ(0)]">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#0891B2] font-semibold">
                    {activePractice.discipline}
                  </p>
                  <p className="font-serif text-lg text-[#181226] font-normal leading-snug">
                    {activePractice.headline}
                  </p>
                  <p className="text-xs text-[#556070] font-sans line-clamp-2 leading-relaxed">
                    {activePractice.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
