"use client";

import * as React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/data/services";
import { Container } from "@/components/shared/container";

interface SocialLinkDefinition {
  name: string;
  href: string | null;
  icon: LucideIcon;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Social links configuration with strict null-checks (zero '#' or dead links)
  const socialCandidates: SocialLinkDefinition[] = [
    {
      name: "LinkedIn",
      href: siteConfig.socials.linkedin,
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: siteConfig.socials.instagram,
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: siteConfig.socials.facebook,
      icon: Facebook,
    },
    {
      name: "YouTube",
      href: siteConfig.socials.youtube,
      icon: Youtube,
    },
    {
      name: "Twitter / X",
      href: siteConfig.socials.twitter,
      icon: Twitter,
    },
  ];

  const activeSocials = socialCandidates.filter(
    (item): item is SocialLinkDefinition & { href: string } =>
      typeof item.href === "string" &&
      item.href.trim() !== "" &&
      item.href !== "#"
  );

  // Address formatted cleanly from single source of truth
  const addressParts = [
    siteConfig.contact.address.street,
    siteConfig.contact.address.city,
    siteConfig.contact.address.state,
    siteConfig.contact.address.postalCode,
    siteConfig.contact.address.country,
  ].filter(Boolean);

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-slate-100 text-slate-800 min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between">
      {/* Institutional Architectural Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none bg-slate-100"
      >
        {/* Subtle geometric financial & CAD architectural grid */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Soft atmospheric radial gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-slate-100/40 to-slate-200/60" />

        {/* Ambient brand glow whispers */}
        <div className="absolute -bottom-24 -right-16 h-[450px] w-[450px] rounded-full bg-teal-500/10 blur-[120px] will-change-transform" />
        <div className="absolute -top-24 -left-16 h-[400px] w-[400px] rounded-full bg-gold-500/10 blur-[100px] will-change-transform" />
      </div>

      <Container width="wide" className="page-gutters relative z-10 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 flex flex-col flex-1 justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* ==========================================================
              COLUMN 1: Brand & Strategic Positioning (Span 4)
              ========================================================== */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              aria-label="Agnivridhi India - Home"
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-sm"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-subtle group-hover:scale-105 transition-transform duration-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo1.png"
                  alt="Agnivridhi India Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-slate-950 tracking-tight leading-none group-hover:text-teal-700 transition-colors">
                  {siteConfig.company.name.split(" ")[0]}
                </span>
                <span className="text-[11px] uppercase font-sans font-bold tracking-widest text-teal-800 leading-tight mt-0.5">
                  {siteConfig.company.name.split(" ").slice(1).join(" ") || "India"}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-700 font-sans font-medium leading-relaxed max-w-sm">
              {siteConfig.company.longDescription}
            </p>

            {/* Verified Location Stamp */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-700 pt-1">
              <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
              <span>
                {siteConfig.company.location.city},{" "}
                {siteConfig.company.location.state},{" "}
                {siteConfig.company.location.country}
              </span>
            </div>

            {/* Verified Social Links (Renders ONLY if real URLs are configured) */}
            {activeSocials.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {activeSocials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Agnivridhi India on ${social.name}`}
                      className="w-9 h-9 rounded-lg bg-white/80 hover:bg-white border border-slate-200/90 text-slate-700 hover:text-teal-700 hover:border-teal-400/50 shadow-subtle flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* ==========================================================
              COLUMN 2: Company Navigation (Span 2)
              ========================================================== */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase font-sans font-bold tracking-widest text-slate-950">
              Company
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link
                  href="/about"
                  className="text-slate-700 hover:text-teal-800 transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-slate-700 hover:text-teal-800 transition-colors inline-block"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-700 hover:text-teal-800 transition-colors inline-block"
                >
                  Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-teal-800 transition-colors inline-block"
                >
                  Contact Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* ==========================================================
              COLUMN 3: Services Categories (Span 3)
              ========================================================== */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase font-sans font-bold tracking-widest text-slate-950">
              Advisory Services
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/services#${category.id}`}
                    className="text-slate-700 hover:text-teal-800 transition-colors flex items-center gap-1 group"
                  >
                    <span>{category.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal-700" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/services"
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>View All 24+ Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* ==========================================================
              COLUMN 4: Verified Contact / Advisory Desk (Span 3)
              ========================================================== */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase font-sans font-bold tracking-widest text-slate-950">
              Advisory Desk
            </h3>
            <div className="space-y-3.5 text-sm text-slate-700 font-medium">
              {/* Address (Only rendered if components exist) */}
              {addressParts.length > 0 && (
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {addressParts.join(", ")}
                  </span>
                </div>
              )}

              {/* Phone (Only rendered if verified non-null) */}
              {siteConfig.contact.phone && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-slate-800 hover:text-teal-700 transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              )}

              {/* Email (Only rendered if verified non-null) */}
              {siteConfig.contact.email && (
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-slate-800 hover:text-teal-700 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              )}

              {/* WhatsApp (Only rendered if verified non-null) */}
              {siteConfig.contact.whatsapp && (
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(
                      /[^0-9]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-emerald-700 transition-colors"
                  >
                    WhatsApp Business
                  </a>
                </div>
              )}

              {/* Consultation availability note */}
              <div className="pt-2.5 border-t border-slate-300/70 text-xs text-slate-600 leading-relaxed font-normal">
                Advising MSMEs, manufacturing enterprises, and emerging startups across India.
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================
            BOTTOM BAR: Copyright & Legal Navigation
            ========================================================== */}
        <div className="mt-20 pt-8 border-t border-slate-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
          <p>
            &copy; {currentYear} {siteConfig.company.name}. All rights reserved.
          </p>

          <nav aria-label="Legal Navigation" className="flex items-center gap-6">
            {siteConfig.navigation.legalNav.map((legalItem) => (
              <Link
                key={legalItem.href}
                href={legalItem.href}
                className="hover:text-teal-900 transition-colors"
              >
                {legalItem.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
