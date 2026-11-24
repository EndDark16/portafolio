"use client";

import { animate } from "framer-motion";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { copy, type Copy, type Language, type Localized } from "@/data/portfolio";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Copy;
  pick: (value: Localized) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "portfolio-lang";

/* Tiny external store: stored preference → browser language → "es". */
const listeners = new Set<() => void>();
let current: Language | null = null;

function readInitial(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith("es") === false ? "en" : "es";
}

const store = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot(): Language {
    if (current === null) current = readInitial();
    return current;
  },
  // Server render (and hydration) always use Spanish, so markup matches.
  getServerSnapshot: (): Language => "es",
  set(next: Language) {
    current = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    listeners.forEach((l) => l());
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Clean language switch: a quick dip in opacity on the translatable regions
  // ([data-lang-fade]), swap the copy, then fade back in. Opacity only: no layout
  // shift and no transform on ancestors of fixed elements (the drawer).
  // Every step is time-bounded, so a throttled/background tab can never leave
  // the page dimmed or the switch locked.
  const switching = useRef(false);
  const queued = useRef<Language | null>(null);
  const setLang = useCallback(async function run(next: Language): Promise<void> {
    if (switching.current) {
      queued.current = next; // last click wins
      return;
    }
    if (next === store.getSnapshot()) return;
    switching.current = true;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-lang-fade]"));
    const timeout = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms));

    if (targets.length) {
      await Promise.race([animate(targets, { opacity: 0.25 }, { duration: 0.09, ease: "easeIn" }), timeout(120)]);
    }
    store.set(next);
    if (targets.length) {
      animate(targets, { opacity: 1 }, { duration: 0.22, ease: [0.22, 1, 0.36, 1] });
    }
    await timeout(260);
    targets.forEach((el) => {
      el.style.removeProperty("opacity");
    });
    switching.current = false;

    const pending = queued.current;
    queued.current = null;
    if (pending && pending !== store.getSnapshot()) await run(pending);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: copy[lang], pick: (v) => v[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
