"use client";

import * as React from "react";
import {
  Award,
  Newspaper,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Bookmark,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { RecognitionItem, RecognitionType } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";

function getRecognitionIcon(type: RecognitionType) {
  switch (type) {
    case "award":
      return <Award className="w-4 h-4 text-gold-600" />;
    case "press":
    case "media":
      return <Newspaper className="w-4 h-4 text-teal-600" />;
    case "magazine":
      return <Bookmark className="w-4 h-4 text-slate-600" />;
    case "recognition":
    default:
      return <ShieldCheck className="w-4 h-4 text-teal-700" />;
  }
}

function getBadgeVariant(type: RecognitionType): "accent" | "primary" | "outline" | "default" {
  switch (type) {
    case "award":
      return "accent";
    case "press":
    case "media":
      return "primary";
    case "recognition":
      return "outline";
    default:
      return "default";
  }
}

export function RecognitionSection() {
  // Gated: strictly filter out unverified items
  const verifiedItems = React.useMemo(() => {
    return (siteConfig.recognition ?? []).filter((item): item is RecognitionItem => item.verified !== false);
  }, []);

  // Hide section entirely if no verified items exist
  if (verifiedItems.length === 0) {
    return null;
  }

  // Isolate featured item from supporting items
  const featuredItem = verifiedItems.find((item) => item.featured) ?? verifiedItems[0];
  const supportingItems = verifiedItems.filter((item) => item.id !== featuredItem?.id);

  return (
    <section
      aria-labelledby="recognition-heading"
      className="relative bg-slate-50/70 bg-noise py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <Container width="wide" className="space-y-12">
        {/* Section Heading with Fraunces display serif */}
        <FadeIn direction="up" distance={16} delay={0.05}>
          <SectionHeading
            id="recognition-heading"
            eyebrow="ACCREDITATION &amp; INDUSTRY RECOGNITION"
            eyebrowAccent
            title="Recognized for Catalyzing Enterprise Growth"
            description="External citations, industry conclave recognitions, and sector publications honoring our institutional advisory rigor across funding, compliance, and enterprise modernization."
            align="left"
            className="max-w-3xl"
          />
        </FadeIn>

        {/* Editorial Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ============================================================
              LEFT COLUMN: Featured Primary Recognition Citation
              ============================================================ */}
          {featuredItem && (
            <div className="lg:col-span-5">
              <FadeIn direction="up" distance={20} delay={0.12} className="h-full">
                <Card
                  variant="featured"
                  className="h-full flex flex-col justify-between p-6 sm:p-8 bg-white border-slate-200 shadow-elevated"
                >
                  <div className="space-y-6">
                    {/* Top Metadata Row */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {getRecognitionIcon(featuredItem.type)}
                        <Badge variant={getBadgeVariant(featuredItem.type)} className="capitalize text-xs">
                          {featuredItem.type}
                        </Badge>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                        {featuredItem.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold tracking-wider text-teal-800 uppercase block font-sans">
                        {featuredItem.publicationOrOrg}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 leading-snug">
                        {featuredItem.title}
                      </h3>
                      <p className="type-body-sm text-slate-600 leading-relaxed pt-1">
                        {featuredItem.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      Verified Institutional Citation
                    </span>

                    {featuredItem.url ? (
                      <a
                        href={featuredItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-900 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
                        aria-label={`Read coverage: ${featuredItem.title} (opens in a new tab)`}
                      >
                        <span>Read Coverage</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-400 font-sans">
                        Official Industry Registry
                      </span>
                    )}
                  </div>
                </Card>
              </FadeIn>
            </div>
          )}

          {/* ============================================================
              RIGHT COLUMN: Supporting Recognition Stream
              ============================================================ */}
          <div className="lg:col-span-7">
            <StaggerContainer className="space-y-4">
              {supportingItems.map((item) => (
                <StaggerItem key={item.id}>
                  <Card
                    variant="interactive"
                    className="p-5 sm:p-6 bg-white border-slate-200 shadow-card hover:border-teal-400/60 hover:shadow-elevated transition-all duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        {/* Meta Header */}
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <Badge variant={getBadgeVariant(item.type)} className="capitalize text-[11px] py-0.5">
                            {item.type}
                          </Badge>
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-sans">
                            {item.publicationOrOrg}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs font-mono text-slate-500">
                            {item.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Action Link (if verified URL exists) */}
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center gap-1 text-xs text-teal-700 hover:text-teal-900 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded p-1"
                          aria-label={`View article: ${item.title} (opens in a new tab)`}
                        >
                          <span className="hidden sm:inline">View</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
