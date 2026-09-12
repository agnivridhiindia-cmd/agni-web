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
      badgeClass: "bg-amber-100 text-amber-900 border-amber-300/80",
      icon: <Landmark className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />,
    };
  }
  if (normalized.includes("compliance")) {
    return {
      label: category,
      badgeClass: "bg-amber-100 text-amber-900 border-amber-300/80",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />,
    };
  }
  return {
    label: category,
    badgeClass: "bg-slate-100 text-slate-800 border-slate-200",
    icon: <Bookmark className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />,
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
          "group relative rounded-3xl border border-white/90 bg-white/85 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl hover:border-amber-400/60 hover:shadow-[0_24px_50px_rgba(14,165,233,0.18)] transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden [transform:translateZ(0)]",
          className
        )}
      >
        {/* Top gold metallic accent strip */}
        <div
          aria-hidden="true"
          className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Column 1: Bespoke Architectural Vector Banner (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <Link
              href={`/blog/${post.slug}`}
              className="block h-full group/banner focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500"
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
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-white/90">
            <div className="space-y-4">
              {/* Category Pill & Release Stamp */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold border",
                    categoryBadge.badgeClass
                  )}
                >
                  {categoryBadge.icon}
                  <span>{categoryBadge.label}</span>
                </span>

                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-300/80">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  Featured Guide
                </span>
              </div>

              {/* Publication Date & Reading Time */}
              <div className="flex items-center gap-3 text-xs text-slate-500 font-sans">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                </span>
                <span className="text-slate-400">&bull;</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                  <span>{post.readingTime} min technical read</span>
                </span>
              </div>

              {/* Primary Headline */}
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-[1.25] group-hover:text-amber-700 transition-colors">
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                >
                  {post.title}
                </Link>
              </h2>

              {/* Comprehensive Excerpt */}
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Author Credential Block & Direct CTA */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-amber-600 flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="space-y-0.5 text-xs font-sans">
                  <span className="font-semibold text-slate-900 block">
                    {post.author.name}
                  </span>
                  <span className="text-slate-500 block text-[11px]">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(245,158,11,0.25)] hover:from-amber-300 hover:to-amber-500 transition-all group/btn"
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
        "group relative flex flex-col justify-between rounded-3xl border border-white/90 bg-white/85 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl hover:border-amber-400/60 hover:shadow-[0_24px_50px_rgba(14,165,233,0.18)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden [transform:translateZ(0)]",
        className
      )}
    >
      {/* Top Editorial Banner Illustration */}
      <Link
        href={`/blog/${post.slug}`}
        className="block relative overflow-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500"
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
                "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold border",
                categoryBadge.badgeClass
              )}
            >
              {categoryBadge.icon}
              <span>{categoryBadge.label}</span>
            </span>

            <div className="flex items-center gap-2.5 text-xs text-slate-500 font-sans">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </span>
              <span className="text-slate-400">&bull;</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <span>{post.readingTime} min</span>
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-serif font-bold text-xl text-slate-900 tracking-tight leading-snug group-hover:text-amber-700 transition-colors line-clamp-2">
            <Link
              href={`/blog/${post.slug}`}
              className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-slate-600 font-sans text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & Read CTA */}
        <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
          <div className="space-y-0.5 text-xs font-sans">
            <span className="font-semibold text-slate-900 block">
              {post.author.name}
            </span>
            <span className="text-slate-500 text-[11px] block">
              {post.author.role}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1 py-0.5"
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
