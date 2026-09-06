import * as React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { BlogPostFrontmatter } from "@/types/blog-post";
import { ArticleCard } from "@/components/blog/article-card";
import { Container } from "@/components/shared/container";

interface ArticleRelatedPostsProps {
  relatedPosts: readonly BlogPostFrontmatter[];
}

export function ArticleRelatedPosts({ relatedPosts }: ArticleRelatedPostsProps) {
  if (relatedPosts.length === 0) return null;

  return (
    <section aria-labelledby="related-insights-heading" className="py-16 sm:py-20 border-t border-[#232727] bg-[#080909]">
      <Container width="wide">
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C79A4A]" aria-hidden="true" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C79A4A]">
                  Further Reading
                </span>
              </div>
              <h3 id="related-insights-heading" className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3EFE7]">
                Complementary Advisory Guides
              </h3>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C79A4A] hover:text-[#DFC286] transition-colors"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {relatedPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} featured={false} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
