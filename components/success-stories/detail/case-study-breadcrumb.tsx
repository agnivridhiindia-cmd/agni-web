import * as React from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";

interface CaseStudyBreadcrumbProps {
  title: string;
  categoryLabel?: string;
  categorySlug?: string;
}

export function CaseStudyBreadcrumb({
  title,
  categoryLabel,
  categorySlug,
}: CaseStudyBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-purple-100 bg-[#FFFFFF] pt-28 sm:pt-32 pb-4 text-xs font-sans text-[#64748B]"
    >
      <Container width="wide">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ol className="flex items-center flex-wrap gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-[#581C87] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded px-0.5"
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-[#64748B] shrink-0" aria-hidden="true" />
            </li>
            <li>
              <Link
                href="/success-stories"
                className="hover:text-[#581C87] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded px-0.5"
              >
                Success Stories
              </Link>
            </li>
            {categoryLabel && (
              <>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-[#64748B] shrink-0" aria-hidden="true" />
                </li>
                <li>
                  <Link
                    href={`/success-stories?category=${categorySlug || ""}`}
                    className="hover:text-[#581C87] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded px-0.5"
                  >
                    {categoryLabel}
                  </Link>
                </li>
              </>
            )}
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-[#64748B] shrink-0" aria-hidden="true" />
            </li>
            <li
              className="font-medium text-[#0F0A1A] truncate max-w-[200px] sm:max-w-[320px] md:max-w-[420px]"
              aria-current="page"
              title={title}
            >
              {title}
            </li>
          </ol>

          <Link
            href="/success-stories"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-teal-700 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded px-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>All Success Stories</span>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
