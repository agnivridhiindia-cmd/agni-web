import * as React from "react";
import type { Service, ServiceCategoryMeta } from "@/types/service";
import { ServiceCard } from "./service-card";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

interface ServiceCategorySectionProps {
  category: ServiceCategoryMeta;
  services: readonly Service[];
  index: number;
}

const categoryPovMap: Record<string, string> = {
  funding:
    "Sovereign credit guarantees and capital subsidies structure unencumbered growth runway without relinquishing equity control or encumbering personal residential assets.",
  compliance:
    "Rigorous statutory registrations and international quality standards transform statutory friction into competitive institutional tender qualifications.",
  digital:
    "High-performance web platforms and technical search dominance establish commercial authority and high-intent customer acquisition pipelines.",
  it:
    "Bespoke internal software portals, ERP automations, and resilient IT infrastructure systematically eliminate operational bottlenecks.",
};

export function ServiceCategorySection({
  category,
  services,
  index,
}: ServiceCategorySectionProps) {
  const sectionNumber = String(index + 1).padStart(2, "0");
  const pov = categoryPovMap[category.id] || categoryPovMap.funding;

  if (services.length === 0) {
    return null;
  }

  return (
    <section
      id={category.id}
      aria-labelledby={`heading-${category.id}`}
      className="relative scroll-mt-32 py-16 sm:py-20 lg:py-24 border-b border-slate-800/80 bg-slate-950 text-white overflow-hidden last:border-b-0"
    >
      {/* Ambient Technical Blueprint Grid & Atmospheric Subtle Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_65%,transparent_100%)]" />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] bg-amber-500/10 rounded-full blur-[100px]" />
        {/* Subtle architectural coordinates */}
        <div className="absolute top-6 left-6 font-mono text-xs text-amber-400/25 select-none">+</div>
        <div className="absolute top-6 right-6 font-mono text-xs text-cyan-400/25 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10 space-y-8 sm:space-y-10">
        {/* Category Header Row */}
        <div className="relative border-b border-slate-800/80 pb-8">
          {/* Editorial Numeral Watermark */}
          <span
            aria-hidden="true"
            className="hidden md:block absolute right-0 top-0 font-serif text-8xl lg:text-9xl font-bold select-none pointer-events-none -translate-y-4 leading-none tracking-tighter text-white/[0.04]"
          >
            {sectionNumber}
          </span>

          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>PRACTICE {sectionNumber} &bull; {category.id.toUpperCase()}</span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {services.length} {services.length === 1 ? "Program" : "Programs"} Catalogued
              </span>
            </div>

            <h2
              id={`heading-${category.id}`}
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight leading-tight"
            >
              {category.name}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-3xl">
              {category.shortDescription}
            </p>

            {/* Strategic Point of View Callout */}
            <div className="mt-4 pl-4 border-l-2 border-amber-400/80 py-3 text-xs sm:text-sm font-sans italic bg-slate-900/70 text-slate-200 rounded-r-xl pr-4 border-y border-r border-slate-800/80 shadow-xs max-w-3xl">
              &ldquo;{pov}&rdquo;
            </div>
          </div>
        </div>

        {/* Editorial Service Directory Grid (2-column layout in flagship teal cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, sIdx) => (
            <FadeIn key={service.id} direction="up" distance={14} delay={0.04 * sIdx}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
