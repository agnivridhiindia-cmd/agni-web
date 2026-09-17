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
  CheckCircle2,
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
  
  // Clean, concise timeline without parenthetical text that causes truncation
  const cleanTimeline = service.timeline
    ? service.timeline.split("(")[0].trim()
    : "Advisory Track";

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-amber-400/80 hover:shadow-[0_20px_45px_rgba(14,165,233,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 [transform:translateZ(0)]"
      aria-label={`${service.name} - view specialized program details`}
    >
      <div className="space-y-4">
        {/* Top Header Row: Golden Icon Container & Floating Scheme Ceiling Tag */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center border border-amber-300/80 bg-amber-50 text-amber-700 shadow-2xs transition-all duration-300 shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 group-hover:scale-105"
            aria-hidden="true"
          >
            <IconComponent className="w-5 h-5 transition-transform duration-300" />
          </div>

          {/* Floating Tag indicating Scheme Ceiling */}
          <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-amber-50/90 px-3 py-1 text-center text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 border border-amber-300/80 shadow-2xs transition-transform duration-300 group-hover:scale-[1.02] sm:text-left">
            <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
            <span className="min-w-0 max-w-full whitespace-normal break-words sm:max-w-[220px] sm:truncate">{schemeCeiling}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug pt-1">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-2">
          {service.shortDescription}
        </p>

        {/* Key Program Deliverables Preview */}
        {service.benefits && service.benefits.length > 0 && (
          <div className="pt-3 space-y-1.5 border-t border-slate-100">
            {service.benefits.slice(0, 2).map((benefit, bIdx) => (
              <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Meta Footer Row */}
      <div className="pt-4 mt-5 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
          <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
          <span className="line-clamp-1 max-w-[180px] sm:max-w-[220px] text-[11px]">
            {cleanTimeline}
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 font-bold transition-colors ml-auto pl-2 text-xs text-amber-600 group-hover:text-amber-700 uppercase tracking-wider">
          <span>Explore Program</span>
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-amber-600 group-hover:text-amber-700"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
