import * as React from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";

interface ArticleBreadcrumbProps {
  title: string;
  category: string;
}

export function ArticleBreadcrumb({ title, category }: ArticleBreadcrumbProps) {
  const categorySlug = category.toLowerCase();

  return (
    <div className="pt-28 sm:pt-32 pb-4 border-b border-slate-800 bg-[#0B1329]">
      <Container width="wide">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
          {/* Breadcrumb path */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-600" aria-hidden="true" />
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  Insights &amp; Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-600" aria-hidden="true" />
              </li>
              <li>
                <Link
                  href={`/blog?category=${categorySlug}`}
                  className="hover:text-amber-400 transition-colors focus-visible:outline-hidden focus-visible:underline capitalize"
                >
                  {category}
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-600" aria-hidden="true" />
              </li>
              <li
                className="font-medium text-slate-200 truncate max-w-[240px] sm:max-w-xs md:max-w-md"
                aria-current="page"
                title={title}
              >
                {title}
              </li>
            </ol>
          </nav>

          {/* Quick backlink */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 font-medium transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>All Articles</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
