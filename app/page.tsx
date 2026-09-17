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
      {/* 1. Flagship Homepage Hero */}
      <Hero />

      {/* Luminous Multi-Tone Hairline Divider Transition to Light Canvas */}
      <div className="hairline-rule-multi w-full" aria-hidden="true" />

      {/* 2. ABOUT AGNIVRIDHI INDIA • AT A GLANCE */}
      <AboutBrief />

      {/* Luminous Brass Transition */}
      <div className="hairline-rule-brass w-full" aria-hidden="true" />

      {/* 3. ABOUT AGNIVRIDHI • INSTITUTIONAL LEADERSHIP */}
      <InstitutionalNarrative />

      {/* Luminous Cyan Transition */}
      <div className="hairline-rule-cyan w-full" aria-hidden="true" />

      {/* 4. Our Services */}
      <ServicesTeaser />

      {/* Luminous Brass Transition */}
      <div className="hairline-rule-brass w-full" aria-hidden="true" />

      {/* 5. COMPLETE GROWTH ECOSYSTEM (The Agni Growth Engine) */}
      <AgniEngineMotif />

      {/* Luminous Cyan Transition */}
      <div className="hairline-rule-cyan w-full" aria-hidden="true" />

      {/* 6. OUR CORE ADVANTAGES • INSTITUTIONAL PARAMETERS */}
      <StatsBar />

      {/* Luminous Multi-Tone Hairline Divider */}
      <div className="hairline-rule-multi w-full" aria-hidden="true" />

      {/* 7. AWARDS & ACHIEVEMENTS • ACCREDITATIONS */}
      <RecognitionSection />

      {/* Luminous Brass Transition */}
      <div className="hairline-rule-brass w-full" aria-hidden="true" />

      {/* 8. PROVEN ENTERPRISE DELIVERABLES • EDITORIAL CASE ARCHIVE */}
      <FeaturedStories />

      {/* Luminous Multi-Tone Hairline Divider */}
      <div className="hairline-rule-multi w-full" aria-hidden="true" />

      {/* 9. Final CTA (Ready to Transform Your Business?) */}
      <FinalCta />
    </div>
  );
}
