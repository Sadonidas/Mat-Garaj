"use client";

import { useEffect, useRef, useState } from "react";
import { BRAND_LOGO_SRC, NAV_LINKS } from "@/lib/constants";
import { MaterialIcon } from "@/components/MaterialIcon";

const DEFAULT_ACTIVE_HREF = "#hero";
const CLICK_SCROLL_LOCK_MS = 900;

function getNavLinkClassName(isActive: boolean) {
  return [
    "inline-block border-b-2 pb-1 font-label-sm text-label-sm tracking-widest transition-all duration-300 ease-out",
    isActive
      ? "border-primary text-primary"
      : "border-transparent text-white/90 hover:border-primary hover:text-primary",
  ].join(" ");
}

function getMobileNavLinkClassName(isActive: boolean) {
  return [
    "inline-block border-b-2 pb-2 text-center font-label-sm text-label-sm tracking-widest transition-all duration-300 ease-out",
    isActive
      ? "border-primary text-primary"
      : "border-transparent text-white/90 hover:border-primary hover:text-primary",
  ].join(" ");
}

export function Navbar() {
  const [activeHref, setActiveHref] = useState(DEFAULT_ACTIVE_HREF);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const clickScrollLockRef = useRef(false);
  const clickScrollTimeoutRef = useRef<number | undefined>(undefined);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((open) => !open);

  useEffect(() => {
    const sectionEntries = new Map<string, IntersectionObserverEntry>();

    const updateActiveFromObserver = () => {
      if (clickScrollLockRef.current) return;

      const visibleSections = Array.from(sectionEntries.values())
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          if (b.intersectionRatio !== a.intersectionRatio) {
            return b.intersectionRatio - a.intersectionRatio;
          }
          return a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top;
        });

      if (visibleSections.length > 0) {
        setActiveHref(`#${visibleSections[0].target.id}`);
      }
    };

    const syncFromHash = () => {
      const hash = window.location.hash;
      if (NAV_LINKS.some((link) => link.href === hash)) {
        setActiveHref(hash);
      } else if (!hash) {
        setActiveHref(DEFAULT_ACTIVE_HREF);
      } else {
        setActiveHref("");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionEntries.set(entry.target.id, entry);
        });
        updateActiveFromObserver();
      },
      {
        root: null,
        rootMargin: "-96px 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 1],
      },
    );

    NAV_LINKS.forEach(({ href }) => {
      const section = document.getElementById(href.slice(1));
      if (section) observer.observe(section);
    });

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
      window.clearTimeout(clickScrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    clickScrollLockRef.current = true;
    window.clearTimeout(clickScrollTimeoutRef.current);
    clickScrollTimeoutRef.current = window.setTimeout(() => {
      clickScrollLockRef.current = false;
    }, CLICK_SCROLL_LOCK_MS);
  };

  const handleMobileNavClick = (href: string) => {
    handleNavClick(href);
    closeMobileMenu();
  };

  const handleMobileContactClick = () => {
    clickScrollLockRef.current = true;
    setActiveHref("");
    window.clearTimeout(clickScrollTimeoutRef.current);
    clickScrollTimeoutRef.current = window.setTimeout(() => {
      clickScrollLockRef.current = false;
    }, CLICK_SCROLL_LOCK_MS);
    closeMobileMenu();
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 shadow-[0_4px_24px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-500 ease-out">
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-6 md:px-margin-desktop">
        <a
          href="#hero"
          onClick={() => {
            handleNavClick("#hero");
            closeMobileMenu();
          }}
          className="flex shrink-0 items-center"
        >
          <img
            src={BRAND_LOGO_SRC}
            alt="Mat Garaj"
            className="h-10 w-auto md:h-11"
          />
        </a>

        <ul className="hidden items-center gap-gutter md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={getNavLinkClassName(activeHref === link.href)}
                aria-current={activeHref === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#iletisim"
          onClick={() => {
            clickScrollLockRef.current = true;
            setActiveHref("");
            window.clearTimeout(clickScrollTimeoutRef.current);
            clickScrollTimeoutRef.current = window.setTimeout(() => {
              clickScrollLockRef.current = false;
            }, CLICK_SCROLL_LOCK_MS);
          }}
          className="btn-gold-border hidden rounded px-6 py-3 font-label-sm text-label-sm uppercase tracking-widest text-primary md:inline-flex md:items-center md:justify-center"
        >
          İletişime Geç
        </a>

        <button
          type="button"
          className="relative z-50 flex size-10 items-center justify-center rounded text-white transition-all duration-300 hover:text-primary md:hidden"
          aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          onClick={toggleMobileMenu}
        >
          <MaterialIcon
            name={isMobileMenuOpen ? "close" : "menu"}
            className="text-[28px]"
          />
        </button>
      </div>

      <aside
        id="mobile-nav-panel"
        className={[
          "fixed inset-0 z-[60] flex h-[100dvh] w-full flex-col bg-neutral-950/95 backdrop-blur-xl transition-all duration-300 ease-out md:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-margin-mobile py-6">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-white">
            Menü
          </span>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded text-white transition-all duration-300 hover:text-primary"
            aria-label="Menüyü kapat"
            onClick={closeMobileMenu}
          >
            <MaterialIcon name="close" className="text-[28px]" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center px-margin-mobile pb-12">
          <ul className="flex w-full max-w-sm flex-col items-center space-y-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleMobileNavClick(link.href)}
                  className={getMobileNavLinkClassName(activeHref === link.href)}
                  aria-current={activeHref === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#iletisim"
            onClick={handleMobileContactClick}
            className="btn-gold-border mt-12 inline-flex min-w-[12rem] items-center justify-center rounded px-8 py-3 font-label-sm text-label-sm uppercase tracking-widest text-primary"
          >
            İletişime Geç
          </a>
        </nav>
      </aside>
    </nav>
  );
}
