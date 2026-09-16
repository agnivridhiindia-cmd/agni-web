import * as React from "react";
import { MapPin, Building2, Layers } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/motion";

export function AboutHero() {
 return (
 <section
 aria-labelledby="about-hero-heading"
 className="relative border-b border-slate-700/60 text-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-[radial-gradient(circle_at_15%_25%,_rgba(245,158,11,0.12),transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_50%_90%,_rgba(14,116,144,0.12),transparent_42%),linear-gradient(180deg,#0B1329_0%,#0F1A34_45%,#0B1329_100%)]"
 >
 {/* Editorial Luxury Ambient Gradient & Blueprint Vector Grid */}
 <div
 className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
 aria-hidden="true"
 >
 <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#06B6D4_1px,transparent_1px),linear-gradient(to_bottom,#06B6D4_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_50%,#000_65%,transparent_100%)]" />
 <div className="absolute -top-20 right-[-5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18)_0%,rgba(14,116,144,0.08)_45%,transparent_70%)]" />
 <div className="absolute top-[38%] left-[-12%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.15)_0%,rgba(217,119,6,0.06)_45%,transparent_72%)]" />
 <div className="absolute top-8 left-8 font-mono text-xs text-amber-500/30 select-none">+</div>
 <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400/30 select-none">+</div>
 </div>

 <Container width="wide" className="relative z-10">
 <FadeIn direction="up" distance={20} delay={0.05}>
 <div className="max-w-4xl space-y-6 sm:space-y-8">
 {/* Section Eyebrow */}
 <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/90  border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <span>ABOUT AGNIVRIDHI INDIA &bull; INSTITUTIONAL ADVISORY</span>
 </div>

 {/* Main Editorial Headline */}
 <h1
 id="about-hero-heading"
 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]"
 >
 A Strategic Advisory Desk Built for{" "}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold font-heading">
 Indian Enterprise Momentum.
 </span>
 </h1>

 {/* Supporting Positioning Paragraphs */}
 <div className="space-y-4 max-w-3xl text-slate-300 font-sans">
 <p className="type-body-lg leading-relaxed text-slate-200">
 Headquartered in Noida, Uttar Pradesh, Agnivridhi India operates with a single guiding conviction: micro, small, and medium enterprises represent the real sovereign growth engine of India, yet routinely encounter friction when navigating institutional credit appraisal and statutory compliance.
 </p>
 <p className="type-body leading-relaxed text-slate-400">
 We eliminate that friction through audit-grade financial modeling, rigorous Detailed Project Report (DPR) formulations, and deep regulatory literacy across central credit guarantee schemes and quality standards.
 </p>
 </div>

 {/* Corporate Metadata Pill Strip */}
 <div className="pt-6 flex items-center gap-4 sm:gap-6 flex-wrap text-xs text-slate-400 font-mono border-t border-slate-800/80">
 <div className="flex items-center gap-2">
 <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
 <span className="text-slate-300">
 {siteConfig.company.location.city}, {siteConfig.company.location.state}
 </span>
 </div>

 <div className="flex items-center gap-2">
 <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
 <span className="text-slate-300">Pan-India MSME &amp; Industrial Scope</span>
 </div>

 <div className="flex items-center gap-2">
 <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
 <span className="text-slate-300">4 Dedicated Advisory Desks</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
