import * as React from "react";
import { BookOpen } from "lucide-react";
import { Container } from "@/components/shared/container";

interface BlogHeroProps {
  totalArticles: number;
}

export function BlogHero({ totalArticles }: BlogHeroProps) {
  return (
    <section
      aria-labelledby="blog-hero-heading"
      className="relative border-b border-slate-200/80 bg-slate-50/70 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
    >
      <Container width="wide">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow & Credibility Badge */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border bg-teal-50 border-teal-200/90 text-teal-900">
              INSIGHTS &bull; REGULATORY &amp; SCHEME GUIDES
            </span>

            {totalArticles > 0 && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-sans text-slate-700 bg-white border border-slate-200 shadow-xs">
                <BookOpen className="w-3.5 h-3.5 text-teal-700 shrink-0" aria-hidden="true" />
                <span>{totalArticles} Curated Advisory Guides</span>
              </span>
            )}
          </div>

          {/* Editorial Fraunces Headline */}
          <h1
            id="blog-hero-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.15]"
          >
            Practical knowledge for businesses ready to move forward.
          </h1>

          {/* Subtitle */}
          <p className="type-body-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
            In-depth analysis, scheme walkthroughs, and statutory compliance roadmaps authored by
            our senior debt syndication and regulatory principals to help Indian MSMEs scale with clarity.
          </p>
        </div>
      </Container>
    </section>
  );
}
