"use client";

import * as React from "react";
import {
  Landmark,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  FileCheck2,
  Building,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { Eyebrow, Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { CtaArrow } from "@/components/ui/cta-arrow";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FadeIn, CardTilt } from "@/components/shared/motion";

export function Hero() {
  const { location, name } = siteConfig.company;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24 lg:pt-36 lg:pb-32 bg-slate-50/70 bg-noise border-b border-slate-200/70"
    >
      {/* 1. Atmospheric Ambient Lighting & Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Soft Teal Radial Aura - Top Right */}
        <div className="absolute -top-32 right-[-10%] h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px] will-change-transform" />

        {/* Soft Burnished Gold Ambient Whisper - Bottom Left */}
        <div className="absolute -bottom-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-gold-500/8 blur-[100px] will-change-transform" />

        {/* Fine Architectural Grid Pattern with Radial Gradient Fade */}
        <div
          className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
        />
      </div>

      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ============================================================
              LEFT COLUMN: Editorial Brand Authority & Direct Conversion
              ============================================================ */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Category Eyebrow */}
            <FadeIn direction="none" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-subtle max-w-full">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse shrink-0" />
                <Eyebrow accent className="text-[10px] sm:text-[11px] tracking-wider sm:tracking-widest text-slate-700 truncate">
                  GOVERNMENT SCHEMES • CGTMSE FUNDING • COMPLIANCE • GROWTH
                </Eyebrow>
              </div>
            </FadeIn>

            {/* Primary Headline (Single <h1>) */}
            <FadeIn direction="up" distance={16} delay={0.12}>
              <h1
                id="hero-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-slate-950 leading-[1.14]"
              >
                Catalyzing Enterprise Scale Through{" "}
                <span className="text-teal-700 italic font-serif relative inline-block">
                  Sovereign Capital
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-teal-600/80 to-teal-400/20 rounded-full"
                  />
                </span>{" "}
                &amp;{" "}
                <span className="text-gold-600 font-serif">Compliance</span>.
              </h1>
            </FadeIn>

            {/* Supporting Value Proposition */}
            <FadeIn direction="up" distance={16} delay={0.22}>
              <p className="type-body-lg text-slate-600 max-w-2xl leading-relaxed">
                {name} empowers micro, small, and mid-market enterprises across India with collateral-free debt structuring under central guarantee schemes, statutory certifications, and modern digital governance—delivered with institutional rigor from {location.city}, {location.country}.
              </p>
            </FadeIn>

            {/* Action CTAs */}
            <FadeIn direction="up" distance={16} delay={0.32}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                {/* Primary Conversion CTA with opt-in magnetic pull */}
                <MagneticButton strength={0.18} maxOffset={6}>
                  <LinkButton
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="shadow-card hover:shadow-glow-teal font-medium group text-base px-7 h-12"
                  >
                    <span>Schedule Scheme Appraisal</span>
                    <Sparkles className="w-4 h-4 ml-2 text-teal-200 group-hover:rotate-12 transition-transform duration-200" />
                  </LinkButton>
                </MagneticButton>

                {/* Secondary Exploration Link with micro-arrow */}
                <LinkButton
                  href="/services"
                  variant="glass"
                  size="lg"
                  className="font-medium text-base px-6 h-12 border-slate-200/90 text-slate-800 hover:text-teal-800 hover:border-teal-400/50 group"
                >
                  <span>Explore Advisory Catalog</span>
                  <CtaArrow className="w-4 h-4 ml-2 text-slate-500 group-hover:text-teal-600" />
                </LinkButton>
              </div>
            </FadeIn>

            {/* Verified Trust Micro-Signals */}
            <FadeIn direction="up" distance={14} delay={0.42}>
              <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-sans">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Liaison with Public &amp; Private Scheduled Banks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Upfront Real Estate Collateral Mandates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Headquartered in {location.city}, {location.state}</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Abstract Capital & Compliance Growth Matrix
              (CSS-crafted, zero cheesy stock photos or generic blobs)
              ============================================================ */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" distance={20} delay={0.28}>
              <CardTilt maxTilt={2.5}>
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  {/* Decorative Subtle Backdrop Blur Ring */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-teal-500/20 via-slate-200/40 to-gold-500/20 blur-lg opacity-70"
                  />

                  {/* Main Architectural Glass Container */}
                  <div className="relative rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-elevated p-6 sm:p-7 space-y-6">
                    {/* Header Bar */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-md bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 shadow-subtle">
                          <Landmark className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 block leading-tight">
                            Institutional Advisory Desk
                          </span>
                          <span className="text-[11px] text-slate-500 block">
                            MSME Credit Guarantee &amp; Compliance Matrix
                          </span>
                        </div>
                      </div>
                      <Badge variant="glass-teal" className="text-[10px] font-mono">
                        Active Docket
                      </Badge>
                    </div>

                    {/* Matrix Element 1: Sovereign Debt Structure */}
                    <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-2.5 hover:border-teal-300/80 transition-colors">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-teal-600" />
                          CGTMSE Guarantee Structuring
                        </span>
                        <span className="font-mono font-bold text-teal-700">Up to ₹5 Cr</span>
                      </div>
                      <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-teal-600 h-full w-[85%] rounded-full" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-sans">
                        <span>Cover: Up to 85% sovereign risk backstop</span>
                        <span className="text-emerald-700 font-medium">Collateral-Free</span>
                      </div>
                    </div>

                    {/* Matrix Element 2: Statutory Compliance Readiness */}
                    <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-2.5 hover:border-gold-300/80 transition-colors">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                          Statutory &amp; Quality Accreditations
                        </span>
                        <Badge variant="outline" className="text-[10px] bg-white">
                          ISO • ZED • CE
                        </Badge>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                        Standardized quality management systems, audit preparedness, and export-grade regulatory alignment.
                      </p>
                    </div>

                    {/* Matrix Element 3: 4 Core Advisory Verticals */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <div className="p-2.5 rounded-lg border border-slate-100 bg-white/60 text-xs flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                          <TrendingUp className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium text-slate-800 text-[11px]">DPR Financials</span>
                      </div>
                      <div className="p-2.5 rounded-lg border border-slate-100 bg-white/60 text-xs flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gold-50 text-gold-700 flex items-center justify-center shrink-0">
                          <FileCheck2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium text-slate-800 text-[11px]">Subsidy Claims</span>
                      </div>
                    </div>

                    {/* Bottom Status Ribbon */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Consultation Desk Open
                      </span>
                      <LinkButton
                        href="/services/cgtmse-funding"
                        variant="link"
                        size="sm"
                        className="text-teal-700 font-semibold text-xs p-0 inline-flex items-center gap-0.5 group"
                      >
                        <span>View Scheme Terms</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </CardTilt>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
