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
    iconBg: "bg-cyan-50 border-cyan-100",
    iconHover: "group-hover:bg-[#202323] group-hover:text-[#0891B2] group-hover:border-[#0891B2]/40",
    iconText: "text-[#0891B2]",
    borderHover:
      "hover:border-[#0891B2]/40 hover:shadow-[0_12px_32px_-6px_rgba(124,58,237,0.18)]",
    ceilingTag: "bg-cyan-50 text-[#0891B2] border-cyan-100",
    arrowText: "text-[#0891B2] group-hover:text-[#0F0A1A]",
    titleHover: "group-hover:text-[#0891B2]",
  },
  compliance: {
    iconBg: "bg-cyan-50 border-cyan-100",
    iconHover: "group-hover:bg-[#202323] group-hover:text-[#0891B2] group-hover:border-[#2DD4BF]/50",
    iconText: "text-[#0891B2]",
    borderHover:
      "hover:border-[#2DD4BF]/50 hover:shadow-[0_12px_32px_-6px_rgba(124,58,237,0.18)]",
    ceilingTag: "bg-cyan-50 text-[#0891B2] border-cyan-100",
    arrowText: "text-[#0891B2] group-hover:text-[#0F0A1A]",
    titleHover: "group-hover:text-[#0891B2]",
  },
  digital: {
    iconBg: "bg-cyan-50 border-cyan-100",
    iconHover: "group-hover:bg-[#202323] group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/50",
    iconText: "text-[#38BDF8]",
    borderHover:
      "hover:border-[#38BDF8]/50 hover:shadow-[0_12px_32px_-6px_rgba(56,189,248,0.18)]",
    ceilingTag: "bg-cyan-50 text-[#38BDF8] border-cyan-100",
    arrowText: "text-[#38BDF8] group-hover:text-[#0F0A1A]",
    titleHover: "group-hover:text-[#0891B2]",
  },
  it: {
    iconBg: "bg-cyan-50 border-cyan-100",
    iconHover: "group-hover:bg-[#202323] group-hover:text-white group-hover:border-cyan-200",
    iconText: "text-[#475569]",
    borderHover:
      "hover:border-cyan-200 hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.3)]",
    ceilingTag: "bg-cyan-50 text-[#475569] border-cyan-100",
    arrowText: "text-[#475569] group-hover:text-white",
    titleHover: "group-hover:text-[#0891B2]",
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
        "group relative flex flex-col justify-between rounded-2xl bg-white/85 backdrop-blur-xs p-6 sm:p-7 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_8px_24px_rgba(8,145,178,0.06)] transition-all duration-300 ease-out [transform:translateZ(0)]",
        "hover:bg-white/95 hover:border-cyan-300 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_16px_36px_rgba(8,145,178,0.12)]",
        "hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-2",
        theme.borderHover
      )}
      aria-label={`${service.name} - view specialized program details`}
    >
      <div className="space-y-4">
        {/* Top Header Row: Icon & Floating Scheme Ceiling Tag */}
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              "w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0 shadow-2xs group-hover:scale-110 group-hover:rotate-2",
              theme.iconBg,
              theme.iconText,
              theme.iconHover
            )}
            aria-hidden="true"
          >
            <IconComponent className="w-5 h-5 transition-transform duration-300" />
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
            "font-serif text-lg sm:text-xl font-bold text-[#0F0A1A] transition-colors leading-snug pt-1",
            theme.titleHover
          )}
        >
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-[#475569] text-sm leading-relaxed font-sans line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Meta Footer Row */}
      <div className="pt-5 mt-5 border-t border-cyan-100 flex items-center justify-between text-xs">
        {service.timeline ? (
          <div className="flex items-center gap-1.5 text-[#64748B] font-sans">
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
