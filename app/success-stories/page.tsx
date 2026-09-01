import * as React from "react";
import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/mdx";
import { SuccessStoriesHero } from "@/components/success-stories/success-stories-hero";
import { StoriesListing } from "@/components/success-stories/stories-listing";
import { SuccessStoriesCta } from "@/components/success-stories/success-stories-cta";

export const metadata: Metadata = {
  title: "Success Stories & Case Studies | Agnivridhi India",
  description:
    "Explore real-world engagement summaries demonstrating how Agnivridhi India assisted manufacturing, engineering, and agro-processing enterprises in securing CGTMSE collateral-free loans, ISO accreditations, and PMEGP subsidies.",
  openGraph: {
    title: "Success Stories & Case Studies | Agnivridhi India",
    description:
      "Explore real-world engagement summaries demonstrating how Agnivridhi India assisted manufacturing, engineering, and agro-processing enterprises in securing CGTMSE collateral-free loans, ISO accreditations, and PMEGP subsidies.",
    url: "https://agnivridhi.com/success-stories",
    type: "website",
  },
  alternates: {
    canonical: "https://agnivridhi.com/success-stories",
  },
};

export default async function SuccessStoriesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">
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
      </main>
    </div>
  );
}
