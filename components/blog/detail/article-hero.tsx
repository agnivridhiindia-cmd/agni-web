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
      badgeClass: "bg-[#181A1A] text-[#2DD4BF] border-[#232727]",
      icon: <Landmark className="w-3.5 h-3.5 text-teal-700 shrink-0" aria-hidden="true" />,
    };
  }
  if (normalized.includes("compliance")) {
    return {
      label: category,
      badgeClass: "bg-[#181A1A] text-[#C79A4A] border-[#232727]",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-gold-700 shrink-0" aria-hidden="true" />,
    };
  }
  return {
    label: category,
    badgeClass: "bg-[#181A1A] text-[#D1CBC1] border-[#232727]",
    icon: <Bookmark className="w-3.5 h-3.5 text-[#D1CBC1] shrink-0" aria-hidden="true" />,
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
    <header className="border-b border-[#232727] bg-[#080909] py-12 sm:py-16 md:py-20">
      <Container width="reading">
        <div className="space-y-6">
          {/* Metadata pill row */}
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

            <div className="flex items-center gap-3 text-xs text-[#8E8B82] font-sans">
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

          {/* Fraunces Headline H1 */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F3EFE7] tracking-tight leading-[1.18]">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="type-body-lg text-[#D1CBC1] font-sans leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author attribution block */}
          <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Authored by
              </span>
              <span className="text-sm font-semibold text-[#F3EFE7] block font-sans">
                {post.author.name}
              </span>
              <span className="text-xs text-[#8E8B82] block font-sans">
                {post.author.role}
              </span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="hidden sm:flex flex-wrap items-center gap-1.5 justify-end max-w-xs">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-[#D1CBC1] bg-white border border-slate-200"
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
