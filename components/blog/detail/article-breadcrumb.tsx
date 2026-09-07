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
    <div className="pt-28 sm:pt-32 pb-4 border-b border-purple-100 bg-[#FFFFFF]">
      <Container width="wide">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
          {/* Breadcrumb path */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[#64748B]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#0F0A1A] transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[#5A5852]" aria-hidden="true" />
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#0F0A1A] transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  Insights &amp; Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[#5A5852]" aria-hidden="true" />
              </li>
              <li>
                <Link
                  href={`/blog?category=${categorySlug}`}
                  className="hover:text-[#0F0A1A] transition-colors focus-visible:outline-hidden focus-visible:underline capitalize"
                >
                  {category}
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[#5A5852]" aria-hidden="true" />
              </li>
              <li
                className="font-medium text-[#0F0A1A] truncate max-w-[240px] sm:max-w-xs md:max-w-md"
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
            className="inline-flex items-center gap-1.5 text-[#475569] hover:text-[#581C87] font-medium transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>All Articles</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
