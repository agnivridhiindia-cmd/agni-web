"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Building2, ShieldCheck, Landmark, Laptop } from "lucide-react";
import type { CaseStudyFrontmatter } from "@/types/case-study";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaArrow } from "@/components/ui/cta-arrow";
import { OutcomeStats } from "@/components/success-stories/outcome-stats";
import { useReducedMotionPreference } from "@/components/shared/motion";

export interface StoryCardProps {
  study: CaseStudyFrontmatter;
  featured?: boolean;
  className?: string;
}

function getCategoryMeta(category: string) {
  switch (category) {
    case "funding":
      return {
        label: "Government Funding",
        badgeVariant: "primary" as const,
        icon: <Landmark className="w-3.5 h-3.5 text-teal-600" />,
      };
    case "compliance":
      return {
        label: "Compliance & Standards",
        badgeVariant: "accent" as const,
        icon: <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />,
      };
    case "digital":
      return {
        label: "Digital Transformation",
        badgeVariant: "default" as const,
        icon: <Building2 className="w-3.5 h-3.5 text-slate-600" />,
      };
    case "it":
    default:
      return {
        label: "IT Systems",
        badgeVariant: "outline" as const,
        icon: <Laptop className="w-3.5 h-3.5 text-slate-600" />,
      };
  }
}

export function StoryCard({ study, featured = false, className }: StoryCardProps) {
  const prefersReducedMotion = useReducedMotionPreference();
  const categoryMeta = getCategoryMeta(study.category);
  const primaryStat = study.statistics?.[0];

  // Featured story subtle 3D card tilt calculation
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!featured || prefersReducedMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // Restrained micro-tilt: max 3 degrees
      setRotateX((-y / (rect.height / 2)) * 2.5);
      setRotateY((x / (rect.width / 2)) * 2.5);
    },
    [featured, prefersReducedMotion]
  );

  const handleMouseLeave = React.useCallback(() => {
    setRotateX(0);
    setRotateY(0);
  }, []);

  const cardStyle =
    featured && !prefersReducedMotion
      ? {
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.15s ease-out",
        }
      : undefined;

  return (
    <Link
      href={`/success-stories/${study.slug}`}
      className={cn("group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-2xl", className)}
      aria-label={`Read case study: ${study.title}`}
    >
      <div
        ref={cardRef}
        style={cardStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full"
      >
        <Card
          variant={featured ? "featured" : "interactive"}
          className={cn(
            "h-full flex flex-col justify-between transition-all duration-300",
            featured
              ? "p-6 sm:p-8 lg:p-10 bg-white border-slate-200 shadow-elevated"
              : "p-6 sm:p-7 bg-white border-slate-200 shadow-card hover:border-teal-400/60 hover:shadow-elevated hover:-translate-y-1"
          )}
        >
          {/* Top Section */}
          <div className="space-y-5">
            {/* Meta Row */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <Badge variant={categoryMeta.badgeVariant} className="text-xs flex items-center gap-1.5">
                  {categoryMeta.icon}
                  <span>{categoryMeta.label}</span>
                </Badge>
              </div>

              {study.client && (
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-sans truncate max-w-[240px]">
                  {study.client}
                </span>
              )}
            </div>

            {/* Title & Summary */}
            <div className="space-y-2.5">
              <h3
                className={cn(
                  "font-serif font-bold text-slate-950 leading-snug tracking-tight group-hover:text-teal-800 transition-colors",
                  featured ? "text-2xl sm:text-3xl lg:text-[2rem]" : "text-xl sm:text-2xl"
                )}
              >
                {study.title}
              </h3>

              <p
                className={cn(
                  "text-slate-600 font-sans leading-relaxed",
                  featured ? "type-body-sm sm:type-body" : "text-xs sm:text-sm line-clamp-3"
                )}
              >
                {study.summary}
              </p>
            </div>

            {/* Primary Outcome Stat */}
            {primaryStat && (
              <OutcomeStats
                value={primaryStat.value}
                label={primaryStat.label}
                context={primaryStat.context}
                size={featured ? "large" : "default"}
                variant={featured ? "teal" : "teal"}
                className={featured ? "my-6" : "my-4"}
              />
            )}

            {/* Featured Only: Detailed Outcomes List */}
            {featured && study.outcomes && study.outcomes.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block font-sans">
                  Key Deliverables
                </span>
                <ul className="space-y-2">
                  {study.outcomes.slice(0, 3).map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Bottom Action Row */}
          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-teal-700 group-hover:text-teal-900 transition-colors">
            <span>Read Complete Case Study</span>
            <CtaArrow className="w-4 h-4 text-teal-600 group-hover:text-teal-800" />
          </div>
        </Card>
      </div>
    </Link>
  );
}
