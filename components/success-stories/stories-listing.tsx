"use client";

import * as React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FileQuestion, RotateCcw } from "lucide-react";
import type { CaseStudyFrontmatter } from "@/types/case-study";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { StoryCard } from "./story-card";
import { StoryFilters, type FilterCategory } from "./story-filters";
import { useReducedMotionPreference } from "@/components/shared/motion";

const categoryLabels: Record<string, string> = {
  funding: "Government & Debt Funding",
  compliance: "Compliance & Certifications",
  digital: "Digital Transformation",
  it: "Custom Software & IT",
};

interface StoriesListingProps {
  initialStudies: readonly CaseStudyFrontmatter[];
}

export function StoriesListing({ initialStudies }: StoriesListingProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prefersReducedMotion = useReducedMotionPreference();

  // Read active category directly from searchParams
  const activeCategory = searchParams.get("category") || "all";

  // Build dynamic category list from actual verified case study dataset
  const categories = React.useMemo<FilterCategory[]>(() => {
    const list: FilterCategory[] = [
      {
        id: "all",
        label: "All Case Studies",
        count: initialStudies.length,
      },
    ];

    const categoryCounts: Record<string, number> = {};
    for (const study of initialStudies) {
      categoryCounts[study.category] = (categoryCounts[study.category] || 0) + 1;
    }

    // Only include categories that exist in verified dataset
    for (const [catId, count] of Object.entries(categoryCounts)) {
      list.push({
        id: catId,
        label: categoryLabels[catId] || catId,
        count,
      });
    }

    return list;
  }, [initialStudies]);

  // Filtered case studies
  const filteredStudies = React.useMemo(() => {
    if (activeCategory === "all") {
      return initialStudies;
    }
    return initialStudies.filter((study) => study.category === activeCategory);
  }, [initialStudies, activeCategory]);

  // Update category and sync URL
  const handleSelectCategory = React.useCallback(
    (categoryId: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (categoryId === "all") {
        params.delete("category");
      } else {
        params.set("category", categoryId);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const transitionConfig = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeOut" as const };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#D5E7F4] via-[#C6E0F2] to-[#B8D7EE] text-slate-900 border-b border-[#A6CCEA] overflow-hidden">
      {/* Precision architectural ambient background matching home page institutional narrative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:32px_32px] opacity-35 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_65%,transparent_100%)]" />
        <div className="absolute top-1/4 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.1)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container width="wide" className="relative z-10">
        {/* Dynamic Category Filter Navigation */}
        <StoryFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Filtered Content Presentation */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitionConfig}
          >
            {filteredStudies.length === 0 ? (
              /* Empty Filter State in Apple Frosted Glass */
              <div className="py-16 sm:py-20 text-center rounded-3xl border border-white/90 bg-white/80 backdrop-blur-xl shadow-lg max-w-xl mx-auto space-y-4 px-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-300 text-amber-700 flex items-center justify-center mx-auto shadow-2xs">
                  <FileQuestion className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    No Case Studies in This Category
                  </h3>
                  <p className="text-slate-600 text-sm font-sans">
                    We currently have no verified engagements published under this filter.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSelectCategory("all")}
                  className="mt-2 inline-flex items-center gap-1.5 bg-white border-slate-300 text-slate-800 hover:bg-slate-50"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>View All Case Studies</span>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredStudies.map((study) => (
                  <StoryCard key={study.slug} study={study} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
