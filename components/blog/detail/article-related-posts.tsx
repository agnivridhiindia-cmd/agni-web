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
 <section aria-labelledby="related-insights-heading" className="py-16 sm:py-20 border-t border-[#A6CCEA]">
 <Container width="wide">
 <div className="space-y-8 max-w-5xl mx-auto">
 <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
 <div className="space-y-2">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85  border border-amber-400/50 text-xs font-mono font-bold uppercase tracking-wider text-amber-900 shadow-xs">
 <BookOpen className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
 <span>Further Reading</span>
 </div>
 <h3 id="related-insights-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
 Complementary Advisory Guides
 </h3>
 </div>

 <Link
 href="/blog"
 className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
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
