"use client";

import * as React from "react";
import { List, ChevronDown, BookmarkCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/toc";

interface TableOfContentsProps {
  items: TocItem[];
  variant?: "all" | "desktop" | "mobile";
  className?: string;
}

export function TableOfContents({ items, variant = "all", className }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -55% 0px", threshold: 0.1 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) {
    return null;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -110;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  const showMobile = variant === "all" || variant === "mobile";
  const showDesktop = variant === "all" || variant === "desktop";

  return (
    <div className={className}>
      {/* Mobile Collapsible TOC */}
      {showMobile && (
        <div className={cn("rounded-xl border border-cyan-100 bg-white overflow-hidden shadow-xs", variant === "all" ? "lg:hidden my-8" : "")}>
          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="w-full px-4 py-3 flex items-center justify-between text-left font-sans text-sm font-semibold text-[#0F0A1A] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0891B2]"
            aria-expanded={isMobileOpen}
          >
            <span className="flex items-center gap-2">
              <List className="w-4 h-4 text-[#0891B2]" aria-hidden="true" />
              <span>Table of Contents ({items.length} sections)</span>
            </span>
            <ChevronDown
              className={cn("w-4 h-4 text-[#64748B] transition-transform duration-200", isMobileOpen && "rotate-180")}
              aria-hidden="true"
            />
          </button>

          {isMobileOpen && (
            <nav aria-label="Table of Contents (Mobile)" className="px-4 pb-4 pt-1 border-t border-cyan-100">
              <ul className="space-y-2 text-xs font-sans">
                {items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li
                      key={item.id}
                      className={cn(item.level === 3 ? "pl-3.5 border-l border-cyan-100" : "")}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleLinkClick(e, item.id)}
                        className={cn(
                          "block py-1 transition-colors leading-relaxed",
                          isActive
                            ? "text-[#06B6D4] font-semibold"
                            : "text-[#475569] hover:text-[#0F0A1A]"
                        )}
                      >
                        {item.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      )}

      {/* Desktop Sticky Sidebar TOC (Anchored on the Right Column) */}
      {showDesktop && (
        <div className={cn("sticky top-28 space-y-3.5 p-5 rounded-2xl border border-cyan-100 bg-white/95 backdrop-blur-md shadow-2xl", variant === "all" ? "hidden lg:block w-72 shrink-0" : "")}>
          <div className="flex items-center justify-between pb-3 border-b border-cyan-100 text-xs font-mono font-bold uppercase tracking-wider text-[#0F0A1A]">
            <div className="flex items-center gap-2">
              <List className="w-4 h-4 text-[#0891B2]" aria-hidden="true" />
              <span>Table of Contents</span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-50 border border-cyan-100 text-[#06B6D4] font-mono">
              {items.length}
            </span>
          </div>

          <nav aria-label="Table of Contents (Desktop)">
            <ul className="space-y-1 text-xs font-sans max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li
                    key={item.id}
                    className={cn(item.level === 3 ? "pl-3 border-l border-cyan-100 ml-1.5" : "")}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={cn(
                        "group flex items-start gap-1.5 py-1.5 px-2 rounded-lg transition-all leading-snug",
                        isActive
                          ? "bg-[#0891B2]/10 text-[#06B6D4] font-semibold border-l-2 border-[#0891B2] shadow-2xs"
                          : "text-[#475569] hover:text-[#0F0A1A] hover:bg-cyan-50"
                      )}
                    >
                      {isActive && (
                        <BookmarkCheck className="w-3.5 h-3.5 text-[#0891B2] shrink-0 mt-0.5" />
                      )}
                      <span className="line-clamp-2">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="pt-3 border-t border-cyan-100 text-[10px] font-mono text-[#64748B] flex items-center justify-between">
            <span>SCROLL SPY ACTIVE</span>
            <span className="text-[#0891B2] font-bold">LIVE NAV</span>
          </div>
        </div>
      )}
    </div>
  );
}
