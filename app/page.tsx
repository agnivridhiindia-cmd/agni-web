import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { ServicesTeaser } from "@/components/home/services-teaser";
import { RecognitionSection } from "@/components/home/recognition-section";
import { FeaturedStories } from "@/components/home/featured-stories";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = createPageMetadata({
  title: "Agnivridhi India | MSME & Startup Business Consulting",
  description: siteConfig.seo.defaultDescription,
  path: "/",
  isAbsoluteTitle: true,
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Flagship Homepage Hero */}
      <Hero />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />

      {/* Bconsult-style Core Advantages 4-Card Feature Grid */}
      <StatsBar />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />

      {/* Core Advisory Verticals */}
      <ServicesTeaser />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />

      {/* Phase 9: Recognition & Social Proof Section */}
      <RecognitionSection />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />

      {/* Phase 10: Featured Success Stories Section */}
      <FeaturedStories />

      {/* Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />

      {/* Phase 12: Homepage Final CTA & Conversion Section */}
      <FinalCta />
    </div>
  );
}
