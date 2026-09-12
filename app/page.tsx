import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { AboutBrief } from "@/components/home/about-brief";
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
      {/* Flagship Homepage Hero - Top Dark Section Part 1 */}
      <Hero />

      {/* Editorial Statistics & Metric Stream - Top Dark Section Part 2 */}
      <StatsBar />

      {/* Luminous Multi-Tone Hairline Divider Transition to Light Canvas */}
      <div className="hairline-rule-multi w-full" aria-hidden="true" />

      {/* About Section - Opening of Middle Light Section */}
      <AboutBrief />

      {/* Luminous Brass Transition */}
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

      {/* Luminous Brass Transition */}
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
