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
 Smartphone,
 Cloud,
 Bot,
 Palette,
 ArrowRight,
 Clock,
 type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types/service";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn } from "@/components/shared/motion";

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

const categoryNumeral: Record<string, string> = {
 funding: "01",
 compliance: "02",
 digital: "03",
 it: "04",
};

interface ServiceDetailHeroProps {
 service: Service;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
 const IconComponent = (service.icon && iconMap[service.icon]) || Landmark;
 const numeral = categoryNumeral[service.category] || "01";

 return (
 <section
 aria-labelledby="service-detail-heading"
 className="relative border-b border-slate-800/80 bg-slate-950 text-white py-12 sm:py-16 lg:py-20 overflow-hidden"
 >
 {/* Ambient background vector watermark & lighting */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
 >
 <div className="absolute inset-0 bg-blueprint-grid opacity-20 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_65%,transparent_100%)]" />
 <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full" />
 <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full" />
 </div>

 <Container width="wide" className="relative z-10">
 <div className="max-w-4xl space-y-6">
 {/* Category Eyebrow & Badges */}
 <FadeIn direction="up" distance={14} delay={0.05}>
 <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80  border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <span>PRACTICE {numeral} &bull; {service.category.toUpperCase()}</span>
 </div>

 {service.featured && (
 <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-medium uppercase tracking-wider bg-amber-950/60 border border-amber-500/40 text-amber-300 shadow-xs">
 Core Scheme
 </span>
 )}

 {service.timeline && (
 <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-700/60 shadow-xs">
 <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
 <span className="line-clamp-1">{service.timeline}</span>
 </span>
 )}
 </div>
 </FadeIn>

 {/* Service Title */}
 <FadeIn direction="up" distance={16} delay={0.1}>
 <div className="flex items-start gap-4 sm:gap-5">
 <div
 className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border border-amber-500/40 bg-amber-950/60 text-amber-400 shrink-0 shadow-xs mt-1"
 aria-hidden="true"
 >
 <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
 </div>
 <div className="space-y-3">
 <h1
 id="service-detail-heading"
 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.15]"
 >
 {service.name}
 </h1>
 <p className="text-slate-300 font-sans leading-relaxed text-base sm:text-lg max-w-3xl">
 {service.shortDescription}
 </p>
 </div>
 </div>
 </FadeIn>

 {/* Action CTAs */}
 <FadeIn direction="up" distance={16} delay={0.15}>
 <div className="pt-2 sm:pl-[68px] flex flex-wrap items-center gap-5">
 <LinkButton
 href={`/contact?service=${encodeURIComponent(service.slug)}`}
 variant="primary"
 size="lg"
 className="rounded-full px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold border border-amber-300/40 shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 text-xs font-mono uppercase tracking-wider"
 >
 <span>Initiate Advisory Inquiry</span>
 <ArrowRight className="w-4 h-4 ml-2 text-slate-950" />
 </LinkButton>

 {service.process && service.process.length > 0 && (
 <a
 href="#engagement-roadmap"
 className="text-xs font-mono font-semibold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>View Execution Roadmap</span>
                  <span>&darr;</span>
                </a>
              )}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
