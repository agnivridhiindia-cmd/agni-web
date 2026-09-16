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
  const [heroHidden, setHeroHidden] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const servicesRef = React.useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const previousScrollYRef = React.useRef(0);
  const accumulatedDeltaRef = React.useRef(0);

  // Smooth, jitter-free scroll detection with accumulated hysteresis & RAF throttling
  React.useEffect(() => {
    previousScrollYRef.current = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentY = window.scrollY;
      const prevY = previousScrollYRef.current;
      const delta = currentY - prevY;

      // Hysteresis deadband for isScrolled to avoid bounce at top threshold
      if (currentY > 70) {
        setIsScrolled((prev) => (!prev ? true : prev));
      } else if (currentY < 20) {
        setIsScrolled((prev) => (prev ? false : prev));
      }

      // Always show header near the top of the page
      if (currentY <= 150) {
        setHeroHidden((prev) => (prev ? false : prev));
        accumulatedDeltaRef.current = 0;
      } else if (!mobileNavOpen) {
        // Reset accumulation if scroll direction reverses
        if (
          (delta > 0 && accumulatedDeltaRef.current < 0) ||
          (delta < 0 && accumulatedDeltaRef.current > 0)
        ) {
          accumulatedDeltaRef.current = delta;
        } else {
          accumulatedDeltaRef.current += delta;
        }

        // Hysteresis threshold: user must decisively scroll down past 200px
        if (accumulatedDeltaRef.current > 60 && currentY > 200) {
          setHeroHidden((prev) => (!prev ? true : prev));
          setServicesOpen((prev) => (prev ? false : prev));
        }
        // To show: scrolled up by at least 25px accumulated
        else if (accumulatedDeltaRef.current < -25) {
          setHeroHidden((prev) => (prev ? false : prev));
        }
      }

      previousScrollYRef.current = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [mobileNavOpen]);

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
    setHeroHidden(false);
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
        className={cn(
          "pointer-events-none fixed top-0 inset-x-0 h-28 z-40 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-transparent select-none transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] [transform:translateZ(0)]",
          heroHidden ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        )}
      />

      {/* Floating Centered Navigation Header */}
      <header
        aria-hidden={mobileNavOpen || undefined}
        className={cn(
          "fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform [transform:translateZ(0)]",
          mobileNavOpen
            ? "pointer-events-none opacity-0"
            : heroHidden
              ? "pointer-events-none opacity-0 -translate-y-28"
              : "pointer-events-none opacity-100 translate-y-0"
        )}
      >
        <nav
          aria-label="Main Navigation"
          className={cn(
            "pointer-events-auto relative w-full max-w-6xl rounded-2xl border select-none transition-[background-color,border-color,box-shadow] duration-200",
            "backdrop-blur-sm [transform:translateZ(0)]",
            isScrolled
              ? "border-slate-800/90 bg-slate-950/95 px-5 py-2.5 shadow-[0_18px_44px_-24px_rgba(0,0,0,0.8)] sm:px-6 sm:py-2.5"
              : "border-slate-800/80 bg-slate-950/85 px-5 py-2.5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] sm:px-6 sm:py-3"
          )}
        >
          <div className="flex min-w-0 w-full items-center justify-between gap-4">
            {/* Brand Mark */}
            <Link
              href="/"
              onClick={() => setMobileNavOpen(false)}
              aria-label={`${siteConfig.company.name} - Home`}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded-md select-none shrink-0"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-slate-900 border border-slate-700/80 group-hover:border-amber-400/50 transition-colors duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo1.png"
                  alt="Agnivridhi India Logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>

              <div className="flex min-w-0 flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif font-semibold text-base sm:text-lg text-white tracking-tight leading-none group-hover:text-amber-400 transition-colors">
                    AGNIVRIDHI
                  </span>
                  <span className="w-1 h-1 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-[0.16em] text-amber-400/80 font-medium leading-tight mt-0.5">
                  INDIA &bull; ADVISORY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* About */}
              <Link
                href="/about"
                className={cn(
                  "group relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 rounded-md",
                  isRouteActive("/about")
                    ? "text-amber-400 font-semibold"
                    : "text-slate-300 hover:text-amber-400 font-medium"
                )}
              >
                <span>About</span>
                <span
                  className={cn(
                    "absolute bottom-0 left-3 h-[2px] rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-[width] duration-300 ease-out",
                    isRouteActive("/about") ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                  )}
                />
              </Link>

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
                    "group relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 inline-flex items-center gap-1.5 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 cursor-pointer",
                    isServicesActive || servicesOpen
                      ? "text-amber-400 font-semibold"
                      : "text-slate-300 hover:text-amber-400"
                  )}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 text-slate-400 transition-transform duration-200",
                      servicesOpen && "rotate-180 text-amber-400"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-0 left-3 h-[2px] rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-[width] duration-300 ease-out",
                      isServicesActive ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                    )}
                  />
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div
                    id="services-menu"
                    role="menu"
                    aria-label="Services Submenu"
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[560px] rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-4 animate-in fade-in zoom-in-95 duration-150 z-50 text-white"
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
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-900/90 border border-transparent hover:border-amber-500/30 transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
                          >
                            <div className="w-8 h-8 rounded-md bg-slate-900 border border-slate-700/80 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-mono text-amber-400 font-semibold">
                                  {num}
                                </span>
                                <span className="block font-medium text-xs sm:text-sm text-white group-hover:text-amber-400 transition-colors">
                                  {category.name}
                                </span>
                              </div>
                              <span className="block text-[11px] text-slate-400 line-clamp-1">
                                {category.shortDescription}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between px-2 text-[11px]">
                      <span className="text-slate-400 font-mono">
                        Institutional Advisory &bull; 24+ Frameworks
                      </span>
                      <Link
                        href="/services"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        <span>All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies */}
              <Link
                href="/success-stories"
                className={cn(
                  "group relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 rounded-md",
                  isRouteActive("/success-stories")
                    ? "text-amber-400 font-semibold"
                    : "text-slate-300 hover:text-amber-400 font-medium"
                )}
              >
                <span>Case Studies</span>
                <span
                  className={cn(
                    "absolute bottom-0 left-3 h-[2px] rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-[width] duration-300 ease-out",
                    isRouteActive("/success-stories") ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                  )}
                />
              </Link>

              {/* Insights */}
              <Link
                href="/blog"
                className={cn(
                  "group relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 rounded-md",
                  isRouteActive("/blog")
                    ? "text-amber-400 font-semibold"
                    : "text-slate-300 hover:text-amber-400 font-medium"
                )}
              >
                <span>Insights</span>
                <span
                  className={cn(
                    "absolute bottom-0 left-3 h-[2px] rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-[width] duration-300 ease-out",
                    isRouteActive("/blog") ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                  )}
                />
              </Link>

              {/* FAQ */}
              <Link
                href="/faq"
                className={cn(
                  "group relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 rounded-md",
                  isRouteActive("/faq")
                    ? "text-amber-400 font-semibold"
                    : "text-slate-300 hover:text-amber-400 font-medium"
                )}
              >
                <span>FAQ</span>
                <span
                  className={cn(
                    "absolute bottom-0 left-3 h-[2px] rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-[width] duration-300 ease-out",
                    isRouteActive("/faq") ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                  )}
                />
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={cn(
                  "group relative text-xs xl:text-sm font-sans tracking-wide transition-colors px-3 py-1.5 rounded-md",
                  isRouteActive("/contact")
                    ? "text-amber-400 font-semibold"
                    : "text-slate-300 hover:text-amber-400 font-medium"
                )}
              >
                <span>Contact</span>
                <span
                  className={cn(
                    "absolute bottom-0 left-3 h-[2px] rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-[width] duration-300 ease-out",
                    isRouteActive("/contact") ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                  )}
                />
              </Link>
            </div>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:block">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 border border-amber-300/40 px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(245,158,11,0.5)] active:scale-[0.98] [transform:translateZ(0)]"
                >
                  <span>Speak with an Advisor</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileNavOpen((prev) => !prev)}
                aria-expanded={mobileNavOpen}
                aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
                className="lg:hidden flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white hover:bg-slate-900 border border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
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
            className="fixed inset-0 z-50 flex flex-col justify-between overflow-x-hidden overflow-y-auto bg-slate-950/90 p-6 pb-16 text-white backdrop-blur-3xl supports-[backdrop-filter]:bg-slate-950/78 sm:p-10 sm:pb-10 lg:hidden"
            style={{
              backgroundColor: "rgba(7, 24, 58, 0.9)",
              backdropFilter: "blur(64px) saturate(140%)",
              WebkitBackdropFilter: "blur(64px) saturate(140%)",
            }}
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo1.png"
                    alt="Agnivridhi India Logo"
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-semibold text-base text-white tracking-tight">
                    AGNIVRIDHI
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400/80 font-medium">
                    INDIA &bull; ADVISORY
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 text-white hover:bg-slate-900 cursor-pointer"
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
                { label: "FAQ", href: "/faq", index: "05" },
                { label: "About Agnivridhi", href: "/about", index: "06" },
                { label: "Contact Advisory", href: "/contact", index: "07" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-baseline justify-between border-b border-slate-800/80 pb-3 group"
                >
                  <span className="font-serif text-2xl sm:text-3xl text-white group-hover:text-amber-400 transition-colors">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-amber-400/70 group-hover:text-amber-400 transition-colors">
                    {item.index}
                  </span>
                </Link>
              ))}
            </div>

            {/* Bottom: Direct Institutional Contact Touchpoints */}
            <div className="pt-4 border-t border-slate-800 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono">{siteConfig.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono">{siteConfig.contact.email}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="line-clamp-1">{siteConfig.contact.address.street}, Noida</span>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileNavOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-sans font-bold text-xs tracking-wider uppercase shadow-md transition-all hover:shadow-[0_0_24px_rgba(245,158,11,0.5)]"
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
