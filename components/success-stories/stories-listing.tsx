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

  // Separate featured story from the remaining grid (no duplicates)
  const featuredStory = React.useMemo(() => {
    return filteredStudies.find((s) => s.featured);
  }, [filteredStudies]);

  const regularStories = React.useMemo(() => {
    if (!featuredStory) {
      return filteredStudies;
    }
    return filteredStudies.filter((s) => s.slug !== featuredStory.slug);
  }, [filteredStudies, featuredStory]);

  const transitionConfig = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeOut" as const };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container width="wide">
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
              /* Empty Filter State */
              <div className="py-16 sm:py-20 text-center rounded-2xl border border-dashed border-purple-100 bg-white max-w-xl mx-auto space-y-4 px-6">
                <div className="w-12 h-12 rounded-full bg-purple-50 border border-purple-100 text-[#581C87] flex items-center justify-center mx-auto">
                  <FileQuestion className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-semibold text-[#0F0A1A]">
                    No Case Studies in This Category
                  </h3>
                  <p className="text-[#475569] text-sm font-sans">
                    We currently have no verified engagements published under this filter.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSelectCategory("all")}
                  className="mt-2 inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>View All Case Studies</span>
                </Button>
              </div>
            ) : (
              /* Editorial Case Studies Composition */
              <div className="space-y-8 sm:space-y-10">
                {/* 1. Featured Prominent Story (if present in current filter) */}
                {featuredStory && (
                  <div>
                    <StoryCard study={featuredStory} featured={true} />
                  </div>
                )}

                {/* 2. Structured Secondary Grid */}
                {regularStories.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {regularStories.map((study) => (
                      <StoryCard key={study.slug} study={study} featured={false} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
