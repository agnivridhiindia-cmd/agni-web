import * as React from "react";
import Link from "next/link";
import {
  Landmark,
  ShieldCheck,
  Globe,
  Cpu,
  Coins,
  CreditCard,
  Award,
  TrendingUp,
  FileCheck,
  Receipt,
  ShieldAlert,
  Rocket,
  Monitor,
  Search,
  Code,
  Database,
  ArrowRight,
  Clock,
  type LucideIcon,
} from "lucide-react";
import type { Service, ServiceCategory } from "@/types/service";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  ShieldCheck,
  Globe,
  Cpu,
  Coins,
  CreditCard,
  Award,
  TrendingUp,
  FileCheck,
  Receipt,
  ShieldAlert,
  Rocket,
  Monitor,
  Search,
  Code,
  Database,
};

const categoryTheme: Record<
  ServiceCategory,
  {
    iconBg: string;
    iconHover: string;
    iconText: string;
    borderHover: string;
    badgeBg: string;
    badgeText: string;
    arrowText: string;
    titleHover: string;
  }
> = {
  funding: {
    iconBg: "bg-gold-50/80 border-gold-200/80",
    iconHover: "group-hover:bg-gold-600 group-hover:text-white group-hover:border-gold-600",
    iconText: "text-gold-800",
    borderHover: "hover:border-gold-400/80 hover:shadow-subtle",
    badgeBg: "bg-gold-50 border-gold-200/80",
    badgeText: "text-gold-900",
    arrowText: "text-gold-700 group-hover:text-gold-900",
    titleHover: "group-hover:text-gold-900",
  },
  compliance: {
    iconBg: "bg-teal-50/80 border-teal-200/80",
    iconHover: "group-hover:bg-teal-700 group-hover:text-white group-hover:border-teal-700",
    iconText: "text-teal-800",
    borderHover: "hover:border-teal-400/80 hover:shadow-subtle",
    badgeBg: "bg-teal-50 border-teal-200/80",
    badgeText: "text-teal-900",
    arrowText: "text-teal-700 group-hover:text-teal-900",
    titleHover: "group-hover:text-teal-800",
  },
  digital: {
    iconBg: "bg-cyan-50/80 border-cyan-200/80",
    iconHover: "group-hover:bg-cyan-700 group-hover:text-white group-hover:border-cyan-700",
    iconText: "text-cyan-800",
    borderHover: "hover:border-cyan-400/80 hover:shadow-subtle",
    badgeBg: "bg-cyan-50 border-cyan-200/80",
    badgeText: "text-cyan-900",
    arrowText: "text-cyan-700 group-hover:text-cyan-900",
    titleHover: "group-hover:text-cyan-800",
  },
  it: {
    iconBg: "bg-slate-100/90 border-slate-200",
    iconHover: "group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800",
    iconText: "text-slate-800",
    borderHover: "hover:border-slate-400/80 hover:shadow-subtle",
    badgeBg: "bg-slate-100 border-slate-200",
    badgeText: "text-slate-900",
    arrowText: "text-slate-700 group-hover:text-slate-950",
    titleHover: "group-hover:text-slate-950",
  },
};

interface ServiceCardProps {
  service: Service;
  featuredHighlight?: boolean;
}

/**
 * Editorial Service Directory Item
 * Entire card acts as a single, accessible semantic Link without nested interactive controls.
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = (service.icon && iconMap[service.icon]) || Landmark;
  const theme = categoryTheme[service.category] || categoryTheme.funding;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col justify-between rounded-xl bg-white p-6 sm:p-7 border border-slate-200/90 transition-all duration-200",
        "hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2",
        theme.borderHover
      )}
      aria-label={`${service.name} — view specialized program details`}
    >
      <div className="space-y-4">
        {/* Top Header Row: Icon & Tag */}
        <div className="flex items-center justify-between gap-3">
          <div
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center border transition-colors duration-200 shrink-0",
              theme.iconBg,
              theme.iconText,
              theme.iconHover
            )}
            aria-hidden="true"
          >
            <IconComponent className="w-5 h-5" />
          </div>

          {service.featured && (
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider border",
                theme.badgeBg,
                theme.badgeText
              )}
            >
              Core Scheme
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-serif text-lg sm:text-xl font-semibold text-slate-900 transition-colors leading-snug",
            theme.titleHover
          )}
        >
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-sm leading-relaxed font-sans line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Meta Footer Row */}
      <div className="pt-5 mt-5 border-t border-slate-100/90 flex items-center justify-between text-xs">
        {service.timeline ? (
          <div className="flex items-center gap-1.5 text-slate-500 font-sans">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span className="line-clamp-1 max-w-[160px] sm:max-w-[200px]">{service.timeline}</span>
          </div>
        ) : (
          <span className="text-slate-400 font-sans">Advisory Track</span>
        )}

        <div
          className={cn(
            "inline-flex items-center gap-1.5 font-medium transition-colors ml-auto pl-2",
            theme.arrowText
          )}
        >
          <span>Explore</span>
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
