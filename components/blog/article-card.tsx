import * as React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Bookmark, ShieldCheck, Landmark } from "lucide-react";
import type { BlogPostFrontmatter } from "@/types/blog-post";
import { cn } from "@/lib/utils";

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
      badgeClass: "bg-teal-50 text-teal-800 border-teal-200/80",
      icon: <Landmark className="w-3.5 h-3.5 text-teal-700 shrink-0" aria-hidden="true" />,
    };
  }
  if (normalized.includes("compliance")) {
    return {
      label: category,
      badgeClass: "bg-gold-50 text-gold-900 border-gold-200/80",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-gold-700 shrink-0" aria-hidden="true" />,
    };
  }
  return {
    label: category,
    badgeClass: "bg-slate-100 text-slate-800 border-slate-200/80",
    icon: <Bookmark className="w-3.5 h-3.5 text-slate-600 shrink-0" aria-hidden="true" />,
  };
}

export function ArticleCard({ post, featured = false, className }: ArticleCardProps) {
  const categoryBadge = getCategoryBadge(post.category);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border bg-white transition-all duration-300",
        featured
          ? "border-slate-300/80 shadow-md hover:shadow-xl hover:border-teal-400 p-6 sm:p-8 md:p-10"
          : "border-slate-200/90 shadow-xs hover:shadow-md hover:border-teal-300 p-6 sm:p-7",
        className
      )}
    >
      {/* Featured subtle gold accent line */}
      {featured && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-gold-500 via-teal-600 to-teal-500 rounded-t-2xl"
        />
      )}

      <div className="space-y-4 sm:space-y-5">
        {/* Metadata Header: Category Badge + Reading Time + Date */}
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

          <div className="flex items-center gap-3 text-xs text-slate-500 font-sans">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <span>{post.readingTime} min read</span>
            </span>
          </div>
        </div>

        {/* Title */}
        <h2
          className={cn(
            "font-serif font-semibold text-slate-900 tracking-tight leading-snug group-hover:text-teal-700 transition-colors",
            featured ? "text-2xl sm:text-3xl md:text-[2rem]" : "text-xl sm:text-2xl"
          )}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
          >
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p
          className={cn(
            "text-slate-600 font-sans leading-relaxed",
            featured ? "text-base sm:text-lg" : "text-sm sm:text-base line-clamp-3"
          )}
        >
          {post.excerpt}
        </p>
      </div>

      {/* Footer: Author & Read CTA */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-0.5 text-xs font-sans">
          <span className="font-semibold text-slate-800 block">
            By {post.author.name}
          </span>
          <span className="text-slate-500 block">
            {post.author.role}
          </span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 group-hover:text-teal-900 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded px-1 py-0.5"
          aria-label={`Read complete guide: ${post.title}`}
        >
          <span>Read Complete Guide</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
