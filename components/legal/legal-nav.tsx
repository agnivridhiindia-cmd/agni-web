import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import { ShieldCheck, FileText, AlertCircle } from "lucide-react";

interface LegalNavProps {
  currentPage: "privacy" | "terms" | "disclaimer";
}

const legalPages = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy", icon: ShieldCheck },
  { id: "terms", label: "Terms of Service", href: "/terms", icon: FileText },
  { id: "disclaimer", label: "Regulatory Disclaimer", href: "/disclaimer", icon: AlertCircle },
] as const;

export function LegalNav({ currentPage }: LegalNavProps) {
  return (
    <div className="border-b border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)] py-3 sm:py-3.5 transition-all">
      <Container width="reading">
        <nav aria-label="Legal document navigation" className="flex items-center justify-center gap-1.5 sm:gap-3">
          {legalPages.map((page) => {
            const isActive = page.id === currentPage;
            const Icon = page.icon;
            return (
              <Link
                key={page.id}
                href={page.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all select-none",
                  isActive
                    ? "bg-amber-500 text-slate-950 font-bold border border-amber-400 shadow-xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 border border-transparent"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0", isActive ? "text-slate-950" : "text-slate-500")} />
                <span>{page.label}</span>
              </Link>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}
