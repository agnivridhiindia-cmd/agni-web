"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Landmark,
  ShieldCheck,
  Globe,
  Cpu,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/data/services";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ElementType> = {
  funding: Landmark,
  compliance: ShieldCheck,
  digital: Globe,
  it: Cpu,
};

const pillarNumbers: Record<string, string> = {
  funding: "01",
  compliance: "02",
  digital: "03",
  it: "04",
};

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const servicesRef = React.useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Scroll detection with RAF throttling
  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
      setServicesOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  // Keyboard navigation for dropdown: Escape to close
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen, mobileNavOpen]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  // Close menus when pathname changes
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setServicesOpen(false);
    setMobileNavOpen(false);
  }

  const handleMouseEnterServices = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const isRouteActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  return (
    <>
      {/* Global Ambient Top Gradient Veil */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 inset-x-0 h-28 z-40 bg-gradient-to-b from-[#080909]/95 via-[#080909]/60 to-transparent backdrop-blur-xs select-none transition-opacity duration-300"
      />

      {/* Floating Centered Navigation Header */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
        <nav
          aria-label="Main Navigation"
          className={cn(
            "pointer-events-auto relative w-full border select-none transition-all duration-300",
            "backdrop-blur-xl",
            isScrolled
              ? "max-w-5xl rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 bg-[#080909]/90 border-white/10 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.8),_0_0_1px_1px_rgba(255,255,255,0.05)]"
              : "max-w-6xl rounded-2xl px-5 py-3 sm:px-6 sm:py-3.5 bg-[#080909]/75 border-white/[0.08] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]"
          )}
        >
          <div className="flex items-center justify-between gap-4 w-full">
            {/* Brand Mark */}
            <Link
              href="/"
              onClick={() => setMobileNavOpen(false)}
              aria-label={`${siteConfig.company.name} - Home`}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79A4A] rounded-md select-none shrink-0"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white/[0.04] border border-white/10 group-hover:border-[#C79A4A]/50 transition-colors duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo1.png"
                  alt="Agnivridhi India Logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif font-semibold text-base sm:text-lg text-[#F3EFE7] tracking-tight leading-none group-hover:text-[#C79A4A] transition-colors">
                    AGNIVRIDHI
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#C79A4A]" />
                </div>
                <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-[#A5A29A] leading-tight mt-0.5">
                  INDIA &bull; ADVISORY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Services with Dropdown */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-menu"
                  className={cn(
                    "relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 inline-flex items-center gap-1.5 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79A4A] cursor-pointer",
                    isServicesActive || servicesOpen
                      ? "text-[#F3EFE7] font-medium"
                      : "text-[#A5A29A] hover:text-[#F3EFE7]"
                  )}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 text-[#A5A29A] transition-transform duration-200",
                      servicesOpen && "rotate-180 text-[#C79A4A]"
                    )}
                  />
                  {isServicesActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[#C79A4A]" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div
                    id="services-menu"
                    role="menu"
                    aria-label="Services Submenu"
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[560px] rounded-xl border border-white/10 bg-[#111313]/95 backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.85)] p-4 animate-in fade-in zoom-in-95 duration-150 z-50"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {serviceCategories.map((category) => {
                        const IconComp = categoryIcons[category.id] || Landmark;
                        const num = pillarNumbers[category.id] || "01";
                        return (
                          <Link
                            key={category.id}
                            href={`/services#${category.id}`}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79A4A]"
                          >
                            <div className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/[0.08] text-[#C79A4A] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C79A4A] group-hover:text-[#080909] transition-colors">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-mono text-[#C79A4A]">
                                  {num}
                                </span>
                                <span className="block font-medium text-xs sm:text-sm text-[#F3EFE7] group-hover:text-[#C79A4A] transition-colors">
                                  {category.name}
                                </span>
                              </div>
                              <span className="block text-[11px] text-[#A5A29A] line-clamp-1">
                                {category.shortDescription}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between px-2 text-[11px]">
                      <span className="text-[#8E8D86] font-mono">
                        Institutional Advisory &bull; 24+ Frameworks
                      </span>
                      <Link
                        href="/services"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1 font-semibold text-[#C79A4A] hover:text-[#DFC286] transition-colors"
                      >
                        <span>All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Insights */}
              <Link
                href="/blog"
                className={cn(
                  "relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 rounded-md",
                  isRouteActive("/blog")
                    ? "text-[#F3EFE7] font-medium"
                    : "text-[#A5A29A] hover:text-[#F3EFE7]"
                )}
              >
                <span>Insights</span>
                {isRouteActive("/blog") && (
                  <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[#C79A4A]" />
                )}
              </Link>

              {/* Case Studies */}
              <Link
                href="/success-stories"
                className={cn(
                  "relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 rounded-md",
                  isRouteActive("/success-stories")
                    ? "text-[#F3EFE7] font-medium"
                    : "text-[#A5A29A] hover:text-[#F3EFE7]"
                )}
              >
                <span>Case Studies</span>
                {isRouteActive("/success-stories") && (
                  <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[#C79A4A]" />
                )}
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={cn(
                  "relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 rounded-md",
                  isRouteActive("/about")
                    ? "text-[#F3EFE7] font-medium"
                    : "text-[#A5A29A] hover:text-[#F3EFE7]"
                )}
              >
                <span>About</span>
                {isRouteActive("/about") && (
                  <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[#C79A4A]" />
                )}
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={cn(
                  "relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 rounded-md",
                  isRouteActive("/contact")
                    ? "text-[#F3EFE7] font-medium"
                    : "text-[#A5A29A] hover:text-[#F3EFE7]"
                )}
              >
                <span>Contact</span>
                {isRouteActive("/contact") && (
                  <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[#C79A4A]" />
                )}
              </Link>
            </div>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:block">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C79A4A] hover:bg-[#DFC286] text-[#080909] font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_-4px_rgba(199,154,74,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Speak with an Advisor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileNavOpen((prev) => !prev)}
                aria-expanded={mobileNavOpen}
                aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[#F3EFE7] hover:bg-white/[0.06] border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79A4A]"
              >
                {mobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Fullscreen Editorial Mobile Drawer */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-50 bg-[#080909]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pb-16 sm:pb-10 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo1.png"
                    alt="Agnivridhi India Logo"
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-semibold text-base text-[#F3EFE7] tracking-tight">
                    AGNIVRIDHI
                  </span>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#A5A29A]">
                    INDIA &bull; ADVISORY
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-[#F3EFE7] hover:bg-white/[0.06]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle: Oversized Editorial Links */}
            <div className="py-8 space-y-4">
              {[
                { label: "Home", href: "/", index: "01" },
                { label: "Advisory Services", href: "/services", index: "02" },
                { label: "Case Studies", href: "/success-stories", index: "03" },
                { label: "Insights & Guides", href: "/blog", index: "04" },
                { label: "About Agnivridhi", href: "/about", index: "05" },
                { label: "Contact Advisory", href: "/contact", index: "06" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-baseline justify-between border-b border-white/[0.06] pb-3 group"
                >
                  <span className="font-serif text-2xl sm:text-3xl text-[#F3EFE7] group-hover:text-[#C79A4A] transition-colors">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-[#A5A29A] group-hover:text-[#C79A4A] transition-colors">
                    {item.index}
                  </span>
                </Link>
              ))}
            </div>

            {/* Bottom: Direct Institutional Contact Touchpoints */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A5A29A]">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 hover:text-[#F3EFE7] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C79A4A]" />
                  <span className="font-mono">{siteConfig.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-[#F3EFE7] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C79A4A]" />
                  <span className="font-mono">{siteConfig.contact.email}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#8E8D86]">
                <MapPin className="w-3.5 h-3.5 text-[#C79A4A] shrink-0" />
                <span className="line-clamp-1">{siteConfig.contact.address.street}, Noida</span>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileNavOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#C79A4A] text-[#080909] font-sans font-semibold text-xs tracking-wider uppercase"
              >
                <span>Book Strategic Advisory Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
