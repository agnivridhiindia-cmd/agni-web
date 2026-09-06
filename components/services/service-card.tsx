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
  Sparkles,
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
    ceilingTag: string;
    arrowText: string;
    titleHover: string;
  }
> = {
  funding: {
    iconBg: "bg-gold-50/90 border-gold-200/90",
    iconHover: "group-hover:bg-slate-950 group-hover:text-gold-400 group-hover:border-slate-800",
    iconText: "text-gold-800",
    borderHover:
      "hover:border-gold-500/50 hover:shadow-[0_12px_32px_-6px_rgba(184,137,31,0.22)]",
    ceilingTag: "bg-gold-50 text-gold-950 border-gold-300/80",
    arrowText: "text-gold-700 group-hover:text-gold-950",
    titleHover: "group-hover:text-slate-950",
  },
  compliance: {
    iconBg: "bg-teal-50/90 border-teal-200/90",
    iconHover: "group-hover:bg-slate-950 group-hover:text-teal-400 group-hover:border-slate-800",
    iconText: "text-teal-800",
    borderHover:
      "hover:border-teal-500/50 hover:shadow-[0_12px_32px_-6px_rgba(8,145,178,0.22)]",
    ceilingTag: "bg-teal-50 text-teal-950 border-teal-300/80",
    arrowText: "text-teal-700 group-hover:text-teal-950",
    titleHover: "group-hover:text-slate-950",
  },
  digital: {
    iconBg: "bg-cyan-50/90 border-cyan-200/90",
    iconHover: "group-hover:bg-slate-950 group-hover:text-cyan-400 group-hover:border-slate-800",
    iconText: "text-cyan-800",
    borderHover:
      "hover:border-cyan-500/50 hover:shadow-[0_12px_32px_-6px_rgba(6,182,212,0.22)]",
    ceilingTag: "bg-cyan-50 text-cyan-950 border-cyan-300/80",
    arrowText: "text-cyan-700 group-hover:text-cyan-950",
    titleHover: "group-hover:text-slate-950",
  },
  it: {
    iconBg: "bg-slate-100/90 border-slate-200",
    iconHover: "group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-800",
    iconText: "text-slate-800",
    borderHover:
      "hover:border-slate-500/50 hover:shadow-[0_12px_32px_-6px_rgba(15,23,42,0.18)]",
    ceilingTag: "bg-slate-100 text-slate-950 border-slate-300",
    arrowText: "text-slate-700 group-hover:text-slate-950",
    titleHover: "group-hover:text-slate-950",
  },
};

interface ServiceCardProps {
  service: Service;
  featuredHighlight?: boolean;
}

/**
 * Editorial Service Directory Item with Specular Rim Lighting and Floating Scheme Ceiling Tag
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = (service.icon && iconMap[service.icon]) || Landmark;
  const theme = categoryTheme[service.category] || categoryTheme.funding;
  const schemeCeiling =
    service.schemeCeiling || (service.featured ? "Core Advisory Program" : "Institutional Program");

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/80 transition-all duration-300",
        "shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_1px_3px_rgba(0,0,0,0.04)]",
        "hover:-translate-y-1 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2",
        theme.borderHover
      )}
      aria-label={`${service.name} — view specialized program details`}
    >
      <div className="space-y-4">
        {/* Top Header Row: Icon & Floating Scheme Ceiling Tag */}
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              "w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0 shadow-2xs",
              theme.iconBg,
              theme.iconText,
              theme.iconHover
            )}
            aria-hidden="true"
          >
            <IconComponent className="w-5 h-5" />
          </div>

          {/* Floating Tag indicating Scheme Ceiling */}
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider border shadow-2xs transition-transform duration-300 group-hover:scale-[1.02]",
              theme.ceilingTag
            )}
          >
            <Sparkles className="w-3 h-3 opacity-75 shrink-0" />
            <span className="truncate max-w-[190px] sm:max-w-[220px]">{schemeCeiling}</span>
          </span>
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-serif text-lg sm:text-xl font-bold text-slate-950 transition-colors leading-snug pt-1",
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
            <span className="line-clamp-1 max-w-[150px] sm:max-w-[190px] font-mono text-[11px]">
              {service.timeline}
            </span>
          </div>
        ) : (
          <span className="text-slate-400 font-mono text-[11px]">Advisory Track</span>
        )}

        <div
          className={cn(
            "inline-flex items-center gap-1.5 font-semibold transition-colors ml-auto pl-2 text-xs font-mono tracking-tight",
            theme.arrowText
          )}
        >
          <span>Explore Program</span>
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
