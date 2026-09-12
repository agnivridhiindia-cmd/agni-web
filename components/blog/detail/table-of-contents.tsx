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
    <div className={cn(className, variant === "desktop" && "h-full")}>
      {/* Mobile Collapsible TOC */}
      {showMobile && (
        <div className={cn("rounded-2xl border border-white/90 bg-white/85 overflow-hidden shadow-md backdrop-blur-xl", variant === "all" ? "lg:hidden my-8" : "")}>
          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="w-full px-4 py-3 flex items-center justify-between text-left font-sans text-sm font-bold text-slate-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
            aria-expanded={isMobileOpen}
          >
            <span className="flex items-center gap-2">
              <List className="w-4 h-4 text-amber-600" aria-hidden="true" />
              <span>Table of Contents ({items.length} sections)</span>
            </span>
            <ChevronDown
              className={cn("w-4 h-4 text-slate-500 transition-transform duration-200", isMobileOpen && "rotate-180")}
              aria-hidden="true"
            />
          </button>

          {isMobileOpen && (
            <nav aria-label="Table of Contents (Mobile)" className="px-4 pb-4 pt-1 border-t border-slate-200/80">
              <ul className="space-y-2 text-xs font-sans">
                {items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li
                      key={item.id}
                      className={cn(item.level === 3 ? "pl-3.5 border-l border-slate-200" : "")}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleLinkClick(e, item.id)}
                        className={cn(
                          "block py-1 transition-colors leading-relaxed",
                          isActive
                            ? "text-amber-700 font-bold"
                            : "text-slate-600 hover:text-slate-950"
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
        <div className={cn("sticky top-28 space-y-3.5 p-5 rounded-3xl border border-white/90 bg-white/85 backdrop-blur-xl shadow-[0_16px_40px_rgba(15,23,42,0.08)]", variant === "all" ? "hidden lg:block w-72 shrink-0" : "")}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            <div className="flex items-center gap-2">
              <List className="w-4 h-4 text-amber-600" aria-hidden="true" />
              <span>Table of Contents</span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-amber-100 border border-amber-300 text-amber-900 font-mono font-bold">
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
                    className={cn(item.level === 3 ? "pl-3 border-l border-slate-200 ml-1.5" : "")}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={cn(
                        "group flex items-start gap-1.5 py-1.5 px-2 rounded-lg transition-all leading-snug",
                        isActive
                          ? "bg-amber-100 text-amber-900 font-bold border-l-2 border-amber-500 shadow-2xs"
                          : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70"
                      )}
                    >
                      {isActive && (
                        <BookmarkCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      )}
                      <span className="line-clamp-2">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="pt-3 border-t border-slate-200/80 text-[10px] font-mono text-slate-500 flex items-center justify-between">
            <span>SCROLL SPY ACTIVE</span>
            <span className="text-amber-700 font-bold">LIVE NAV</span>
          </div>
        </div>
      )}
    </div>
  );
}
