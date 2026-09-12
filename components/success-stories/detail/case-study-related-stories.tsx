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
      className="border-t border-[#A6CCEA] py-14 sm:py-16 lg:py-20"
    >
      <Container width="wide">
        <div className="space-y-8 sm:space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-amber-400/50 text-xs font-mono tracking-widest text-amber-900 uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>VERIFIED CASE COLLECTION</span>
              </div>
              <h2
                id="related-stories-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
              >
                Complementary Enterprise Outcomes
              </h2>
              <p className="text-slate-700 text-sm sm:text-base font-sans">
                Explore how other Indian manufacturing and enterprise clients secured debt financing and statutory accreditation.
              </p>
            </div>

            <Link
              href="/success-stories"
              className="inline-flex items-center gap-1.5 text-sm font-mono font-semibold text-amber-700 hover:text-amber-800 transition-colors"
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
