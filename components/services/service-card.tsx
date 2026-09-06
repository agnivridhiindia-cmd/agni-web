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
  Smartphone,
  Cloud,
  Bot,
  Palette,
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
  Smartphone,
  Cloud,
  Bot,
  Palette,
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
    iconBg: "bg-[#181A1A] border-[#232727]",
    iconHover: "group-hover:bg-[#202323] group-hover:text-[#C79A4A] group-hover:border-[#C79A4A]/50",
    iconText: "text-[#C79A4A]",
    borderHover:
      "hover:border-[#C79A4A]/50 hover:shadow-[0_12px_32px_-6px_rgba(199,154,74,0.18)]",
    ceilingTag: "bg-[#181A1A] text-[#C79A4A] border-[#232727]",
    arrowText: "text-[#C79A4A] group-hover:text-[#F3EFE7]",
    titleHover: "group-hover:text-[#C79A4A]",
  },
  compliance: {
    iconBg: "bg-[#181A1A] border-[#232727]",
    iconHover: "group-hover:bg-[#202323] group-hover:text-[#2DD4BF] group-hover:border-[#2DD4BF]/50",
    iconText: "text-[#2DD4BF]",
    borderHover:
      "hover:border-[#2DD4BF]/50 hover:shadow-[0_12px_32px_-6px_rgba(45,212,191,0.18)]",
    ceilingTag: "bg-[#181A1A] text-[#2DD4BF] border-[#232727]",
    arrowText: "text-[#2DD4BF] group-hover:text-[#F3EFE7]",
    titleHover: "group-hover:text-[#C79A4A]",
  },
  digital: {
    iconBg: "bg-[#181A1A] border-[#232727]",
    iconHover: "group-hover:bg-[#202323] group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/50",
    iconText: "text-[#38BDF8]",
    borderHover:
      "hover:border-[#38BDF8]/50 hover:shadow-[0_12px_32px_-6px_rgba(56,189,248,0.18)]",
    ceilingTag: "bg-[#181A1A] text-[#38BDF8] border-[#232727]",
    arrowText: "text-[#38BDF8] group-hover:text-[#F3EFE7]",
    titleHover: "group-hover:text-[#C79A4A]",
  },
  it: {
    iconBg: "bg-[#181A1A] border-[#232727]",
    iconHover: "group-hover:bg-[#202323] group-hover:text-white group-hover:border-[#333737]",
    iconText: "text-[#D1CBC1]",
    borderHover:
      "hover:border-[#333737] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.3)]",
    ceilingTag: "bg-[#181A1A] text-[#D1CBC1] border-[#232727]",
    arrowText: "text-[#D1CBC1] group-hover:text-white",
    titleHover: "group-hover:text-[#C79A4A]",
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
        "group relative flex flex-col justify-between rounded-2xl bg-[#111313] p-6 sm:p-7 border border-[#232727] transition-all duration-300 hover:bg-[#151717]",
        "shadow-lg",
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
            "font-serif text-lg sm:text-xl font-bold text-[#F3EFE7] transition-colors leading-snug pt-1",
            theme.titleHover
          )}
        >
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-[#D1CBC1] text-sm leading-relaxed font-sans line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Meta Footer Row */}
      <div className="pt-5 mt-5 border-t border-[#232727] flex items-center justify-between text-xs">
        {service.timeline ? (
          <div className="flex items-center gap-1.5 text-[#8E8B82] font-sans">
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
