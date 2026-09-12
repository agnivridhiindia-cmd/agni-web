import * as React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/about/about-hero";
import { CompanyStory } from "@/components/about/company-story";
import { MissionSection } from "@/components/about/mission-section";
import { FounderSection } from "@/components/about/founder-section";
import { CompanyTimeline } from "@/components/about/timeline";
import { CoreValues } from "@/components/about/core-values";
import { FounderTransition } from "@/components/about/founder-transition";

export const metadata: Metadata = createPageMetadata({
  title: "About Us | Company Story, Leadership & Institutional Timeline",
  description:
    "Explore the founding story, executive leadership, evolution timeline, and core principles of Agnivridhi India. An institutional advisory firm based in Noida.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen text-slate-100">
      {/* Narrative Architecture:
          About Hero -> Company Story -> Mission -> Founder Story -> Timeline -> Core Values -> Advisory CTA */}
      <AboutHero />

      {/* Luminous Brass/Cyan Transition */}
      <div className="hairline-rule-brass w-full" aria-hidden="true" />

      <CompanyStory />

      {/* Luminous Cyan Transition */}
      <div className="hairline-rule-cyan w-full" aria-hidden="true" />

      <MissionSection />

      {/* Luminous Multi-Tone Hairline Divider */}
      <div className="hairline-rule-multi w-full" aria-hidden="true" />

      <FounderSection />

      {/* Luminous Brass/Cyan Transition */}
      <div className="hairline-rule-brass w-full" aria-hidden="true" />

      <CompanyTimeline />

      {/* Luminous Cyan Transition */}
      <div className="hairline-rule-cyan w-full" aria-hidden="true" />

      <CoreValues />

      {/* Luminous Multi-Tone Hairline Divider */}
      <div className="hairline-rule-multi w-full" aria-hidden="true" />

      <FounderTransition />
    </div>
  );
}
