"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { MaterialIcon } from "@/components/MaterialIcon";

const DEFAULT_ACTIVE_HREF = "#hero";

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

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (NAV_LINKS.some((link) => link.href === hash)) {
        setActiveHref(hash);
      } else if (!hash) {
        setActiveHref(DEFAULT_ACTIVE_HREF);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-on-surface/10 bg-surface-container-lowest/30 shadow-[0_0_15px_rgba(233,195,73,0.1)] backdrop-blur-xl transition-all duration-500 ease-out">
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-6 md:px-margin-desktop">
        <a
          href="#hero"
          onClick={() => handleNavClick("#hero")}
          className="font-display-xl text-headline-md tracking-tighter text-on-surface"
        >
          {SITE_NAME}
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
          onClick={() => handleNavClick("#iletisim")}
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
