"use client";

import { useEffect, useRef, useState } from "react";
import { BRAND_LOGO_SRC, NAV_LINKS } from "@/lib/constants";
import { MaterialIcon } from "@/components/MaterialIcon";

const DEFAULT_ACTIVE_HREF = "#hero";
const CLICK_SCROLL_LOCK_MS = 900;

function getNavLinkClassName(isActive: boolean) {
  return [
    "inline-block border-b-2 pb-1 font-label-sm text-label-sm tracking-widest transition-all duration-300",
    isActive
      ? "border-primary text-primary"
      : "border-transparent text-on-surface-variant hover:text-on-surface",
  ].join(" ");
}

export function Navbar() {
  const [activeHref, setActiveHref] = useState(DEFAULT_ACTIVE_HREF);
  const clickScrollLockRef = useRef(false);
  const clickScrollTimeoutRef = useRef<number | undefined>(undefined);

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

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    clickScrollLockRef.current = true;
    window.clearTimeout(clickScrollTimeoutRef.current);
    clickScrollTimeoutRef.current = window.setTimeout(() => {
      clickScrollLockRef.current = false;
    }, CLICK_SCROLL_LOCK_MS);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-on-surface/10 bg-surface-container-lowest/30 shadow-[0_0_15px_rgba(235,28,36,0.12)] backdrop-blur-xl transition-all duration-500 ease-out">
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-6 md:px-margin-desktop">
        <a
          href="#hero"
          onClick={() => handleNavClick("#hero")}
          className="flex shrink-0 items-center"
        >
          <img
            src={BRAND_LOGO_SRC}
            alt="Mat Garaj"
            className="h-10 w-auto md:h-12"
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
          className="text-on-surface md:hidden"
          aria-label="Menüyü aç"
        >
          <MaterialIcon name="menu" />
        </button>
      </div>
    </nav>
  );
}
