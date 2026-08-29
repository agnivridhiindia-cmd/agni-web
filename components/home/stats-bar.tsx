"use client";

import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import type { StatMetric } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/shared/motion";
import { FadeIn } from "@/components/shared/motion";

export function StatsBar() {
  // Extract and filter strictly verified statistics with valid values
  const verifiedStats = React.useMemo(() => {
    return Object.values(siteConfig.stats).filter(
      (stat): stat is StatMetric =>
        Boolean(stat.verified) &&
        (stat.value !== null || (stat.numericValue !== null && stat.numericValue !== undefined))
    );
  }, []);

  // Isolate featured primary metric from supporting metrics
  const featuredStat = verifiedStats.find((s) => s.featured) ?? verifiedStats[0];
  const supportingStats = verifiedStats.filter((s) => s.id !== featuredStat?.id);

  // If no verified statistics exist, hide the section entirely
  if (!featuredStat && supportingStats.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="stats-heading"
      className="relative bg-white border-y border-slate-200/80 py-10 sm:py-12 lg:py-14"
    >
      {/* Screen reader semantic heading */}
      <h2 id="stats-heading" className="sr-only">
        Institutional Credibility &amp; Verified Advisory Parameters
      </h2>

      <Container width="wide">
        <FadeIn direction="up" distance={16} delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* ============================================================
                PRIMARY FEATURED STATISTIC: Major Business & Sovereign Outcome
                ============================================================ */}
            {featuredStat && (
              <div className="lg:col-span-5 space-y-3 lg:pr-8">
                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <Eyebrow accent className="text-[10px] sm:text-[11px] tracking-wider text-slate-600">
                    CENTRAL SOVEREIGN GUARANTEE CEILING
                  </Eyebrow>
                </div>

                <div
                  className="flex items-baseline"
                  aria-label={`${featuredStat.prefix ?? ""}${featuredStat.value}${featuredStat.suffix ?? ""}: ${featuredStat.label}`}
                >
                  {featuredStat.prefix && (
                    <span className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-teal-700 font-bold mr-1">
                      {featuredStat.prefix}
                    </span>
                  )}
                  <span className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-950 tracking-tight leading-none">
                    {featuredStat.numericValue !== null && featuredStat.numericValue !== undefined ? (
                      <AnimatedCounter value={featuredStat.numericValue} duration={1.2} />
                    ) : (
                      featuredStat.value
                    )}
                  </span>
                  {featuredStat.suffix && (
                    <span className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] text-slate-700 font-semibold ml-1.5">
                      {featuredStat.suffix.trim()}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="type-h4 text-slate-900 font-sans font-semibold">
                    {featuredStat.label}
                  </h3>
                  <p className="type-body-sm text-slate-600 mt-1 leading-relaxed max-w-md">
                    {featuredStat.description}
                  </p>
                </div>
              </div>
            )}

            {/* ============================================================
                SUPPORTING VERIFIED METRICS (Hairline separated on desktop)
                ============================================================ */}
            <div className="lg:col-span-7 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200/80 lg:pl-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {supportingStats.map((stat, index) => (
                  <div
                    key={stat.id}
                    className={`space-y-1.5 ${
                      index > 0 ? "sm:border-l sm:border-slate-200/60 sm:pl-6" : ""
                    }`}
                  >
                    <div
                      className="flex items-baseline flex-wrap"
                      aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}: ${stat.label}`}
                    >
                      {stat.prefix && (
                        <span className="font-serif text-2xl sm:text-3xl text-teal-700 font-bold mr-0.5">
                          {stat.prefix}
                        </span>
                      )}
                      <span className="font-serif text-3xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
                        {stat.numericValue !== null && stat.numericValue !== undefined ? (
                          <AnimatedCounter value={stat.numericValue} duration={1.2} />
                        ) : (
                          stat.value
                        )}
                      </span>
                      {stat.suffix && (
                        <span className="text-base sm:text-lg font-sans font-medium text-slate-600 ml-1">
                          {stat.suffix.trim()}
                        </span>
                      )}
                    </div>

                    <h4 className="type-caption font-semibold text-slate-800 tracking-normal font-sans">
                      {stat.label}
                    </h4>

                    <p className="text-xs text-slate-500 leading-normal line-clamp-2">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
