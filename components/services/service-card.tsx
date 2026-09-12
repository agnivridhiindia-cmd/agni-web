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
      className="group relative flex flex-col justify-between rounded-2xl bg-white/85 p-6 sm:p-7 border border-white/90 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-[0_24px_50px_rgba(14,165,233,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 [transform:translateZ(0)]"
      aria-label={`${service.name} - view specialized program details`}
    >
      <div className="space-y-4">
        {/* Top Header Row: Golden Icon Container & Floating Scheme Ceiling Tag */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center border border-amber-300 bg-amber-50 text-amber-700 shadow-2xs transition-all duration-300 shrink-0 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-105"
            aria-hidden="true"
          >
            <IconComponent className="w-5 h-5 transition-transform duration-300" />
          </div>

          {/* Floating Tag indicating Scheme Ceiling */}
          <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-center text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 border border-amber-300 shadow-2xs transition-transform duration-300 group-hover:scale-[1.02] sm:text-left">
            <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
            <span className="min-w-0 max-w-full whitespace-normal break-words sm:max-w-[220px] sm:truncate">{schemeCeiling}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug pt-1">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Meta Footer Row */}
      <div className="pt-4 mt-5 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono">
        {service.timeline ? (
          <div className="flex items-center gap-1.5 text-slate-600 font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
            <span className="line-clamp-1 max-w-[150px] sm:max-w-[190px] text-[11px]">
              {service.timeline}
            </span>
          </div>
        ) : (
          <span className="text-slate-500 text-[11px] font-medium">Advisory Track</span>
        )}

        <div className="inline-flex items-center gap-1.5 font-bold transition-colors ml-auto pl-2 text-xs text-amber-700 group-hover:text-amber-800 uppercase tracking-wider">
          <span>Explore Program</span>
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-amber-700 group-hover:text-amber-800"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
