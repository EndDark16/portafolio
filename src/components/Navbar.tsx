"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { languages, profile } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";

const sectionIds = ["projects", "stack", "about", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div role="group" aria-label={t.nav.language} className="flex items-center rounded-full border border-line p-0.5 font-mono text-[11px]">
      {languages.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`relative rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors duration-150 ${
              active ? "text-canvas" : "text-muted hover:text-ink"
            }`}
          >
            {active ? (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative">{l}</span>
          </button>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const { t, pick } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links: { id: SectionId; label: string }[] = [
    { id: "projects", label: t.nav.projects },
    { id: "stack", label: t.nav.stack },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200 ${
        scrolled || open ? "border-b border-line bg-canvas/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav aria-label={t.nav.aria} className="page-shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-ink">
          <span aria-hidden className="h-2.5 w-2.5 bg-accent" />
          {profile.shortName}
        </a>

        <ul data-lang-fade className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`relative px-3 py-2 text-sm transition-colors duration-150 ${
                  active === link.id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                {active === link.id ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-px h-px bg-accent"
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <a
            href={pick(profile.cv)}
            download
            className="hidden items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink transition-colors duration-150 hover:border-accent/60 hover:text-accent-fg sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            {t.nav.cv}
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="border-t border-line md:hidden"
          >
            <ul className="page-shell py-3">
              {links.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-3.5 text-lg text-ink last:border-0"
                  >
                    <span className="font-mono text-xs text-accent-fg">0{i + 1}</span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={pick(profile.cv)} download className="flex items-center gap-2 py-3.5 text-sm text-muted">
                  <Download className="h-4 w-4" aria-hidden />
                  {t.hero.downloadCv}
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
