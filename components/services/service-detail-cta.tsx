import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/types/service";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn } from "@/components/shared/motion";

interface ServiceDetailCtaProps {
 service: Service;
}

export function ServiceDetailCta({ service }: ServiceDetailCtaProps) {
 return (
 <section
 aria-labelledby="service-cta-heading"
 className="py-18 sm:py-24 lg:py-28 bg-slate-950 text-white border-t border-slate-800/80 relative overflow-hidden"
 >
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
 >
 <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30" />
 <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-amber-500/10 rounded-full" />
 <div className="absolute -left-24 -top-24 w-96 h-96 bg-cyan-500/10 rounded-full" />
 </div>

 <Container width="wide" className="relative z-10">
 <FadeIn direction="up" distance={18} delay={0.05}>
 <div className="relative z-10 max-w-3xl space-y-6">
 <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80  border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <span>SPECIALIZED PRACTICE DIAGNOSTIC &bull; MANDATE ENGAGEMENT</span>
 </div>

 <h2
 id="service-cta-heading"
 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight"
 >
 Ready to structure your engagement for{" "}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 italic font-light">
 {service.name}?
 </span>
 </h2>

 <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
 Our senior consultants evaluate enterprise eligibility, financial projections, and
 documentation readiness to structure an institutional-grade pathway.
 </p>

 <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
 <span>Zero unverified outcome promises</span>
 </div>
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
 <span>Synchronized institutional execution</span>
 </div>
 </div>

 <div className="pt-4 flex flex-wrap items-center gap-5">
 <LinkButton
 href={`/contact?service=${encodeURIComponent(service.slug)}`}
 variant="primary"
 size="lg"
 className="rounded-full px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold border border-amber-300/40 shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 text-xs font-mono uppercase tracking-wider"
 >
 <span>Request Practice Diagnostic</span>
 <ArrowRight className="w-4 h-4 ml-2 text-slate-950" />
 </LinkButton>

 <Link
 href="/services"
 className="text-xs font-mono font-semibold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
 >
 <span>Explore All Practice Desks</span>
 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
