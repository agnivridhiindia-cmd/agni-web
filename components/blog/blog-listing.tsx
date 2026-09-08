"use client";

import * as React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, RotateCcw } from "lucide-react";
import type { BlogPostFrontmatter } from "@/types/blog-post";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "./article-card";
import { CategoryFilter, type BlogFilterCategory } from "./category-filter";
import { useReducedMotionPreference } from "@/components/shared/motion";

interface BlogListingProps {
  initialPosts: readonly BlogPostFrontmatter[];
}

export function BlogListing({ initialPosts }: BlogListingProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prefersReducedMotion = useReducedMotionPreference();

  // Read active category from URL (?category=...)
  const activeCategory = (searchParams.get("category") || "all").toLowerCase();

  // Build dynamic category taxonomy strictly from verified blog articles
  const categories = React.useMemo<BlogFilterCategory[]>(() => {
    const list: BlogFilterCategory[] = [
      {
        id: "all",
        label: "All Insights",
        count: initialPosts.length,
      },
    ];

    const categoryMap: Record<string, { label: string; count: number }> = {};
    for (const post of initialPosts) {
      const catKey = post.category.toLowerCase();
      if (!categoryMap[catKey]) {
        categoryMap[catKey] = { label: post.category, count: 0 };
      }
      categoryMap[catKey].count += 1;
    }

    for (const [key, data] of Object.entries(categoryMap)) {
      list.push({
        id: key,
        label: data.label,
        count: data.count,
      });
    }

    return list;
  }, [initialPosts]);

  // Filtered posts based on active category
  const filteredPosts = React.useMemo(() => {
    if (activeCategory === "all") {
      return initialPosts;
    }
    return initialPosts.filter(
      (post) => post.category.toLowerCase() === activeCategory
    );
  }, [initialPosts, activeCategory]);

  // Handle category selection and sync with URL
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
    <section className="py-12 sm:py-16 lg:py-20">
      <Container width="wide">
        {/* Dynamic Category Navigation */}
        <CategoryFilter
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
            {filteredPosts.length === 0 ? (
              /* Empty Filter State */
              <div className="py-16 sm:py-20 text-center rounded-2xl border border-dashed border-[#232727] bg-[#111313] max-w-xl mx-auto space-y-4 px-6">
                <div className="w-12 h-12 rounded-full bg-[#181A1A] border border-[#232727] text-[#C79A4A] flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-semibold text-[#F3EFE7]">
                    No Articles in This Category
                  </h3>
                  <p className="text-[#D1CBC1] text-sm font-sans">
                    We currently have no published guides under this category filter.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSelectCategory("all")}
                  className="mt-2 inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>View All Insights</span>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredPosts.map((post) => (
                  <ArticleCard key={post.slug} post={post} featured={false} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
