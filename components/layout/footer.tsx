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
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80">
      <Container width="wide" className="page-gutters py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* ==========================================================
              COLUMN 1: Brand & Strategic Positioning (Span 4)
              ========================================================== */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              aria-label="Agnivridhi India - Home"
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-sm"
            >
              <div className="w-9 h-9 rounded-md bg-teal-600 text-white flex items-center justify-center font-serif font-bold text-lg shadow-subtle group-hover:bg-teal-500 transition-colors">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-lg text-white tracking-tight leading-none">
                  {siteConfig.company.name.split(" ")[0]}
                </span>
                <span className="text-[11px] uppercase font-sans font-semibold tracking-widest text-gold-500 leading-tight mt-0.5">
                  {siteConfig.company.name.split(" ").slice(1).join(" ") || "India"}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-sm">
              {siteConfig.company.longDescription}
            </p>

            {/* Verified Location Stamp */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
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
                      className="w-8 h-8 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
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
            <h3 className="text-xs uppercase font-sans font-semibold tracking-widest text-slate-200">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
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
            <h3 className="text-xs uppercase font-sans font-semibold tracking-widest text-slate-200">
              Advisory Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/services#${category.id}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{category.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal-400" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>View All 24+ Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* ==========================================================
              COLUMN 4: Verified Contact / Advisory Desk (Span 3)
              ========================================================== */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase font-sans font-semibold tracking-widest text-slate-200">
              Advisory Desk
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              {/* Address (Only rendered if components exist) */}
              {addressParts.length > 0 && (
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {addressParts.join(", ")}
                  </span>
                </div>
              )}

              {/* Phone (Only rendered if verified non-null) */}
              {siteConfig.contact.phone && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              )}

              {/* Email (Only rendered if verified non-null) */}
              {siteConfig.contact.email && (
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors"
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
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Business
                  </a>
                </div>
              )}

              {/* Consultation availability note */}
              <div className="pt-2 border-t border-slate-900 text-xs text-slate-500 leading-relaxed">
                Advising MSMEs, manufacturing enterprises, and emerging startups across India.
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================
            BOTTOM BAR: Copyright & Legal Navigation
            ========================================================== */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {siteConfig.company.name}. All rights reserved.
          </p>

          <nav aria-label="Legal Navigation" className="flex items-center gap-6">
            {siteConfig.navigation.legalNav.map((legalItem) => (
              <Link
                key={legalItem.href}
                href={legalItem.href}
                className="hover:text-slate-300 transition-colors"
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
