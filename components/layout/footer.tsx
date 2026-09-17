"use client";

import * as React from "react";
import Image from "next/image";
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
 ArrowRight,
 ExternalLink,
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
 const [showInteractiveMap, setShowInteractiveMap] = React.useState(false);

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
 <footer className="relative min-h-[620px] sm:min-h-[690px] lg:min-h-[750px] overflow-hidden border-t border-slate-800/80 bg-[#0B0F17] text-slate-400 flex flex-col justify-between">
 {/* Institutional Architectural Backdrop in Dark Mode */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
 >
 {/* Geometric CAD & financial architectural grid */}
 <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#38BDF8_1px,transparent_1px),linear-gradient(to_bottom,#38BDF8_1px,transparent_1px)] [background-size:28px_28px]" />

 {/* Ambient brand glow whispers */}
 <div className="absolute -bottom-24 -right-16 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.16)_0%,rgba(8,145,178,0.02)_45%,transparent_70%)]" />
 <div className="absolute -top-24 -left-16 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.08)_0%,rgba(34,211,238,0.01)_45%,transparent_70%)]" />
 </div>

 <Container width="wide" className="page-gutters relative z-10 pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16 flex flex-col flex-1 justify-between">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
 {/* ==========================================================
 COLUMN 1: Brand, Location & Map (Span 4)
 ========================================================== */}
 <div className="lg:col-span-4 space-y-4">
 <Link
 href="/"
 aria-label="Agnivridhi India - Home"
 className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm"
 >
 <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 group-hover:scale-105 transition-all duration-200">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src="/logo1.png"
 alt="Agnivridhi India Logo"
 className="w-full h-full object-contain"
 />
 </div>
 <div className="flex flex-col">
 <span className="font-serif text-xl sm:text-2xl text-white tracking-tight leading-none group-hover:text-[#22D3EE] transition-colors">
 {siteConfig.company.name.split(" ")[0]}
 </span>
 <span className="text-[11px] uppercase font-mono font-medium tracking-widest text-[#22D3EE] leading-tight mt-1">
 {siteConfig.company.name.split(" ").slice(1).join(" ") || "India"}
 </span>
 </div>
 </Link>

 <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-sm">
 {siteConfig.company.longDescription}
 </p>

 {/* Verified Location Stamp */}
 <div className="flex items-center gap-2 text-xs font-mono text-slate-300 pt-1">
 <MapPin className="w-4 h-4 text-[#22D3EE] shrink-0" />
 <span>
 {siteConfig.company.location.city},{" "}
 {siteConfig.company.location.state},{" "}
 {siteConfig.company.location.country}
 </span>
 </div>

  {/* Clean Location Map: Pinpointed to The IThum, Sector 62, Noida */}
  <div className="pt-2 w-full max-w-sm sm:max-w-md">
    <div className="relative w-full h-60 sm:h-64 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-lg [transform:translateZ(0)] group">
      {showInteractiveMap ? (
        <>
          <iframe
            title="Agnivridhi India Office - The IThum, Sector 62, Noida"
            aria-hidden="true"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.3680%2C28.6240%2C77.3770%2C28.6310&layer=mapnik&marker=28.6276%2C77.3725"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            className="w-full h-full"
          />

          {/* Top Actions when Live Map is Active */}
          <div className="absolute top-2.5 inset-x-2.5 z-20 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Live Map View</span>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setShowInteractiveMap(false)}
                className="px-2.5 py-1 rounded-md bg-slate-900/95 hover:bg-slate-800 text-slate-300 hover:text-white text-[10px] font-mono border border-slate-700 shadow-sm transition-colors cursor-pointer"
              >
                Close Map
              </button>
              <a
                href="https://www.google.com/maps/search/?api=1&query=The+IThum,+Tower+B,+Sector+62,+Noida,+Uttar+Pradesh+201301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0891B2] hover:bg-cyan-500 text-white text-[10px] font-mono shadow-sm transition-colors cursor-pointer"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Static Map Picture provided by user */}
          <Image
            src="/img/office-map-preview.png"
            alt="Office Location - Ithum Tower B, Sector 62 Noida"
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Subtle Bottom & Top Gradient for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/95 via-[#0B0F17]/25 to-[#0B0F17]/40 pointer-events-none" />

          {/* Top Row Badge */}
          <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-700/90 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>The IThum &bull; Tower B</span>
            </span>
          </div>

          {/* Bottom Action Bar */}
          <div className="absolute bottom-2.5 inset-x-2.5 z-20 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setShowInteractiveMap(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/95 hover:bg-[#0891B2] text-white text-xs font-mono font-medium border border-slate-700 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Open interactive map"
            >
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open Map</span>
            </button>

            <a
              href="https://www.google.com/maps/search/?api=1&query=The+IThum,+Tower+B,+Sector+62,+Noida,+Uttar+Pradesh+201301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/90 hover:bg-cyan-500 text-white text-xs font-mono font-medium border border-cyan-400/60 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Open office location in Google Maps"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </>
      )}
    </div>
  </div>
 </div>

 {/* ==========================================================
 COLUMN 2: Company Navigation (Span 2)
 ========================================================== */}
 <div className="lg:col-span-2 space-y-4">
 <h3 className="text-xs uppercase font-mono font-semibold tracking-widest text-slate-200">
 Company
 </h3>
 <ul className="space-y-3 text-sm font-sans">
 <li>
 <Link
 href="/about"
 className="text-slate-400 hover:text-[#22D3EE] transition-colors inline-block"
 >
 About Us
 </Link>
 </li>
 <li>
 <Link
 href="/success-stories"
 className="text-slate-400 hover:text-[#22D3EE] transition-colors inline-block"
 >
 Success Stories
 </Link>
 </li>
 <li>
 <Link
 href="/blog"
 className="text-slate-400 hover:text-[#22D3EE] transition-colors inline-block"
 >
 Insights &amp; Blog
 </Link>
 </li>
 <li>
 <Link
 href="/faq"
 className="text-slate-400 hover:text-[#22D3EE] transition-colors inline-block"
 >
 Frequently Asked Questions (FAQ)
 </Link>
 </li>
 <li>
 <Link
 href="/contact"
 className="text-slate-400 hover:text-[#22D3EE] transition-colors inline-block"
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
 <h3 className="text-xs uppercase font-mono font-semibold tracking-widest text-slate-200">
 Advisory Services
 </h3>
 <ul className="space-y-3 text-sm font-sans">
 {serviceCategories.map((category) => (
 <li key={category.id}>
 <Link
 href={`/services#${category.id}`}
 className="text-slate-400 hover:text-[#22D3EE] transition-colors flex items-center gap-1 group"
 >
 <span>{category.name}</span>
 <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#22D3EE]" />
 </Link>
 </li>
 ))}
 <li className="pt-2">
 <Link
 href="/services"
 className="text-xs font-mono font-medium text-[#22D3EE] hover:text-[#38BDF8] uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
 >
 <span>View All Advisory Programs</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </li>
 </ul>
 </div>

 {/* ==========================================================
 COLUMN 4: Verified Contact / Advisory Desk & Socials (Span 3)
 ========================================================== */}
 <div className="lg:col-span-3 space-y-4">
 <h3 className="text-xs uppercase font-mono font-semibold tracking-widest text-slate-200">
 Advisory Desk
 </h3>
 <div className="space-y-3.5 text-sm font-sans text-slate-400">
 {/* Address */}
 {addressParts.length > 0 && (
 <div className="flex items-start gap-2.5">
 <MapPin className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
 <span className="leading-relaxed">
 {addressParts.join(", ")}
 </span>
 </div>
 )}

 {/* Phone */}
 {siteConfig.contact.phone && (
 <div className="flex items-center gap-2.5">
 <Phone className="w-4 h-4 text-[#22D3EE] shrink-0" />
 <a
 href={`tel:${siteConfig.contact.phone}`}
 className="text-slate-300 hover:text-[#22D3EE] transition-colors font-mono text-xs"
 >
 {siteConfig.contact.phone}
 </a>
 </div>
 )}

 {/* Email */}
 {siteConfig.contact.email && (
 <div className="flex items-center gap-2.5">
 <Mail className="w-4 h-4 text-[#22D3EE] shrink-0" />
 <a
 href={`mailto:${siteConfig.contact.email}`}
 className="text-slate-300 hover:text-[#22D3EE] transition-colors font-mono text-xs"
 >
 {siteConfig.contact.email}
 </a>
 </div>
 )}

 {/* Consultation availability note */}
 <div className="pt-2.5 border-t border-slate-800 text-xs text-slate-400 font-mono leading-relaxed">
 Advising MSMEs, manufacturing enterprises, and emerging startups across India.
 </div>

 {/* Verified Social Links - Moved under Advisory Desk */}
 {activeSocials.length > 0 && (
 <div className="pt-3 border-t border-slate-800 space-y-2">
 <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-medium">
 Connect With Us
 </p>
 <div className="flex items-center gap-2.5">
 {activeSocials.map((social) => {
 const Icon = social.icon;
          const brandIconClasses =
            social.name === "LinkedIn" ||
            social.name === "Facebook"
              ? "group-hover:fill-current"
              : "";
          const brandHoverClasses =
            social.name === "LinkedIn"
              ? "hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2]"
              : social.name === "Facebook"
              ? "hover:text-white hover:border-[#1877F2] hover:bg-[#1877F2]"
              : social.name === "Instagram"
              ? "hover:text-white hover:border-[#E4405F] hover:bg-[#E4405F]"
              : "hover:text-white hover:border-[#0891B2] hover:bg-[#0891B2]";

 return (
 <a
 key={social.name}
 href={social.href}
 target="_blank"
 rel="noopener noreferrer"
 aria-label={`Follow Agnivridhi India on ${social.name}`}
 className={`group w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] ${brandHoverClasses}`}
 >
 {social.name === "Facebook" ? (
 <svg
 aria-hidden="true"
 viewBox="0 0 24 24"
 className="w-3.5 h-3.5 transition-[color,fill] duration-300"
 fill="currentColor"
 >
 <path d="M24 12.073C24 5.445 18.627.073 12 .073S0 5.445 0 12.073c0 5.99 4.388 10.954 10.125 11.85v-8.385H7.078v-3.465h3.047V9.432c0-3.008 1.792-4.67 4.533-4.67 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.926-1.956 1.876v2.248h3.328l-.532 3.465h-2.796v8.385C19.612 23.027 24 18.063 24 12.073Z" />
 </svg>
 ) : (
 <Icon className={`w-3.5 h-3.5 transition-[color,fill] duration-300 ${brandIconClasses}`} />
 )}
 </a>
 );
 })}
 </div>
 </div>
 )}
 </div>
 </div>
 </div>

 {/* ==========================================================
 BOTTOM BAR: Copyright & Legal Navigation
 ========================================================== */}
 <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
 <p>
 &copy; {currentYear} {siteConfig.company.name}. All rights reserved.
 </p>

 <nav aria-label="Legal Navigation" className="flex items-center gap-6">
 {siteConfig.navigation.legalNav.map((legalItem) => (
 <Link
 key={legalItem.href}
 href={legalItem.href}
 className="hover:text-[#22D3EE] transition-colors"
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
