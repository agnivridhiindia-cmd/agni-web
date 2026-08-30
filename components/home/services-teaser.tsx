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
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { CtaArrow } from "@/components/ui/cta-arrow";
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

export function ServicesTeaser() {
  const categories = getServiceCategories();
  const fundingCategory = categories.find((cat) => cat.id === "funding") ?? categories[0];
  const supportingCategories = categories.filter((cat) => cat.id !== "funding");

  const fundingServices = getServicesByCategory("funding");

  const FundingIcon = iconMap[fundingCategory.icon] || Landmark;

  return (
    <section
      aria-labelledby="services-teaser-heading"
      className="relative bg-slate-50/70 bg-noise py-16 sm:py-20 lg:py-28 border-b border-slate-200/80"
    >
      <Container width="wide" className="space-y-12 sm:space-y-16">
        {/* Section Header with Action Link */}
        <FadeIn direction="up" distance={16} delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              id="services-teaser-heading"
              eyebrow="CORE ADVISORY VERTICALS"
              eyebrowAccent
              title="Four Specialized Desks. One Growth Engine."
              description="From institutional debt syndication and statutory certifications to custom enterprise software, our multi-disciplinary desks eliminate friction at every stage of scale."
              align="left"
              className="max-w-2xl"
            />

            <div className="shrink-0">
              <LinkButton
                href="/services"
                variant="outline"
                className="group inline-flex items-center gap-2 hover:border-teal-400"
                aria-label="Explore all 24 services across all practices"
              >
                <span>Explore All 24 Services</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-600 transition-transform duration-200 group-hover:translate-x-1" />
              </LinkButton>
            </div>
          </div>
        </FadeIn>

        {/* Editorial Asymmetric Grid: 5 cols (Featured Funding) + 7 cols (3 Supporting Desks) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ============================================================
              LEFT COLUMN: Featured Primary Practice (Funding)
              ============================================================ */}
          <div className="lg:col-span-5">
            <FadeIn direction="up" distance={20} delay={0.1} className="h-full">
              <Link
                href={categoryAnchors.funding}
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-2xl"
                aria-label={`Explore ${fundingCategory.name} practice`}
              >
                <Card
                  variant="featured"
                  className="h-full flex flex-col justify-between p-6 sm:p-8 lg:p-9 bg-white border-slate-200 shadow-elevated transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-teal-400/80"
                >
                  <div className="space-y-6">
                    {/* Top Row: Category Meta */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200/60 group-hover:scale-105 transition-transform">
                          <FundingIcon className="w-5 h-5" />
                        </div>
                        <Badge variant="primary" className="text-xs font-semibold">
                          Flagship Practice
                        </Badge>
                      </div>

                      <span className="text-xs font-mono font-bold text-slate-400">
                        {categoryNumbers.funding}
                      </span>
                    </div>

                    {/* Headline & Description */}
                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 leading-snug group-hover:text-teal-800 transition-colors">
                        {fundingCategory.name}
                      </h3>
                      <p className="type-body-sm text-slate-600 leading-relaxed">
                        {fundingCategory.shortDescription}
                      </p>
                    </div>

                    {/* Institutional Loan Ceiling Highlight */}
                    <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-200/60 space-y-1">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-teal-800 block leading-none">
                        Up to ₹5 Crore
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block font-sans pt-1">
                        Collateral-Free Sovereign Credit
                      </span>
                      <span className="text-xs text-slate-500 block font-sans">
                        Under CGTMSE &amp; PMEGP Central Guarantee Windows
                      </span>
                    </div>

                    {/* Representative Schemes */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block font-sans">
                        Core Capital Programs
                      </span>
                      <ul className="space-y-2">
                        {fundingServices.slice(0, 4).map((service) => (
                          <li
                            key={service.id}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-sans"
                          >
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                            <span className="font-medium text-slate-800">{service.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Indicator */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-teal-700 group-hover:text-teal-900 transition-colors">
                    <span>Explore Funding Programs</span>
                    <CtaArrow className="w-4 h-4 text-teal-600 group-hover:text-teal-800" />
                  </div>
                </Card>
              </Link>
            </FadeIn>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Supporting Advisory Desks (Compliance, Digital, IT)
              ============================================================ */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {supportingCategories.map((category, index) => {
              const Icon = iconMap[category.icon] || ShieldCheck;
              const services = getServicesByCategory(category.id);
              const anchor = categoryAnchors[category.id];
              const number = categoryNumbers[category.id];

              const badgeVariant =
                category.id === "compliance"
                  ? ("accent" as const)
                  : category.id === "digital"
                  ? ("default" as const)
                  : ("outline" as const);

              return (
                <FadeIn
                  key={category.id}
                  direction="up"
                  distance={16}
                  delay={0.15 + index * 0.08}
                  className="flex-1"
                >
                  <Link
                    href={anchor}
                    className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-2xl"
                    aria-label={`Explore ${category.name} practice`}
                  >
                    <Card
                      variant="interactive"
                      className="h-full p-6 sm:p-7 bg-white border-slate-200 shadow-card hover:border-teal-400/70 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        {/* Meta Header */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <Badge variant={badgeVariant} className="text-xs capitalize font-medium">
                              {category.id === "it" ? "IT Systems" : category.id}
                            </Badge>
                          </div>

                          <span className="text-xs font-mono font-bold text-slate-400">
                            {number}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-1.5">
                          <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug group-hover:text-teal-800 transition-colors">
                            {category.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                            {category.shortDescription}
                          </p>
                        </div>

                        {/* Representative Service Pills */}
                        <div className="flex items-center gap-2 flex-wrap pt-1">
                          {services.slice(0, 4).map((service) => (
                            <span
                              key={service.id}
                              className="text-[11px] font-sans font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-teal-50 group-hover:text-teal-800 transition-colors"
                            >
                              {service.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Row */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-teal-800 transition-colors">
                        <span>Explore Practice Desks</span>
                        <CtaArrow className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700" />
                      </div>
                    </Card>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
