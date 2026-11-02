"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { privacyPath, sectionLinks, storeLabel } from "@/lib/content";

type NavItem = {
  key: string;
  label: string;
  href: string;
  isCurrent: boolean;
};

// Scrolling past 24px is enough to tell the nav it is no longer over the hero's top edge.
const SCROLLED_THRESHOLD = 24;

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isPrivacyPage = pathname === privacyPath;
  const activeId = useActiveSection(isHome);
  const isScrolled = useIsScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    // The overlay covers the page, so scrolling underneath it would be confusing.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const navItems: NavItem[] = [
    ...sectionLinks.map(({ id, label }) => ({
      key: id,
      label,
      href: isHome ? `#${id}` : `/#${id}`,
      isCurrent: activeId === id,
    })),
    { key: "gizlilik", label: "Gizlilik", href: privacyPath, isCurrent: isPrivacyPage },
  ];

  const currentItem = navItems.find((item) => item.isCurrent);

  return (
    <header className={isScrolled ? "site-nav is-scrolled" : "site-nav"}>
      <nav className="nav-pill" aria-label="Ana menü">
        <span className="nav-current">{currentItem?.label ?? "Ana sayfa"}</span>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="nav-link"
                aria-current={item.isCurrent ? "true" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
          {isMenuOpen ? "Kapat" : "Menü"}
        </button>
      </nav>

      <div id="mobile-menu" className="mobile-menu" hidden={!isMenuOpen}>
        <ul className="mobile-menu-list">
          {navItems.map((item, index) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="mobile-menu-link"
                aria-current={item.isCurrent ? "true" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mobile-menu-index">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mobile-menu-note">{storeLabel}</p>
      </div>
    </header>
  );
}

function useActiveSection(enabled: boolean): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const sections = sectionLinks.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [element] : [];
    });

    // Only sections crossing the middle band of the viewport count as "being read",
    // so the highlight changes when the reader's focus moves, not at the first pixel.
    // When nothing is in the band (the hero, or a gap between sections) nothing is highlighted.
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        setActiveId(intersecting.at(-1)?.target.id ?? null);
      },
      { rootMargin: "-30% 0px -40% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? activeId : null;
}

function useIsScrolled(): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLLED_THRESHOLD);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
}
