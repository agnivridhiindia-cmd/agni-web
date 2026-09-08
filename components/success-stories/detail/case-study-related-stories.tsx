import * as React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { CaseStudyFrontmatter } from "@/types/case-study";
import { Container } from "@/components/shared/container";
import { StoryCard } from "@/components/success-stories/story-card";

interface CaseStudyRelatedStoriesProps {
  relatedStudies: readonly CaseStudyFrontmatter[];
}

export function CaseStudyRelatedStories({ relatedStudies }: CaseStudyRelatedStoriesProps) {
  if (relatedStudies.length === 0) return null;

  return (
    <section
      aria-labelledby="related-stories-heading"
      className="border-t border-cyan-100 bg-white py-14 sm:py-16 lg:py-20"
    >
      <Container width="wide">
        <div className="space-y-8 sm:space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0891B2]">
                <BookOpen className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
                <span>Verified Case Collection</span>
              </div>
              <h2
                id="related-stories-heading"
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight"
              >
                Complementary Enterprise Outcomes
              </h2>
              <p className="text-[#475569] text-sm font-sans">
                Explore how other Indian manufacturing and enterprise clients secured debt financing and statutory accreditation.
              </p>
            </div>

            <Link
              href="/success-stories"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0891B2] hover:text-[#0F0A1A] transition-colors"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {relatedStudies.map((study) => (
              <StoryCard key={study.slug} study={study} featured={false} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
