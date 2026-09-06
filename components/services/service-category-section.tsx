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

const categoryVisuals: Record<
  string,
  {
    numeralColor: string;
    badgeBg: string;
    badgeText: string;
    borderAccent: string;
    quoteColor: string;
    pov: string;
  }
> = {
  funding: {
    numeralColor: "text-white/[0.04]",
    badgeBg: "bg-[#181A1A] border-[#232727]",
    badgeText: "text-[#C79A4A]",
    borderAccent: "border-l-[#C79A4A]",
    quoteColor: "text-[#D1CBC1]",
    pov: "Sovereign credit guarantees and capital subsidies structure unencumbered growth runway without relinquishing equity control or encumbering personal residential assets.",
  },
  compliance: {
    numeralColor: "text-white/[0.04]",
    badgeBg: "bg-[#181A1A] border-[#232727]",
    badgeText: "text-[#2DD4BF]",
    borderAccent: "border-l-[#2DD4BF]",
    quoteColor: "text-[#D1CBC1]",
    pov: "Rigorous statutory registrations and international quality standards transform statutory friction into competitive institutional tender qualifications.",
  },
  digital: {
    numeralColor: "text-white/[0.04]",
    badgeBg: "bg-[#181A1A] border-[#232727]",
    badgeText: "text-[#38BDF8]",
    borderAccent: "border-l-[#38BDF8]",
    quoteColor: "text-[#D1CBC1]",
    pov: "High-performance web platforms and technical search dominance establish commercial authority and high-intent customer acquisition pipelines.",
  },
  it: {
    numeralColor: "text-[#F3EFE7]/15",
    badgeBg: "bg-[#181A1A] border-[#232727]",
    badgeText: "text-[#F3EFE7]",
    borderAccent: "border-l-[#8E8B82]",
    quoteColor: "text-[#D1CBC1]",
    pov: "Bespoke internal software portals, ERP automations, and resilient IT infrastructure systematically eliminate operational bottlenecks.",
  },
};

export function ServiceCategorySection({
  category,
  services,
  index,
}: ServiceCategorySectionProps) {
  const visual = categoryVisuals[category.id] || categoryVisuals.funding;
  const sectionNumber = String(index + 1).padStart(2, "0");

  if (services.length === 0) {
    return null;
  }

  return (
    <section
      id={category.id}
      aria-labelledby={`heading-${category.id}`}
      className="scroll-mt-32 py-14 sm:py-18 lg:py-20 border-b border-[#232727] last:border-b-0"
    >
      <Container width="wide" className="space-y-8 sm:space-y-10">
        {/* Category Header Row */}
        <div className="relative border-b border-[#232727] pb-8">
          {/* Editorial Numeral Watermark */}
          <span
            aria-hidden="true"
            className={cn(
              "hidden md:block absolute right-0 top-0 font-serif text-8xl lg:text-9xl font-bold select-none pointer-events-none -translate-y-4 leading-none tracking-tighter",
              visual.numeralColor
            )}
          >
            {sectionNumber}
          </span>

          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={cn(
                  "font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border",
                  visual.badgeBg,
                  visual.badgeText
                )}
              >
                PRACTICE {sectionNumber} &bull; {category.id.toUpperCase()}
              </span>
              <span className="text-xs font-mono text-[#8E8B82]">
                {services.length} {services.length === 1 ? "Program" : "Programs"} Catalogued
              </span>
            </div>

            <h2
              id={`heading-${category.id}`}
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F3EFE7] tracking-tight leading-tight"
            >
              {category.name}
            </h2>

            <p className="text-[#D1CBC1] text-sm sm:text-base leading-relaxed font-sans max-w-3xl">
              {category.shortDescription}
            </p>

            {/* Strategic Point of View Callout */}
            <div
              className={cn(
                "mt-4 pl-4 border-l-2 py-2 text-xs sm:text-sm font-sans italic bg-[#111313] rounded-r-lg pr-4 border-y border-r border-[#232727]",
                visual.borderAccent,
                visual.quoteColor
              )}
            >
              &ldquo;{visual.pov}&rdquo;
            </div>
          </div>
        </div>

        {/* Editorial Service Directory Grid (2-column layout for scannability & reading comfort) */}
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
