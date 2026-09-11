import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";
import { HeroHorizontalFlow } from "@/components/home/hero-horizontal-flow";
import { StatsBar } from "@/components/home/stats-bar";

import { ServicesTeaser } from "@/components/home/services-teaser";
import { AgniEngineMotif } from "@/components/home/agni-engine-motif";
import { FeaturedStories } from "@/components/home/featured-stories";
import { RecognitionSection } from "@/components/home/recognition-section";
import { InstitutionalNarrative } from "@/components/home/institutional-narrative";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = createPageMetadata({
  title: "Agnivridhi India | MSME & Startup Business Consulting",
  description: siteConfig.seo.defaultDescription,
  path: "/",
  isAbsoluteTitle: true,
});

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-100">
      {/* Flagship Homepage Hero with Desktop Horizontal Slide to About Section */}
      <HeroHorizontalFlow />

      {/* Luminous Multi-Tone Hairline Divider */}
      <div className="hairline-rule-multi w-full" aria-hidden="true" />

      {/* Editorial Statistics & Metric Stream */}
      <StatsBar />

      {/* Luminous Brass/Cyan Transition */}
      <div className="hairline-rule-brass w-full" aria-hidden="true" />

      {/* Core Advisory Verticals */}
      <ServicesTeaser />

      {/* Luminous Cyan Transition */}
      <div className="hairline-rule-cyan w-full" aria-hidden="true" />

      {/* Proprietary Architecture: The Agni Growth Engine */}
      <AgniEngineMotif />

      {/* Luminous Multi-Tone Hairline Divider */}
      <div className="hairline-rule-multi w-full" aria-hidden="true" />

      {/* Featured Success Stories Section (Magazine Spreads) */}
      <FeaturedStories />

      {/* Luminous Brass/Cyan Transition */}
      <div className="hairline-rule-brass w-full" aria-hidden="true" />

      {/* Recognition & Social Proof Section */}
      <RecognitionSection />

      {/* Luminous Cyan Transition */}
      <div className="hairline-rule-cyan w-full" aria-hidden="true" />

      {/* Institutional Leadership & Philosophy Narrative */}
      <InstitutionalNarrative />

      {/* Luminous Multi-Tone Hairline Divider */}
      <div className="hairline-rule-multi w-full" aria-hidden="true" />

      {/* Homepage Final CTA & Conversion Section */}
      <FinalCta />
    </div>
  );
}
