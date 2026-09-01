import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
      className="border-b border-slate-200/80 bg-slate-50/70 pt-20 sm:pt-24 pb-3 text-xs text-slate-500 font-sans"
    >
      <Container width="wide">
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          <li>
            <Link
              href="/"
              className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-600 rounded px-1 -mx-1"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3 h-3 text-slate-400" />
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
            <ChevronRight className="w-3 h-3 text-slate-400" />
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
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </li>
          <li
            aria-current="page"
            className="font-medium text-slate-900 truncate max-w-[200px] sm:max-w-md"
          >
            {service.name}
          </li>
        </ol>
      </Container>
    </nav>
  );
}
