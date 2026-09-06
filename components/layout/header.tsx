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
import { LinkButton } from "@/components/ui/link-button";

const categoryIcons: Record<string, React.ElementType> = {
  funding: Landmark,
  compliance: ShieldCheck,
  digital: Globe,
  it: Cpu,
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

  const brandNameParts = siteConfig.company.name.split(" ");
  const brandFirst = brandNameParts[0];
  const brandRest = brandNameParts.slice(1).join(" ") || "India";

  const springTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, bounce: 0.2, duration: 0.4 };

  return (
    <>
      {/* Backdrop overlay when mobile menu is open */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
            onClick={() => setMobileNavOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Global Ambient Top Blur Shield: gently diffuses and fades page content as it scrolls up under the floating header */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 inset-x-0 h-24 sm:h-28 z-40 bg-gradient-to-b from-slate-50/90 via-slate-50/60 to-transparent dark:from-slate-950/90 dark:via-slate-950/60 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_50%,transparent)] select-none transition-opacity duration-300"
      />

      {/* Floating Centered Wrapper */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
        <motion.nav
          layout
          layoutId="navbar-pill"
          transition={springTransition}
          aria-label="Main Navigation"
          className={cn(
            "pointer-events-auto relative w-full border select-none transition-all duration-300",
            "backdrop-blur-md",
            mobileNavOpen
              ? "max-w-lg rounded-[28px] p-4 sm:p-5 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-2xl"
              : isScrolled
              ? "max-w-4xl rounded-full px-4 py-2 sm:px-5 sm:py-2 border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.08),_0_1px_2px_0_rgba(15,23,42,0.04),_inset_0_1px_1px_0_rgba(255,255,255,0.95)] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6),_inset_0_1px_1px_0_rgba(255,255,255,0.12)]"
              : "max-w-6xl rounded-full px-5 py-2.5 sm:px-6 sm:py-3 border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.06),_0_1px_2px_0_rgba(15,23,42,0.03),_inset_0_1px_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5),_inset_0_1px_1px_0_rgba(255,255,255,0.1)]"
          )}
        >
          {/* Top Bar Row (Brand, Desktop Nav, CTA, Mobile Toggle) */}
          <div className="flex items-center justify-between gap-3 sm:gap-4 w-full">
            {/* Brand Mark */}
            <Link
              href="/"
              onClick={() => setMobileNavOpen(false)}
              aria-label={`${siteConfig.company.name} - Home`}
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-full select-none shrink-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-serif font-bold text-base sm:text-lg shadow-subtle group-hover:bg-teal-700 transition-transform group-hover:scale-105 duration-200">
                {brandFirst[0]}
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 tracking-tight leading-none group-hover:text-teal-600 transition-colors">
                  {brandFirst}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-sans font-semibold tracking-widest text-gold-600 dark:text-gold-500 leading-tight mt-0.5">
                  {brandRest}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  "relative text-xs xl:text-sm font-medium transition-colors rounded-full px-3 py-1.5 group",
                  isRouteActive("/")
                    ? "text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/50"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                )}
              >
                <span>Home</span>
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={cn(
                  "relative text-xs xl:text-sm font-medium transition-colors rounded-full px-3 py-1.5 group",
                  isRouteActive("/about")
                    ? "text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/50"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                )}
              >
                <span>About</span>
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
                    "relative text-xs xl:text-sm font-medium transition-colors rounded-full px-3 py-1.5 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 cursor-pointer",
                    isServicesActive || servicesOpen
                      ? "text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/50"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                  )}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      servicesOpen && "rotate-180 text-teal-600"
                    )}
                  />
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div
                    id="services-menu"
                    role="menu"
                    aria-label="Services Submenu"
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[540px] rounded-2xl border border-white/60 dark:border-slate-800 supports-[backdrop-filter]:bg-white/80 bg-white/95 dark:supports-[backdrop-filter]:bg-slate-900/85 dark:bg-slate-900 backdrop-blur-2xl shadow-floating p-4 animate-in fade-in zoom-in-95 duration-150 z-50"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {serviceCategories.map((category) => {
                        const IconComp = categoryIcons[category.id] || Landmark;
                        return (
                          <Link
                            key={category.id}
                            href={`/services#${category.id}`}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                          >
                            <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="block font-medium text-xs sm:text-sm text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                                {category.name}
                              </span>
                              <span className="block text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {category.shortDescription}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-2">
                      <span className="text-xs text-slate-500">
                        Advisory across 24+ business solutions
                      </span>
                      <Link
                        href="/services"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        <span>Explore all services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Success Stories */}
              <Link
                href="/success-stories"
                className={cn(
                  "relative text-xs xl:text-sm font-medium transition-colors rounded-full px-3 py-1.5 group",
                  isRouteActive("/success-stories")
                    ? "text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/50"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                )}
              >
                <span>Success Stories</span>
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                className={cn(
                  "relative text-xs xl:text-sm font-medium transition-colors rounded-full px-3 py-1.5 group",
                  isRouteActive("/blog")
                    ? "text-teal-700 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/50"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                )}
              >
                <span>Blog</span>
              </Link>
            </div>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <div className="hidden sm:block">
                <LinkButton
                  href="/contact"
                  variant="primary"
                  size="sm"
                  className="rounded-full px-4 py-1.5 font-medium tracking-wide text-xs shadow-subtle hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Contact Us
                </LinkButton>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileNavOpen((prev) => !prev)}
                aria-expanded={mobileNavOpen}
                aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 cursor-pointer"
              >
                {mobileNavOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>

          {/* Morphing Mobile Content */}
          <AnimatePresence>
            {mobileNavOpen && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.2,
                  delay: shouldReduceMotion ? 0 : 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full pt-4 pb-2 border-t border-slate-200/80 dark:border-slate-800 mt-3 flex flex-col font-sans overflow-hidden"
              >
                <div className="max-h-[calc(76vh-4rem)] overflow-y-auto pr-1 space-y-2.5">
                  {/* Home & About Links */}
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/"
                      onClick={() => setMobileNavOpen(false)}
                      className={cn(
                        "p-2.5 text-center rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border",
                        isRouteActive("/")
                          ? "bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800"
                          : "bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-800 hover:bg-slate-100"
                      )}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setMobileNavOpen(false)}
                      className={cn(
                        "p-2.5 text-center rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border",
                        isRouteActive("/about")
                          ? "bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800"
                          : "bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-800 hover:bg-slate-100"
                      )}
                    >
                      About
                    </Link>
                  </div>

                  {/* Services Accordion List */}
                  <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-800/30">
                    <div className="p-3 bg-slate-100/70 dark:bg-slate-800/70 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-slate-100">
                      <span>Advisory Services</span>
                      <Link
                        href="/services"
                        onClick={() => setMobileNavOpen(false)}
                        className="text-[11px] text-teal-600 font-medium hover:underline flex items-center gap-1"
                      >
                        <span>View all</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="p-2 space-y-1">
                      {serviceCategories.map((cat) => {
                        const IconComp = categoryIcons[cat.id] || Landmark;
                        return (
                          <Link
                            key={cat.id}
                            href={`/services#${cat.id}`}
                            onClick={() => setMobileNavOpen(false)}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 transition-colors"
                          >
                            <div className="w-6 h-6 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-600 flex items-center justify-center shrink-0">
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-slate-900 dark:text-slate-100 truncate">
                                {cat.name}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Stories & Blog */}
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/success-stories"
                      onClick={() => setMobileNavOpen(false)}
                      className={cn(
                        "p-2.5 text-center rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border",
                        isRouteActive("/success-stories")
                          ? "bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800"
                          : "bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-800 hover:bg-slate-100"
                      )}
                    >
                      Stories
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() => setMobileNavOpen(false)}
                      className={cn(
                        "p-2.5 text-center rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border",
                        isRouteActive("/blog")
                          ? "bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800"
                          : "bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-800 hover:bg-slate-100"
                      )}
                    >
                      Blog
                    </Link>
                  </div>

                  {/* Contact Info */}
                  <div className="p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs space-y-1.5">
                    {siteConfig.contact.phone && (
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-teal-600 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="font-mono text-[11px]">{siteConfig.contact.phone}</span>
                      </a>
                    )}
                    {siteConfig.contact.email && (
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-teal-600 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="font-mono text-[11px]">{siteConfig.contact.email}</span>
                      </a>
                    )}
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 pt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span>{siteConfig.company.location.city}, {siteConfig.company.location.state}</span>
                    </div>
                  </div>

                  {/* Primary CTA in Modal */}
                  <div className="pt-1">
                    <LinkButton
                      href="/contact"
                      onClick={() => setMobileNavOpen(false)}
                      variant="primary"
                      size="default"
                      fullWidth
                      className="rounded-full uppercase tracking-wider text-xs font-semibold py-2.5"
                    >
                      Contact Advisory Team
                    </LinkButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </>
  );
}
