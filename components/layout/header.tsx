"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Landmark,
  ShieldCheck,
  Globe,
  Cpu,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/data/services";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { LinkButton } from "@/components/ui/link-button";
import { MobileNav } from "@/components/layout/mobile-nav";

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

  const servicesRef = React.useRef<HTMLDivElement>(null);
  const menuTriggerRef = React.useRef<HTMLButtonElement>(null);
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

    // Initial check
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
      if (event.key === "Escape" && servicesOpen) {
        setServicesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  // Close menus when pathname changes
  React.useEffect(() => {
    setServicesOpen(false);
    setMobileNavOpen(false);
  }, [pathname]);

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

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "h-16 bg-white/92 dark:bg-slate-900/92 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-subtle"
            : "h-20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/40"
        )}
      >
        <Container width="wide" className="h-full flex items-center justify-between">
          {/* ==========================================================
              LEFT: Brand Mark / Typographic Treatment
              ========================================================== */}
          <Link
            href="/"
            aria-label={`${siteConfig.company.name} - Home`}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-sm"
          >
            <div className="w-9 h-9 rounded-md bg-teal-600 text-white flex items-center justify-center font-serif font-bold text-lg shadow-subtle group-hover:bg-teal-700 transition-colors">
              {brandFirst[0]}
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-lg text-slate-900 dark:text-slate-100 tracking-tight leading-none">
                {brandFirst}
              </span>
              <span className="text-[11px] uppercase font-sans font-semibold tracking-widest text-gold-600 dark:text-gold-500 leading-tight mt-0.5">
                {brandRest}
              </span>
            </div>
          </Link>

          {/* ==========================================================
              CENTER: Desktop Navigation
              ========================================================== */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md group",
                isRouteActive("/")
                  ? "text-teal-700 dark:text-teal-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
            >
              <span>Home</span>
              {isRouteActive("/") && (
                <span className="absolute bottom-0 inset-x-3.5 h-0.5 bg-accent rounded-full animate-in fade-in duration-200" />
              )}
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={cn(
                "relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md group",
                isRouteActive("/about")
                  ? "text-teal-700 dark:text-teal-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
            >
              <span>About</span>
              {isRouteActive("/about") && (
                <span className="absolute bottom-0 inset-x-3.5 h-0.5 bg-accent rounded-full animate-in fade-in duration-200" />
              )}
            </Link>

            {/* Services with Accessible Dropdown */}
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
                  "relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
                  isServicesActive
                    ? "text-teal-700 dark:text-teal-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                />
                {isServicesActive && (
                  <span className="absolute bottom-0 inset-x-3.5 h-0.5 bg-accent rounded-full animate-in fade-in duration-200" />
                )}
              </button>

              {/* Desktop Dropdown Panel */}
              {servicesOpen && (
                <div
                  id="services-menu"
                  role="menu"
                  aria-label="Services Submenu"
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[560px] rounded-lg border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-floating p-4 animate-in fade-in zoom-in-95 duration-150"
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
                          className="flex items-start gap-3 p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                        >
                          <div className="w-8 h-8 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block font-medium text-sm text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                              {category.name}
                            </span>
                            <span className="block text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
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
                "relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md group",
                isRouteActive("/success-stories")
                  ? "text-teal-700 dark:text-teal-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
            >
              <span>Success Stories</span>
              {isRouteActive("/success-stories") && (
                <span className="absolute bottom-0 inset-x-3.5 h-0.5 bg-accent rounded-full animate-in fade-in duration-200" />
              )}
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={cn(
                "relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md group",
                isRouteActive("/blog")
                  ? "text-teal-700 dark:text-teal-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
            >
              <span>Blog</span>
              {isRouteActive("/blog") && (
                <span className="absolute bottom-0 inset-x-3.5 h-0.5 bg-accent rounded-full animate-in fade-in duration-200" />
              )}
            </Link>
          </nav>

          {/* ==========================================================
              RIGHT: Contact CTA & Mobile Menu Trigger
              ========================================================== */}
          <div className="flex items-center gap-3">
            {/* Desktop Contact CTA */}
            <div className="hidden sm:block">
              <LinkButton
                href="/contact"
                variant="primary"
                size={isScrolled ? "sm" : "default"}
                className="font-medium tracking-wide transition-all"
              >
                Contact Us
              </LinkButton>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              ref={menuTriggerRef}
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-expanded={mobileNavOpen}
              aria-label="Open navigation menu"
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        triggerRef={menuTriggerRef}
      />
    </>
  );
}
