import * as React from "react";
import { Calendar, Clock, Landmark, ShieldCheck, Bookmark } from "lucide-react";
import type { BlogPostFrontmatter } from "@/types/blog-post";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

interface ArticleHeroProps {
  post: BlogPostFrontmatter;
}

function getCategoryBadge(category: string) {
  const normalized = category.toLowerCase();
  if (normalized.includes("funding")) {
    return {
      label: category,
      badgeClass: "bg-amber-950/80 text-amber-300 border-amber-500/40",
      icon: <Landmark className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />,
    };
  }
  if (normalized.includes("compliance")) {
    return {
      label: category,
      badgeClass: "bg-amber-950/80 text-amber-300 border-amber-500/40",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />,
    };
  }
  return {
    label: category,
    badgeClass: "bg-slate-900/80 text-slate-300 border-slate-700/60",
    icon: <Bookmark className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />,
  };
}

export function ArticleHero({ post }: ArticleHeroProps) {
  const categoryBadge = getCategoryBadge(post.category);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="border-b border-slate-800 bg-gradient-to-b from-[#0B1329] via-[#0F1A34] to-[#0B1329] py-12 sm:py-16 md:py-20 text-white relative overflow-hidden">
      <Container width="reading">
        <div className="space-y-6">
          {/* Metadata pill row */}
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

            <div className="flex items-center gap-3 text-xs text-slate-400 font-sans">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                <span>{post.readingTime} min read</span>
              </span>
            </div>
          </div>

          {/* Headline H1 */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.18]">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author attribution block */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Authored by
              </span>
              <span className="text-sm font-semibold text-white block font-sans">
                {post.author.name}
              </span>
              <span className="text-xs text-slate-400 block font-sans">
                {post.author.role}
              </span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="hidden sm:flex flex-wrap items-center gap-1.5 justify-end max-w-xs">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
