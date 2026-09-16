import { Sparkles, Layers } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/motion";

interface BlogHeroProps {
 totalArticles?: number;
}

export function BlogHero({ totalArticles }: BlogHeroProps) {
 return (
 <section
 aria-labelledby="blog-hero-heading"
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
 {/* Eyebrow & Badges */}
 <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
 <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/90  border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-xs">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <span>INSIGHTS &amp; SERVICES &bull; STRATEGIC ADVISORY</span>
 </div>

 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-xs">
 <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" aria-hidden="true" />
 <span>4 Practice Desks &bull; 19 Programs</span>
 </span>
 </div>

 {/* Headline */}
 <h1
 id="blog-hero-heading"
 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]"
 >
 Strategic Solutions &amp; Insights Built for{" "}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold font-heading">
 Enterprise Momentum.
 </span>
 </h1>

 {/* Subtitle */}
 <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-3xl">
              Explore government funding schemes (CGTMSE, MUDRA, PMEGP), statutory certifications,
              and high-performance technology solutions curated for Indian MSMEs, manufacturers, and startup founders.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

