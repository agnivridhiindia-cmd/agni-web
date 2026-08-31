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
  Check,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types/service";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

const categoryBadgeVariant: Record<string, "primary" | "accent" | "default" | "muted"> = {
  funding: "primary",
  compliance: "accent",
  digital: "default",
  it: "muted",
};

const categoryLabels: Record<string, string> = {
  funding: "Govt Funding",
  compliance: "Compliance",
  digital: "Digital Growth",
  it: "Software & IT",
};

interface ServiceCardProps {
  service: Service;
  featuredHighlight?: boolean;
}

export function ServiceCard({ service, featuredHighlight = false }: ServiceCardProps) {
  const IconComponent = (service.icon && iconMap[service.icon]) || Landmark;
  const badgeVariant = categoryBadgeVariant[service.category] || "primary";
  const categoryLabel = categoryLabels[service.category] || service.category;

  return (
    <Card
      variant={featuredHighlight || service.featured ? "featured" : "interactive"}
      className="flex flex-col h-full group hover:border-teal-500/50 transition-all duration-300"
    >
      <div className="p-6 flex-1 flex flex-col">
        {/* Top meta row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs">
            <IconComponent className="w-5 h-5" />
          </div>
          <Badge variant={badgeVariant} className="capitalize text-[11px] font-medium tracking-wider">
            {categoryLabel}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-semibold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug mb-2.5">
          <Link href={`/services/${service.slug}`} className="focus-visible:outline-none focus-visible:underline">
            {service.name}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-slate-600 text-sm leading-relaxed font-sans line-clamp-3 mb-5">
          {service.shortDescription}
        </p>

        {/* Benefits preview */}
        {service.benefits && service.benefits.length > 0 && (
          <div className="mt-auto pt-4 border-t border-slate-100/90 space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 font-sans block mb-1">
              Key Value Points
            </span>
            <ul className="space-y-1.5">
              {service.benefits.slice(0, 2).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                  <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer link bar */}
      <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs mt-auto">
        {service.timeline ? (
          <div className="flex items-center gap-1.5 text-slate-500 font-sans">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span className="line-clamp-1 max-w-[170px]">{service.timeline}</span>
          </div>
        ) : (
          <span className="text-slate-400 font-sans">Consulting Advisory</span>
        )}

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-teal-700 group-hover:text-teal-800 transition-colors"
          aria-label={`View details for ${service.name}`}
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
