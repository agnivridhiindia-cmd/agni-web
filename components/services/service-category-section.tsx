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
    pov: string;
  }
> = {
  funding: {
    numeralColor: "text-gold-950/20",
    badgeBg: "bg-gold-50 border-gold-200/90",
    badgeText: "text-gold-800",
    borderAccent: "border-l-gold-500",
    pov: "Sovereign guarantees and credit subsidies structure unencumbered capital runway without relinquishing equity control or encumbering personal residential assets.",
  },
  compliance: {
    numeralColor: "text-teal-950/20",
    badgeBg: "bg-teal-50 border-teal-200/90",
    badgeText: "text-teal-800",
    borderAccent: "border-l-teal-600",
    pov: "Rigorous statutory registrations and international quality standards turn statutory friction into competitive institutional tender qualifications.",
  },
  digital: {
    numeralColor: "text-cyan-950/20",
    badgeBg: "bg-cyan-50 border-cyan-200/90",
    badgeText: "text-cyan-800",
    borderAccent: "border-l-cyan-600",
    pov: "High-performance web architecture and conversion marketing establish commercial authority and direct customer acquisition channels.",
  },
  it: {
    numeralColor: "text-slate-900/20",
    badgeBg: "bg-slate-100 border-slate-200",
    badgeText: "text-slate-800",
    borderAccent: "border-l-slate-700",
    pov: "Bespoke internal systems, ERP implementations, and resilient software infrastructure systematically automate manual enterprise bottlenecks.",
  },
};

export function ServiceCategorySection({
  category,
  services,
  index,
}: ServiceCategorySectionProps) {
  const visual = categoryVisuals[category.id] || categoryVisuals.funding;
  const sectionNumber = String(index + 1).padStart(2, "0");

  return (
    <section
      id={category.id}
      aria-labelledby={`heading-${category.id}`}
      className="scroll-mt-36 py-12 sm:py-16 border-b border-slate-200/80 last:border-b-0"
    >
      <Container width="wide" className="space-y-10 sm:space-y-12">
        {/* Category Header Row */}
        <div className="relative border-b border-slate-200 pb-8">
          {/* Big Editorial Watermark Numeral */}
          <span
            aria-hidden="true"
            className={cn(
              "hidden sm:block absolute right-0 top-0 font-serif text-7xl sm:text-8xl md:text-9xl font-bold select-none pointer-events-none -translate-y-4 sm:-translate-y-6 leading-none",
              visual.numeralColor
            )}
          >
            {sectionNumber}
          </span>

          <div className="max-w-2xl space-y-3 relative z-10">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border",
                  visual.badgeBg,
                  visual.badgeText
                )}
              >
                PRACTICE {sectionNumber} &bull; {category.id.toUpperCase()}
              </span>
              <span className="text-xs font-mono text-slate-600">
                {services.length} Specialized Programs
              </span>
            </div>

            <h2
              id={`heading-${category.id}`}
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              {category.name}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              {category.shortDescription}
            </p>

            {/* Strategic Point of View Callout */}
            <div
              className={cn(
                "mt-4 pl-4 border-l-2 py-1 text-xs sm:text-sm text-slate-700 font-sans italic bg-slate-50/50 rounded-r-lg pr-3",
                visual.borderAccent
              )}
            >
              &ldquo;{visual.pov}&rdquo;
            </div>
          </div>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, sIdx) => (
            <FadeIn key={service.id} direction="up" distance={16} delay={0.05 * sIdx}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
