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
    <div className="min-h-screen bg-white">
      <main id="main-content">
        {/* Phase 13 & 14 Narrative Architecture:
            About Hero -> Company Story -> Mission -> Founder Story -> Timeline -> Core Values -> Advisory CTA */}
        <AboutHero />
        <CompanyStory />
        <MissionSection />
        <FounderSection />
        <CompanyTimeline />
        <CoreValues />
        <FounderTransition />
      </main>
    </div>
  );
}
