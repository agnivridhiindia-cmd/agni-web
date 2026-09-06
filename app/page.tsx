import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { BrandStatement } from "@/components/home/brand-statement";
import { ServicesTeaser } from "@/components/home/services-teaser";
import { AgniEngineMotif } from "@/components/home/agni-engine-motif";
import { SyndicationPipeline } from "@/components/home/syndication-pipeline";
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
    <div className="min-h-screen bg-[#080909] text-[#F3EFE7]">
      {/* Flagship Homepage Hero */}
      <Hero />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* Editorial Statistics & Metric Stream */}
      <StatsBar />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* Large Brand Philosophy & Thesis */}
      <BrandStatement />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* Core Advisory Verticals */}
      <ServicesTeaser />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* Proprietary Architecture: The Agni Growth Engine */}
      <AgniEngineMotif />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* Interactive Syndication Pipeline & Milestone Scrubber */}
      <SyndicationPipeline />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* Featured Success Stories Section (Magazine Spreads) */}
      <FeaturedStories />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* Recognition & Social Proof Section */}
      <RecognitionSection />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* Institutional Leadership & Philosophy Narrative */}
      <InstitutionalNarrative />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* Homepage Final CTA & Conversion Section */}
      <FinalCta />
    </div>
  );
}
