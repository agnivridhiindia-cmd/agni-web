import * as React from "react";
import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/mdx";
import { createPageMetadata } from "@/lib/seo";
import { SuccessStoriesHero } from "@/components/success-stories/success-stories-hero";
import { StoriesListing } from "@/components/success-stories/stories-listing";
import { SuccessStoriesCta } from "@/components/success-stories/success-stories-cta";

export const metadata: Metadata = createPageMetadata({
  title: "Success Stories & Case Studies",
  description:
    "Explore real-world engagement summaries demonstrating how Agnivridhi India assisted manufacturing, engineering, and agro-processing enterprises in securing CGTMSE collateral-free loans, ISO accreditations, and PMEGP subsidies.",
  path: "/success-stories",
});

export default async function SuccessStoriesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Hero Header */}
      <SuccessStoriesHero totalStories={caseStudies.length} />

      {/* Interactive Case Studies Directory with Category Filtering */}
      <React.Suspense
        fallback={
          <div className="py-20 text-center text-slate-500 text-sm font-sans">
            Loading verified case studies...
          </div>
        }
      >
        <StoriesListing initialStudies={caseStudies} />
      </React.Suspense>

      {/* Closing Conversion CTA */}
      <SuccessStoriesCta />
    </div>
  );
}
