import * as React from "react";
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
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn } from "@/components/shared/motion";
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
    numeral: string;
    label: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    iconText: string;
  }
> = {
  funding: {
    numeral: "01",
    label: "Government & Business Funding",
    badgeBg: "bg-gold-50 border-gold-200/90",
    badgeText: "text-gold-900",
    iconBg: "bg-gold-50 border-gold-200 text-gold-800",
    iconText: "text-gold-800",
  },
  compliance: {
    numeral: "02",
    label: "Compliance & Certifications",
    badgeBg: "bg-teal-50 border-teal-200/90",
    badgeText: "text-teal-900",
    iconBg: "bg-teal-50 border-teal-200 text-teal-800",
    iconText: "text-teal-800",
  },
  digital: {
    numeral: "03",
    label: "Digital Transformation",
    badgeBg: "bg-cyan-50 border-cyan-200/90",
    badgeText: "text-cyan-900",
    iconBg: "bg-cyan-50 border-cyan-200 text-cyan-800",
    iconText: "text-cyan-800",
  },
  it: {
    numeral: "04",
    label: "Custom Software & IT Services",
    badgeBg: "bg-slate-100 border-slate-200",
    badgeText: "text-slate-900",
    iconBg: "bg-slate-100 border-slate-200 text-slate-800",
    iconText: "text-slate-800",
  },
};

interface ServiceDetailHeroProps {
  service: Service;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const IconComponent = (service.icon && iconMap[service.icon]) || Landmark;
  const theme = categoryTheme[service.category] || categoryTheme.funding;

  return (
    <section
      aria-labelledby="service-detail-heading"
      className="relative border-b border-slate-200/80 bg-slate-50/70 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container width="wide">
        <div className="max-w-4xl space-y-6">
          {/* Category Eyebrow & Badges */}
          <FadeIn direction="up" distance={14} delay={0.05}>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span
                className={cn(
                  "font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border",
                  theme.badgeBg,
                  theme.badgeText
                )}
              >
                PRACTICE {theme.numeral} &bull; {service.category.toUpperCase()}
              </span>

              {service.featured && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-medium uppercase tracking-wider bg-white border border-slate-200 text-slate-700 shadow-xs">
                  Core Scheme
                </span>
              )}

              {service.timeline && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-sans text-slate-600 bg-white border border-slate-200 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                  <span className="line-clamp-1">{service.timeline}</span>
                </span>
              )}
            </div>
          </FadeIn>

          {/* Service Title */}
          <FadeIn direction="up" distance={16} delay={0.1}>
            <div className="flex items-start gap-4 sm:gap-5">
              <div
                className={cn(
                  "w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border shrink-0 shadow-xs mt-1",
                  theme.iconBg
                )}
                aria-hidden="true"
              >
                <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="space-y-3">
                <h1
                  id="service-detail-heading"
                  className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]"
                >
                  {service.name}
                </h1>
                <p className="type-body-lg text-slate-600 font-sans leading-relaxed max-w-3xl">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn direction="up" distance={16} delay={0.15}>
            <div className="pt-2 sm:pl-[68px] flex flex-wrap items-center gap-4">
              <LinkButton
                href={`/contact?service=${encodeURIComponent(service.slug)}`}
                variant="primary"
                size="lg"
                className="shadow-glow-teal"
              >
                <span>Initiate Advisory Inquiry</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </LinkButton>

              {service.process && service.process.length > 0 && (
                <a
                  href="#engagement-roadmap"
                  className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors underline-offset-4 hover:underline px-2 py-1"
                >
                  View Execution Roadmap &darr;
                </a>
              )}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
