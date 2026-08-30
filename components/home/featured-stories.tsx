import * as React from "react";
import { ArrowRight } from "lucide-react";
import { getFeaturedCaseStudies } from "@/lib/mdx";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { LinkButton } from "@/components/ui/link-button";
import { StoryCard } from "@/components/success-stories/story-card";

export async function FeaturedStories() {
  const stories = await getFeaturedCaseStudies(3);

  if (!stories || stories.length === 0) {
    return null;
  }

  const featuredStory = stories.find((study) => study.featured) ?? stories[0];
  const supportingStories = stories.filter((study) => study.slug !== featuredStory.slug);

  return (
    <section
      aria-labelledby="featured-stories-heading"
      className="relative bg-white py-16 sm:py-20 lg:py-28 border-b border-slate-200/80"
    >
      <Container width="wide" className="space-y-12 sm:space-y-14">
        {/* Section Header with 'View All Stories' Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            id="featured-stories-heading"
            eyebrow="PROVEN ENTERPRISE DELIVERABLES"
            eyebrowAccent
            title="Real Businesses. Real Structural Momentum."
            description="Measurable capital sanctions, accredited quality standards, and statutory subsidy realizations executed for North Indian manufacturing and engineering enterprises."
            align="left"
            className="max-w-2xl"
          />

          <div className="shrink-0">
            <LinkButton
              href="/success-stories"
              variant="outline"
              className="group inline-flex items-center gap-2 hover:border-teal-400"
              aria-label="View all enterprise success stories"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-teal-600 transition-transform duration-200 group-hover:translate-x-1" />
            </LinkButton>
          </div>
        </div>

        {/* Editorial Asymmetric Grid: 1 Featured (7 cols) + 2 Supporting (5 cols stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Primary Featured Story */}
          {featuredStory && (
            <div className="lg:col-span-7">
              <StoryCard study={featuredStory} featured={true} />
            </div>
          )}

          {/* Supporting Stories Stream */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {supportingStories.map((study) => (
              <div key={study.slug} className="flex-1">
                <StoryCard study={study} featured={false} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
