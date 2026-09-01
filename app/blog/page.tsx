import * as React from "react";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { createPageMetadata } from "@/lib/seo";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogListing } from "@/components/blog/blog-listing";

export const metadata: Metadata = createPageMetadata({
  title: "Insights & Advisory Knowledge Hub",
  description:
    "Explore authoritative regulatory breakdowns, scheme blueprints, and compliance roadmaps curated for Indian MSMEs, manufacturers, and startup founders.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        {/* Editorial Header */}
        <BlogHero totalArticles={posts.length} />

        {/* Client filter directory wrapped in Suspense for search params */}
        <React.Suspense
          fallback={
            <div className="py-20 text-center text-slate-500 text-sm">
              Loading knowledge hub...
            </div>
          }
        >
          <BlogListing initialPosts={posts} />
        </React.Suspense>
      </main>
    </div>
  );
}
