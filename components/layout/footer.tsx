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
    <footer className="relative overflow-hidden border-t border-purple-950/50 bg-[#0B0813] text-[#A5A29A] min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between">
      {/* Institutional Architectural Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none bg-[#0B0813]"
      >
        {/* Subtle geometric financial & CAD architectural grid */}
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#F3EFE7_1px,transparent_1px),linear-gradient(to_bottom,#F3EFE7_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Ambient brand glow whispers */}
        <div className="absolute -bottom-24 -right-16 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.10)_0%,transparent_70%)] blur-[120px] will-change-transform" />
        <div className="absolute -top-24 -left-16 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent_70%)] blur-[100px] will-change-transform" />
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
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] rounded-sm"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform duration-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo1.png"
                  alt="Agnivridhi India Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#F3EFE7] tracking-tight leading-none group-hover:text-[#C4B5FD] transition-colors">
                  {siteConfig.company.name.split(" ")[0]}
                </span>
                <span className="text-[11px] uppercase font-mono font-medium tracking-widest text-[#A855F7] leading-tight mt-1">
                  {siteConfig.company.name.split(" ").slice(1).join(" ") || "India"}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#A5A29A] font-sans leading-relaxed max-w-sm">
              {siteConfig.company.longDescription}
            </p>

            {/* Verified Location Stamp */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#8E8D86] pt-1">
              <MapPin className="w-4 h-4 text-[#A855F7] shrink-0" />
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
                      className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[#A5A29A] hover:text-[#C4B5FD] hover:border-[#A855F7]/50 flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
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
            <h3 className="text-xs uppercase font-mono font-medium tracking-widest text-[#F3EFE7]">
              Company
            </h3>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link
                  href="/about"
                  className="text-[#A5A29A] hover:text-[#C4B5FD] transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-[#A5A29A] hover:text-[#C4B5FD] transition-colors inline-block"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#A5A29A] hover:text-[#C4B5FD] transition-colors inline-block"
                >
                  Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#A5A29A] hover:text-[#C4B5FD] transition-colors inline-block"
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
            <h3 className="text-xs uppercase font-mono font-medium tracking-widest text-[#F3EFE7]">
              Advisory Services
            </h3>
            <ul className="space-y-3 text-sm font-sans">
              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/services#${category.id}`}
                    className="text-[#A5A29A] hover:text-[#C4B5FD] transition-colors flex items-center gap-1 group"
                  >
                    <span>{category.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A855F7]" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/services"
                  className="text-xs font-mono font-medium text-[#A855F7] hover:text-[#C4B5FD] uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
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
            <h3 className="text-xs uppercase font-mono font-medium tracking-widest text-[#F3EFE7]">
              Advisory Desk
            </h3>
            <div className="space-y-3.5 text-sm font-sans text-[#A5A29A]">
              {/* Address */}
              {addressParts.length > 0 && (
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {addressParts.join(", ")}
                  </span>
                </div>
              )}

              {/* Phone */}
              {siteConfig.contact.phone && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#A855F7] shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-[#F3EFE7] hover:text-[#C4B5FD] transition-colors font-mono text-xs"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              )}

              {/* Email */}
              {siteConfig.contact.email && (
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#A855F7] shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[#F3EFE7] hover:text-[#C4B5FD] transition-colors font-mono text-xs"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              )}

              {/* WhatsApp */}
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
                    className="text-[#F3EFE7] hover:text-[#25D366] transition-colors font-mono text-xs"
                  >
                    WhatsApp Business
                  </a>
                </div>
              )}

              {/* Consultation availability note */}
              <div className="pt-2.5 border-t border-purple-950/50 text-xs text-[#8E8D86] font-mono leading-relaxed">
                Advising MSMEs, manufacturing enterprises, and emerging startups across India.
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================
            BOTTOM BAR: Copyright & Legal Navigation
            ========================================================== */}
        <div className="mt-20 pt-8 border-t border-purple-950/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E8D86]">
          <p>
            &copy; {currentYear} {siteConfig.company.name}. All rights reserved.
          </p>

          <nav aria-label="Legal Navigation" className="flex items-center gap-6">
            {siteConfig.navigation.legalNav.map((legalItem) => (
              <Link
                key={legalItem.href}
                href={legalItem.href}
                className="hover:text-[#F3EFE7] transition-colors"
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
