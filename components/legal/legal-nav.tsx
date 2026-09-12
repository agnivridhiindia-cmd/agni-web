import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

interface LegalNavProps {
  currentPage: "privacy" | "terms" | "disclaimer";
}

const legalPages = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
  { id: "terms", label: "Terms of Service", href: "/terms" },
  { id: "disclaimer", label: "Regulatory Disclaimer", href: "/disclaimer" },
] as const;

export function LegalNav({ currentPage }: LegalNavProps) {
  return (
    <div className="border-b border-cyan-100 bg-white/95 backdrop-blur-md sticky top-16 sm:top-20 z-20 shadow-2xs">
      <Container width="reading">
        <nav aria-label="Legal document navigation" className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-3">
          {legalPages.map((page) => {
            const isActive = page.id === currentPage;
            return (
              <Link
                key={page.id}
                href={page.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "min-w-[calc(33.333%-0.5rem)] flex-1 px-2 py-1.5 rounded-lg text-center text-xs leading-tight sm:min-w-0 sm:flex-none sm:px-3.5 sm:text-sm font-medium transition-all font-sans",
                  isActive
                    ? "bg-cyan-50 text-[#0F0A1A] border border-[#0891B2]/60 shadow-2xs font-semibold"
                    : "text-[#64748B] hover:text-[#0F0A1A] hover:bg-cyan-50/60"
                )}
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}
