import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { CompanyStory } from "@/components/about/company-story";
import { MissionSection } from "@/components/about/mission-section";
import { CoreValues } from "@/components/about/core-values";
import { FounderTransition } from "@/components/about/founder-transition";

export const metadata: Metadata = {
  title: "About Us | Company Story & Institutional Advisory Charter",
  description:
    "Discover the story, mission, and guiding values of Agnivridhi India. A strategic advisory firm based in Noida helping Indian MSMEs secure sovereign debt, capital subsidies, and statutory quality accreditations.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">
        {/* Phase 13: About Page Foundation & Story */}
        <AboutHero />
        <CompanyStory />
        <MissionSection />
        <CoreValues />
        <FounderTransition />
      </main>
    </div>
  );
}
