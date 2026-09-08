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
        <nav aria-label="Legal document navigation" className="flex items-center gap-2 sm:gap-4 overflow-x-auto py-3 no-scrollbar">
          {legalPages.map((page) => {
            const isActive = page.id === currentPage;
            return (
              <Link
                key={page.id}
                href={page.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all shrink-0 font-sans",
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
