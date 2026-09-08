"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  ChevronDown,
  ArrowRight,
  Landmark,
  ShieldCheck,
  Globe,
  Cpu,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/data/services";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ui/link-button";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

const categoryIcons: Record<string, React.ElementType> = {
  funding: Landmark,
  compliance: ShieldCheck,
  digital: Globe,
  it: Cpu,
};

export function MobileNav({ isOpen, onClose, triggerRef }: MobileNavProps) {
  const pathname = usePathname();
  const [servicesExpanded, setServicesExpanded] = React.useState(true);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  // Body scroll locking when open
  React.useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, [isOpen]);

  // Escape key handler and focus restoration
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        triggerRef?.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  // Trap focus within dialog when open
  const handleKeyDownTrap = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab" || !containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  };

  if (!isOpen) {
    return null;
  }

  const isRouteActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const brandNameParts = siteConfig.company.name.split(" ");
  const brandFirst = brandNameParts[0];
  const brandRest = brandNameParts.slice(1).join(" ") || "India";

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      onKeyDown={handleKeyDownTrap}
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-[#0F0A1A]/40 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content panel */}
      <div
        ref={containerRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white border-l border-cyan-200 text-[#0F0A1A] shadow-2xl flex flex-col z-10 transition-transform duration-300 ease-out animate-in slide-in-from-right"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cyan-100">
          <Link
            href="/"
            onClick={onClose}
            aria-label={`${siteConfig.company.name} - Home`}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] rounded-sm"
          >
            <div className="w-8 h-8 rounded-md bg-[#0891B2] text-white flex items-center justify-center font-serif font-bold text-base shadow-subtle group-hover:bg-[#0E7490] transition-colors">
              {brandFirst[0]}
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-base text-[#0F0A1A] tracking-tight leading-none">
                {brandFirst}
              </span>
              <span className="text-[10px] uppercase font-sans font-semibold tracking-widest text-[#0891B2] leading-tight mt-0.5">
                {brandRest}
              </span>
            </div>
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-md text-[#64748B] hover:text-[#0F0A1A] hover:bg-cyan-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          <nav aria-label="Mobile Navigation" className="space-y-1">
            {/* Home */}
            <Link
              href="/"
              onClick={onClose}
              className={cn(
                "min-h-[48px] px-3.5 flex items-center justify-between rounded-md text-base font-medium transition-colors",
                isRouteActive("/")
                  ? "bg-cyan-50 text-[#0891B2] font-semibold border border-cyan-200"
                  : "text-[#475569] hover:bg-cyan-50 hover:text-[#0F0A1A]"
              )}
            >
              <span>Home</span>
              {isRouteActive("/") && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              )}
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={onClose}
              className={cn(
                "min-h-[48px] px-3.5 flex items-center justify-between rounded-md text-base font-medium transition-colors",
                isRouteActive("/about")
                  ? "bg-cyan-50 text-[#0891B2] font-semibold border border-cyan-200"
                  : "text-[#475569] hover:bg-cyan-50 hover:text-[#0F0A1A]"
              )}
            >
              <span>About</span>
              {isRouteActive("/about") && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              )}
            </Link>

            {/* Services (Accordion) */}
            <div className="pt-1 pb-1">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={onClose}
                  className={cn(
                    "flex-1 min-h-[48px] px-3.5 flex items-center text-base font-medium rounded-l-md transition-colors",
                    isRouteActive("/services")
                      ? "bg-cyan-50 text-[#0891B2] font-semibold border-y border-l border-cyan-200"
                      : "text-[#475569] hover:bg-cyan-50 hover:text-[#0F0A1A]"
                  )}
                >
                  <span>Services</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  aria-expanded={servicesExpanded}
                  aria-label={
                    servicesExpanded
                      ? "Collapse services category list"
                      : "Expand services category list"
                  }
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-r-md text-[#64748B] hover:text-[#0F0A1A] hover:bg-cyan-50 transition-colors"
                >
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      servicesExpanded && "rotate-180"
                    )}
                  />
                </button>
              </div>

              {/* Collapsible Services sub-menu */}
              {servicesExpanded && (
                <div className="mt-2 ml-3 pl-3 border-l-2 border-cyan-100 space-y-1">
                  {serviceCategories.map((cat) => {
                    const IconComponent = categoryIcons[cat.id] || Landmark;
                    return (
                      <Link
                        key={cat.id}
                        href={`/services#${cat.id}`}
                        onClick={onClose}
                        className="min-h-[44px] px-3 py-2 flex items-start gap-3 rounded-md text-sm text-[#64748B] hover:text-[#0F0A1A] hover:bg-cyan-50 transition-colors"
                      >
                        <div className="w-6 h-6 rounded bg-cyan-50 border border-cyan-100 text-[#0891B2] flex items-center justify-center shrink-0 mt-0.5">
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="font-medium text-[#0F0A1A] text-xs">
                            {cat.name}
                          </p>
                          <p className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                            {cat.shortDescription}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="min-h-[40px] px-3 flex items-center gap-1.5 text-xs font-semibold text-[#0891B2] hover:text-[#0891B2] transition-colors pt-1"
                  >
                    <span>View all advisory services</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>

            {/* Success Stories */}
            <Link
              href="/success-stories"
              onClick={onClose}
              className={cn(
                "min-h-[48px] px-3.5 flex items-center justify-between rounded-md text-base font-medium transition-colors",
                isRouteActive("/success-stories")
                  ? "bg-cyan-50 text-[#0891B2] font-semibold border border-cyan-200"
                  : "text-[#475569] hover:bg-cyan-50 hover:text-[#0F0A1A]"
              )}
            >
              <span>Success Stories</span>
              {isRouteActive("/success-stories") && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              )}
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              onClick={onClose}
              className={cn(
                "min-h-[48px] px-3.5 flex items-center justify-between rounded-md text-base font-medium transition-colors",
                isRouteActive("/blog")
                  ? "bg-cyan-50 text-[#0891B2] font-semibold border border-cyan-200"
                  : "text-[#475569] hover:bg-cyan-50 hover:text-[#0F0A1A]"
              )}
            >
              <span>Blog</span>
              {isRouteActive("/blog") && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              )}
            </Link>

            {/* FAQ */}
            <Link
              href="/faq"
              onClick={onClose}
              className={cn(
                "min-h-[48px] px-3.5 flex items-center justify-between rounded-md text-base font-medium transition-colors",
                isRouteActive("/faq")
                  ? "bg-cyan-50 text-[#0891B2] font-semibold border border-cyan-200"
                  : "text-[#475569] hover:bg-cyan-50 hover:text-[#0F0A1A]"
              )}
            >
              <span>FAQ</span>
              {isRouteActive("/faq") && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0891B2]" />
              )}
            </Link>
          </nav>

          {/* Quick Contact Info */}
          <div className="pt-4 border-t border-cyan-100 space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs text-[#64748B]">
              <MapPin className="w-3.5 h-3.5 text-[#0891B2] shrink-0" />
              <span>
                {siteConfig.company.location.city},{" "}
                {siteConfig.company.location.state},{" "}
                {siteConfig.company.location.country}
              </span>
            </div>
            {siteConfig.contact.phone && (
              <div className="flex items-center gap-2.5 text-xs text-[#64748B]">
                <Phone className="w-3.5 h-3.5 text-[#0891B2] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-[#0F0A1A] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            )}
            {siteConfig.contact.email && (
              <div className="flex items-center gap-2.5 text-xs text-[#64748B]">
                <Mail className="w-3.5 h-3.5 text-[#0891B2] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#0F0A1A] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Drawer footer CTA */}
        <div className="p-6 border-t border-cyan-100 bg-white">
          <LinkButton
            href="/contact"
            onClick={onClose}
            variant="primary"
            size="lg"
            fullWidth
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Contact Advisory Team
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
