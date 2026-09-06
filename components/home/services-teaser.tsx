import * as React from "react";
import Link from "next/link";
import {
  Landmark,
  ShieldCheck,
  Globe,
  Cpu,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { getServiceCategories, getServicesByCategory } from "@/data/services";
import type { ServiceCategory } from "@/types/service";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn } from "@/components/shared/motion";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  ShieldCheck,
  Globe,
  Cpu,
};

const categoryNumbers: Record<ServiceCategory, string> = {
  funding: "01",
  compliance: "02",
  digital: "03",
  it: "04",
};

const categoryAnchors: Record<ServiceCategory, string> = {
  funding: "/services#funding",
  compliance: "/services#compliance",
  digital: "/services#digital",
  it: "/services#it",
};

const categoryLabels: Record<ServiceCategory, string> = {
  funding: "Explore Funding Desk",
  compliance: "Explore Compliance Desk",
  digital: "Explore Digital Desk",
  it: "Explore IT Desk",
};

export function ServicesTeaser() {
  const categories = getServiceCategories();

  return (
    <section
      aria-labelledby="services-teaser-heading"
      className="relative bg-slate-50/70 py-16 sm:py-20 lg:py-28 border-b border-slate-200/80"
    >
      <Container width="wide" className="space-y-12 sm:space-y-16">
        {/* Section Header with Action Link (Bconsult Style) */}
        <FadeIn direction="up" distance={16} delay={0.04}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <Eyebrow
                  accent={false}
                  className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-sans text-teal-800"
                >
                  CORE ADVISORY VERTICALS &bull; 4 DEDICATED DESKS
                </Eyebrow>
              </div>

              <h2
                id="services-teaser-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 !leading-[1.18]"
              >
                Four Specialized Desks. One Growth Engine.
              </h2>

              <p className="type-body text-slate-600 leading-relaxed">
                From institutional debt syndication and statutory certifications to
                custom enterprise software, our multi-disciplinary desks eliminate
                friction at every stage of scale.
              </p>
            </div>

            <div className="shrink-0">
              <LinkButton
                href="/services"
                variant="outline"
                className="rounded-full h-11 px-5 border-slate-200 bg-white hover:border-teal-500 hover:text-teal-700 text-slate-800 group inline-flex items-center gap-2 shadow-xs transition-all"
                aria-label="Explore all 24 services across all practices"
              >
                <span>Explore All 24 Services</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-600 transition-transform duration-200 group-hover:translate-x-1" />
              </LinkButton>
            </div>
          </div>
        </FadeIn>

        {/* ============================================================
            BCONSULT 4-CARD FEATURE ICON GRID (Equal-height cards)
            ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Landmark;
            const stepNumber = categoryNumbers[cat.id] || `0${idx + 1}`;
            const services = getServicesByCategory(cat.id).slice(0, 3);
            const anchor = categoryAnchors[cat.id] || "/services";
            const ctaText = categoryLabels[cat.id] || "Explore Practice";

            return (
              <div key={cat.id} className="h-full">
                <div className="group relative h-full flex flex-col justify-between rounded-3xl bg-gradient-to-b from-white via-white to-slate-50/70 hover:to-teal-50/20 p-6 sm:p-7 border border-slate-200/90 hover:border-teal-500/30 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Top Row: Icon Container + Step Number */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-200/60 flex items-center justify-center shadow-xs group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100/80 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors uppercase tracking-wider">
                        DESK {stepNumber}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-slate-950 leading-snug group-hover:text-teal-800 transition-colors pt-1">
                      {cat.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                      {cat.shortDescription}
                    </p>

                    {/* Bullet List of Top Services */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-start gap-2 text-xs text-slate-700 font-sans leading-tight"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Single CTA Link per Card (Bconsult Style) */}
                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <Link
                      href={anchor}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-teal-700 group-hover:text-teal-900 group/link transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded py-1"
                      aria-label={`Explore ${cat.name} advisory desk`}
                    >
                      <span>{ctaText}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 group-hover/link:bg-teal-600 group-hover/link:text-white flex items-center justify-center transition-all">
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
