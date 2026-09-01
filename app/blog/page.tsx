import * as React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllPosts } from "@/lib/mdx";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogListing } from "@/components/blog/blog-listing";

export const metadata: Metadata = {
  title: "Insights & Regulatory Guides | Agnivridhi India",
  description:
    "Practical knowledge, sovereign scheme breakdowns, and statutory compliance guides covering CGTMSE, PMEGP, MUDRA, and ISO certifications for Indian MSMEs.",
  alternates: {
    canonical: "https://agnivridhi.com/blog",
  },
  openGraph: {
    title: "Insights & Regulatory Guides | Agnivridhi India",
    description:
      "Practical knowledge, sovereign scheme breakdowns, and statutory compliance guides covering CGTMSE, PMEGP, MUDRA, and ISO certifications for Indian MSMEs.",
    url: "https://agnivridhi.com/blog",
    siteName: "Agnivridhi India",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Editorial Knowledge Desk Hero */}
      <BlogHero totalArticles={posts.length} />

      {/* 2. Interactive Category Filter & Articles Collection */}
      <main id="main-content">
        <Suspense
          fallback={
            <div className="py-20 text-center text-slate-500 text-sm">
              Loading knowledge hub...
            </div>
          }
        >
          <BlogListing initialPosts={posts} />
        </Suspense>
      </main>
    </div>
  );
}
