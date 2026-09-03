import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { RecognitionSection } from "@/components/home/recognition-section";
import { FeaturedStories } from "@/components/home/featured-stories";
import { ServicesTeaser } from "@/components/home/services-teaser";
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
      {/* Primary Flagship Content Container */}
      <main id="main-content">
        {/* Phase 7: Flagship Homepage Hero */}
        <Hero />

        {/* Phase 8: Unified Stats & Credibility Bar */}
        <StatsBar />

        {/* Phase 9: Recognition & Social Proof Section */}
        <RecognitionSection />

        {/* Phase 10: Featured Success Stories Section */}
        <FeaturedStories />

        {/* Phase 11: Homepage Services Teaser Section */}
        <ServicesTeaser />

        {/* Phase 12: Homepage Final CTA & Conversion Section */}
        <FinalCta />
      </main>
    </div>
  );
}
