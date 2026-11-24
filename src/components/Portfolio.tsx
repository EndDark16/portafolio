"use client";

import { MotionConfig } from "framer-motion";
import { AboutContact, Footer } from "./AboutContact";
import { Hero } from "./Hero";
import { LanguageProvider, useLanguage } from "./LanguageProvider";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { ScrollProgress } from "./ScrollProgress";
import { TechStack } from "./TechStack";

function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      {t.meta.skip}
    </a>
  );
}

export function Portfolio() {
  return (
    <LanguageProvider>
      {/* reducedMotion="user": transform animations are disabled when the OS asks for it */}
      <MotionConfig reducedMotion="user">
        <SkipLink />
        <ScrollProgress />
        <Navbar />
        <main id="main" data-lang-fade>
          <Hero />
          <Projects />
          <TechStack />
          <AboutContact />
        </main>
        <Footer />
      </MotionConfig>
    </LanguageProvider>
  );
}
