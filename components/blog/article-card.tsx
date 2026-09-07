import * as React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Bookmark, ShieldCheck, Landmark, Sparkles, UserCheck } from "lucide-react";
import type { BlogPostFrontmatter } from "@/types/blog-post";
import { cn } from "@/lib/utils";
import { EditorialBanner } from "./editorial-banner";

interface ArticleCardProps {
  post: BlogPostFrontmatter;
  featured?: boolean;
  className?: string;
}

function getCategoryBadge(category: string) {
  const normalized = category.toLowerCase();
  if (normalized.includes("funding")) {
    return {
      label: category,
      badgeClass: "bg-purple-50 text-[#581C87] border-purple-100",
      icon: <Landmark className="w-3.5 h-3.5 text-teal-700 shrink-0" aria-hidden="true" />,
    };
  }
  if (normalized.includes("compliance")) {
    return {
      label: category,
      badgeClass: "bg-purple-50 text-[#581C87] border-purple-100",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-gold-700 shrink-0" aria-hidden="true" />,
    };
  }
  return {
    label: category,
    badgeClass: "bg-purple-50 text-[#475569] border-purple-100",
    icon: <Bookmark className="w-3.5 h-3.5 text-[#475569] shrink-0" aria-hidden="true" />,
  };
}

export function ArticleCard({ post, featured = false, className }: ArticleCardProps) {
  const categoryBadge = getCategoryBadge(post.category);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // 1. Featured Guide: High-Impact 2-Column Hero Layout
  if (featured) {
    return (
      <article
        className={cn(
          "group relative rounded-2xl border border-purple-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#581C87]/40 overflow-hidden",
          className
        )}
      >
        {/* Top gold-to-brass metallic accent strip */}
        <div
          aria-hidden="true"
          className="h-1.5 w-full bg-gradient-to-r from-[#C79A4A] via-[#DFC286] to-[#C79A4A]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Column 1: Bespoke Architectural Vector Banner (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <Link
              href={`/blog/${post.slug}`}
              className="block h-full group/banner focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#581C87]"
              aria-label={`Read featured guide: ${post.title}`}
            >
              <EditorialBanner
                slug={post.slug}
                category={post.category}
                title={post.title}
                variant="hero"
                className="h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]"
              />
            </Link>
          </div>

          {/* Column 2: Editorial Text Pane & Executive Metadata (5 cols on desktop) */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-white">
            <div className="space-y-4">
              {/* Category Pill & Release Stamp */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold border",
                    categoryBadge.badgeClass
                  )}
                >
                  {categoryBadge.icon}
                  <span>{categoryBadge.label}</span>
                </span>

                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#7C3AED] bg-[#581C87]/15 px-2 py-0.5 rounded border border-purple-200">
                  <Sparkles className="w-3 h-3 text-[#581C87]" />
                  Featured Guide
                </span>
              </div>

              {/* Publication Date & Reading Time */}
              <div className="flex items-center gap-3 text-xs text-[#64748B] font-sans">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#64748B]" aria-hidden="true" />
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                </span>
                <span className="text-[#5A5852]">•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#64748B]" aria-hidden="true" />
                  <span>{post.readingTime} min technical read</span>
                </span>
              </div>

              {/* Primary Fraunces Headline */}
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0F0A1A] tracking-tight leading-[1.25] group-hover:text-[#581C87] transition-colors">
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#581C87] rounded"
                >
                  {post.title}
                </Link>
              </h2>

              {/* Comprehensive Excerpt */}
              <p className="text-[#475569] font-sans text-sm sm:text-base leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Author Credential Block & Direct CTA */}
            <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 text-[#581C87] flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="space-y-0.5 text-xs font-sans">
                  <span className="font-semibold text-[#0F0A1A] block">
                    {post.author.name}
                  </span>
                  <span className="text-[#64748B] block text-[11px]">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#581C87] text-white font-bold text-xs sm:text-sm hover:bg-[#4C1D95] shadow-sm transition-all group/btn"
                aria-label={`Read complete authoritative guide: ${post.title}`}
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // 2. Regular Grid Cards: Anchored with Top Editorial Vector Banner
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-purple-100 bg-white shadow-lg hover:shadow-2xl hover:border-[#581C87]/40 transition-all duration-300 overflow-hidden",
        className
      )}
    >
      {/* Top Editorial Banner Illustration */}
      <Link
        href={`/blog/${post.slug}`}
        className="block relative overflow-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#581C87]"
        aria-label={`Read guide: ${post.title}`}
      >
        <EditorialBanner
          slug={post.slug}
          category={post.category}
          title={post.title}
          variant="card"
        />
      </Link>

      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-3.5">
          {/* Metadata Header: Category Badge + Reading Time + Date */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold border",
                categoryBadge.badgeClass
              )}
            >
              {categoryBadge.icon}
              <span>{categoryBadge.label}</span>
            </span>

            <div className="flex items-center gap-2.5 text-xs text-[#64748B] font-sans">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#64748B]" aria-hidden="true" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </span>
              <span className="text-[#5A5852]">•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#64748B]" aria-hidden="true" />
                <span>{post.readingTime} min</span>
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-serif font-semibold text-xl text-[#0F0A1A] tracking-tight leading-snug group-hover:text-[#581C87] transition-colors line-clamp-2">
            <Link
              href={`/blog/${post.slug}`}
              className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#581C87] rounded"
            >
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-[#475569] font-sans text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & Read CTA */}
        <div className="pt-4 border-t border-purple-100 flex items-center justify-between gap-2">
          <div className="space-y-0.5 text-xs font-sans">
            <span className="font-semibold text-[#0F0A1A] block">
              {post.author.name}
            </span>
            <span className="text-[#64748B] text-[11px] block">
              {post.author.role}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#581C87] group-hover:text-[#7C3AED] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#581C87] rounded px-1 py-0.5"
            aria-label={`Read complete guide: ${post.title}`}
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
