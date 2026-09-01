"use client";

import * as React from "react";
import { List, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/toc";

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
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
      { rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
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
      const yOffset = -100;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden my-8 rounded-xl border border-slate-200 bg-slate-50/80 overflow-hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="w-full px-4 py-3 flex items-center justify-between text-left font-sans text-sm font-semibold text-slate-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
          aria-expanded={isMobileOpen}
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-teal-700" aria-hidden="true" />
            <span>On this page ({items.length} sections)</span>
          </span>
          <ChevronDown
            className={cn("w-4 h-4 text-slate-500 transition-transform duration-200", isMobileOpen && "rotate-180")}
            aria-hidden="true"
          />
        </button>

        {isMobileOpen && (
          <nav aria-label="Table of Contents (Mobile)" className="px-4 pb-4 pt-1 border-t border-slate-200/60">
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
                          ? "text-teal-800 font-semibold"
                          : "text-slate-600 hover:text-slate-900"
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

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-28 space-y-3 p-5 rounded-2xl border border-slate-200/90 bg-white/80 backdrop-blur-xs shadow-xs">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
            <List className="w-3.5 h-3.5 text-teal-700" aria-hidden="true" />
            <span>Table of Contents</span>
          </div>

          <nav aria-label="Table of Contents">
            <ul className="space-y-1.5 text-xs font-sans">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li
                    key={item.id}
                    className={cn(item.level === 3 ? "pl-3 border-l border-slate-200" : "")}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={cn(
                        "block py-1 rounded transition-all leading-snug",
                        isActive
                          ? "text-teal-900 font-semibold pl-1.5 border-l-2 border-teal-600 bg-teal-50/50"
                          : "text-slate-600 hover:text-slate-900 hover:pl-1"
                      )}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
