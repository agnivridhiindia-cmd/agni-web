import * as React from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";
import type { Service } from "@/types/service";

const categoryNames: Record<string, string> = {
  funding: "Government & Debt Funding",
  compliance: "Compliance & Certifications",
  digital: "Digital Transformation",
  it: "Custom Software & IT",
};

interface ServiceBreadcrumbProps {
  service: Service;
}

export function ServiceBreadcrumb({ service }: ServiceBreadcrumbProps) {
  const categoryName = categoryNames[service.category] || service.category;

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-slate-200/80 bg-slate-50/50 pt-24 sm:pt-28 pb-3.5 text-xs text-slate-500 font-sans"
    >
      <Container width="wide">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ol className="flex items-center flex-wrap gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-600 rounded px-1 -mx-1"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-600 rounded px-1 -mx-1"
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </li>
            <li>
              <Link
                href={`/services#${service.category}`}
                className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-600 rounded px-1 -mx-1"
              >
                {categoryName}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </li>
            <li
              aria-current="page"
              className="font-medium text-slate-900 truncate max-w-[200px] sm:max-w-md"
            >
              {service.name}
            </li>
          </ol>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-teal-700 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-600 rounded px-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>All Services</span>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
