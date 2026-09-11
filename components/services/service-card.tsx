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
import type { Service } from "@/types/service";

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

interface ServiceCardProps {
  service: Service;
  featuredHighlight?: boolean;
}

/**
 * Editorial Service Directory Card in Flagship Jewel-Teal & Golden Styling
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = (service.icon && iconMap[service.icon]) || Landmark;
  const schemeCeiling =
    service.schemeCeiling || (service.featured ? "Core Advisory Program" : "Institutional Program");

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 p-6 sm:p-7 border border-teal-500/30 shadow-[0_12px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(20,184,166,0.15)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-teal-400/80 hover:shadow-[0_20px_45px_-12px_rgba(20,184,166,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 [transform:translateZ(0)]"
      aria-label={`${service.name} - view specialized program details`}
    >
      <div className="space-y-4">
        {/* Top Header Row: Golden Icon Container & Floating Scheme Ceiling Tag */}
        <div className="flex items-start justify-between gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center border border-amber-500/40 bg-amber-950/60 text-amber-400 shadow-xs transition-all duration-300 shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-105"
            aria-hidden="true"
          >
            <IconComponent className="w-5 h-5 transition-transform duration-300" />
          </div>

          {/* Floating Tag indicating Scheme Ceiling */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-500/40 shadow-2xs transition-transform duration-300 group-hover:scale-[1.02]">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="truncate max-w-[190px] sm:max-w-[220px]">{schemeCeiling}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-medium text-amber-300 group-hover:text-amber-200 transition-colors leading-snug pt-1">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-teal-100/85 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Meta Footer Row */}
      <div className="pt-4 mt-5 border-t border-teal-500/30 flex items-center justify-between text-xs font-mono">
        {service.timeline ? (
          <div className="flex items-center gap-1.5 text-teal-200/70">
            <Clock className="w-3.5 h-3.5 text-amber-400/80 shrink-0" aria-hidden="true" />
            <span className="line-clamp-1 max-w-[150px] sm:max-w-[190px] text-[11px]">
              {service.timeline}
            </span>
          </div>
        ) : (
          <span className="text-teal-200/60 text-[11px]">Advisory Track</span>
        )}

        <div className="inline-flex items-center gap-1.5 font-bold transition-colors ml-auto pl-2 text-xs text-amber-400 group-hover:text-amber-300 uppercase tracking-wider">
          <span>Explore Program</span>
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
