"use client";

import * as React from "react";
import Link from "next/link";
import {
  Compass,
  ArrowDown,
  Layers,
  CheckCircle2,
  MessageSquare,
  Smartphone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Landmark,
  Globe,
  Cpu,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/data/services";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Badge, Eyebrow } from "@/components/ui/badge";
import { MobileNav } from "@/components/layout/mobile-nav";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

const categoryIcons: Record<string, React.ElementType> = {
  funding: Landmark,
  compliance: ShieldCheck,
  digital: Globe,
  it: Cpu,
};

export function Phase5Review() {
  const [scrollY, setScrollY] = React.useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [showWhatsAppDemo, setShowWhatsAppDemo] = React.useState(false);
  const mobileTriggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollDownForHeader = () => {
    window.scrollTo({
      top: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="space-y-8 bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 lg:p-10 shadow-card">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Eyebrow>Phase 5 Verification</Eyebrow>
            <Badge variant="accent">Global Shell Live</Badge>
          </div>
          <h2 className="type-h2 text-slate-900 mt-1">
            Global Layout & Navigation Review
          </h2>
          <p className="type-body text-slate-600 max-w-2xl mt-1.5">
            Test and inspect all deliverables built in Phase 5: the root layout shell, scroll-aware desktop header, active route indicators, services dropdown, mobile navigation drawer, comprehensive footer, and floating WhatsApp action.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollDownForHeader}
            leftIcon={<ArrowDown className="w-3.5 h-3.5" />}
          >
            Test Scroll Header
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={scrollToFooter}
          >
            Inspect Footer
          </Button>
        </div>
      </div>

      {/* Grid of Deliverables */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Scroll-Aware Header Card */}
        <Card variant="standard" className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <Badge variant={scrollY > 20 ? "primary" : "muted"}>
                {scrollY > 20 ? "Compact Glass (68px)" : "Lightweight (80px)"}
              </Badge>
            </div>
            <CardTitle className="mt-3">Scroll-Aware Header</CardTitle>
            <CardDescription>
              Dynamic transition between transparent top state and blurred glassmorphism on scroll.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-xs text-slate-500 font-mono bg-slate-50 p-2.5 rounded border border-slate-100 flex items-center justify-between">
              <span>Current scrollY:</span>
              <span className="font-semibold text-slate-800">{Math.round(scrollY)}px</span>
            </div>
            <p className="type-body-sm text-slate-600">
              When scrollY &gt; 20px, the header smoothly shifts to 68px height with a backdrop blur of 12px, a subtle bottom border, and micro-elevation.
            </p>
            <Button
              variant="outline"
              size="sm"
              fullWidth
              onClick={scrollDownForHeader}
            >
              Scroll to Trigger State
            </Button>
          </CardContent>
        </Card>

        {/* 2. Active Route & Nested Matching */}
        <Card variant="standard" className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-md bg-amber-50 text-gold-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <Badge variant="accent">Gold Indicator</Badge>
            </div>
            <CardTitle className="mt-3">Active Navigation States</CardTitle>
            <CardDescription>
              Precise route matching with gold bottom underline and nested path activation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="type-body-sm text-slate-600">
              Test nested route activation: visiting a nested child preserves its parent item as active in the navbar.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <LinkButton
                href="/services"
                variant="outline"
                size="sm"
              >
                /services
              </LinkButton>
              <LinkButton
                href="/services/cgtmse-funding"
                variant="primary"
                size="sm"
                title="Nested route keeps Services active"
              >
                /services/[slug]
              </LinkButton>
              <LinkButton
                href="/blog"
                variant="outline"
                size="sm"
              >
                /blog
              </LinkButton>
              <LinkButton
                href="/contact"
                variant="outline"
                size="sm"
              >
                /contact
              </LinkButton>
            </div>
          </CardContent>
        </Card>

        {/* 3. Mobile Navigation Drawer */}
        <Card variant="standard" className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <Badge variant="default">&lt; 1024px</Badge>
            </div>
            <CardTitle className="mt-3">Mobile Navigation Drawer</CardTitle>
            <CardDescription>
              Full-featured drawer with body scroll lock, focus trap, and touch targets &ge; 44px.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="type-body-sm text-slate-600">
              Opens on mobile viewports. You can test it directly on desktop by clicking the button below:
            </p>
            <Button
              ref={mobileTriggerRef}
              variant="secondary"
              size="sm"
              fullWidth
              onClick={() => setIsMobileNavOpen(true)}
              leftIcon={<Smartphone className="w-4 h-4" />}
            >
              Open Mobile Drawer
            </Button>
          </CardContent>
        </Card>

        {/* 4. Desktop Services Dropdown */}
        <Card variant="standard" className="md:col-span-2 lg:col-span-2 flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-teal-600" />
              </div>
              <Badge variant="primary">4 Core Categories</Badge>
            </div>
            <CardTitle className="mt-3">Services Discovery Dropdown</CardTitle>
            <CardDescription>
              Hover or click &quot;Services&quot; in the header above to inspect the curated desktop dropdown.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceCategories.map((cat) => {
                const Icon = categoryIcons[cat.id] || Landmark;
                return (
                  <Link
                    key={cat.id}
                    href={`/services#${cat.id}`}
                    className="p-3 rounded-lg border border-slate-100 bg-slate-50/60 hover:bg-teal-50/50 hover:border-teal-200 transition-colors flex items-start gap-3 group"
                  >
                    <div className="w-7 h-7 rounded bg-white text-teal-600 flex items-center justify-center shrink-0 shadow-subtle mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-xs text-slate-900 group-hover:text-teal-700 block">
                        {cat.name}
                      </span>
                      <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 block">
                        {cat.shortDescription}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>Includes escape key dismissal and outside click detection</span>
              <Link
                href="/services"
                className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1"
              >
                <span>View catalog</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 5. Floating WhatsApp Action Demo */}
        <Card variant="standard" className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <Badge variant={showWhatsAppDemo ? "success" : "muted"}>
                {showWhatsAppDemo ? "Active (Bottom-Right)" : "Null-Safe (Hidden)"}
              </Badge>
            </div>
            <CardTitle className="mt-3">WhatsApp Floating Action</CardTitle>
            <CardDescription>
              Strictly adheres to Single Source of Truth. If WhatsApp number is null, button safely hides.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="type-body-sm text-slate-600">
              Current production config: <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">siteConfig.contact.whatsapp = {String(siteConfig.contact.whatsapp)}</code>.
            </p>
            <Button
              variant={showWhatsAppDemo ? "destructive" : "accent"}
              size="sm"
              fullWidth
              onClick={() => setShowWhatsAppDemo(!showWhatsAppDemo)}
            >
              {showWhatsAppDemo ? "Hide WhatsApp Button" : "Preview WhatsApp Action"}
            </Button>
            {showWhatsAppDemo && (
              <p className="text-xs text-emerald-700 font-medium animate-in fade-in">
                ✓ Check the bottom-right corner of your screen for the floating WhatsApp button with hover tooltip!
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Checklist verification bar */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-6 flex-wrap">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Semantic &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Server / Client boundaries isolated
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Zero dead &quot;#&quot; links in Footer
          </span>
        </div>
        <div className="text-slate-400">
          Ready for Phase 6 (Home Page Experience)
        </div>
      </div>

      {/* Render Mobile Navigation when triggered via review button */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        triggerRef={mobileTriggerRef}
      />

      {/* Render WhatsApp button preview when toggled */}
      {showWhatsAppDemo && (
        <WhatsAppButton
          phoneNumber="+919876543210"
          defaultMessage="Hello Agnivridhi India, I am reviewing the Phase 5 website shell."
        />
      )}
    </section>
  );
}
