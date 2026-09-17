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

const sectionGradients = [
  "bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F6FB]",
  "bg-gradient-to-b from-[#F1F6FB] via-[#EBF3FA] to-[#F4F9FD]",
  "bg-gradient-to-b from-[#F4F9FD] via-[#F8FAFC] to-[#EFF6FC]",
  "bg-gradient-to-b from-[#EFF6FC] via-[#F1F6FA] to-[#E7F1F9]",
];

export function ServiceCategorySection({
  category,
  services,
  index,
}: ServiceCategorySectionProps) {
  const sectionNumber = String(index + 1).padStart(2, "0");
  const pov = categoryPovMap[category.id] || categoryPovMap.funding;
  const gradientClass = sectionGradients[index % sectionGradients.length];

  if (services.length === 0) {
    return null;
  }

  return (
    <section
      id={category.id}
      aria-labelledby={`heading-${category.id}`}
      className={cn(
        "relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 border-b border-[#CBDDEB] text-slate-900 overflow-hidden last:border-b-0 transition-colors",
        gradientClass
      )}
    >
      {/* Precision architectural ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:32px_32px] opacity-25 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_65%,transparent_100%)]" />
        <div className="absolute top-1/4 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.04)_0%,transparent_70%)]" />
        {/* Subtle architectural coordinates */}
        <div className="absolute top-6 left-6 font-mono text-xs text-amber-600/30 select-none">+</div>
        <div className="absolute top-6 right-6 font-mono text-xs text-sky-600/30 select-none">+</div>
      </div>

      <Container width="wide" className="relative z-10 space-y-8 sm:space-y-10">
        {/* Category Header Row */}
        <div className="relative border-b border-[#CBDDEB] pb-8">
          {/* Editorial Numeral Watermark */}
          <span
            aria-hidden="true"
            className="hidden md:block absolute right-0 top-0 font-serif text-8xl lg:text-9xl font-bold select-none pointer-events-none -translate-y-4 leading-none tracking-tighter text-slate-900/[0.04]"
          >
            {sectionNumber}
          </span>

          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBDDEB] text-xs font-mono tracking-widest text-slate-800 uppercase shadow-2xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>PRACTICE {sectionNumber} &bull; {category.id.toUpperCase()}</span>
              </div>
              <span className="text-xs font-mono text-slate-600 font-semibold">
                {services.length} {services.length === 1 ? "Program" : "Programs"} Catalogued
              </span>
            </div>

 <h2
 id={`heading-${category.id}`}
 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight"
 >
 {category.name}
 </h2>

 <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-sans max-w-3xl font-medium">
 {category.shortDescription}
 </p>

 {/* Strategic Point of View Callout */}
 <div className="mt-4 pl-4 border-l-4 border-amber-500 py-3 text-xs sm:text-sm font-sans italic bg-white/90 text-slate-800 rounded-r-2xl pr-4 border-y border-r border-[#CBDDEB] shadow-2xs max-w-3xl font-medium">
 &ldquo;{pov}&rdquo;
 </div>
 </div>
 </div>

 {/* Editorial Service Directory Grid (2-column layout in flagship frosted cards) */}
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
