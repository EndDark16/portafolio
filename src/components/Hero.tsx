"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { CopyEmailButton } from "./CopyEmailButton";
import { useLanguage } from "./LanguageProvider";
import { ease, item, stagger } from "./Reveal";

function LocalTime() {
  const { lang } = useLanguage();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(lang === "es" ? "es-CO" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: profile.timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [lang]);

  // "--:--" on the server and first client render, so markup always matches.
  return <span className="tabular-nums">{time ?? "--:--"} · GMT−5</span>;
}

/** Each name line slides up from behind a clipping mask. */
const nameLine = {
  hidden: { y: "105%" },
  show: { y: "0%", transition: { duration: 0.6, ease } },
};

const iconLink =
  "grid h-10 w-10 place-items-center rounded-full text-muted transition-colors duration-150 hover:bg-white/[0.05] hover:text-ink";

export function Hero() {
  const { t, pick } = useLanguage();

  return (
    <section id="top" aria-labelledby="hero-name" className="relative pt-24 sm:pt-32 md:pt-36">
      <motion.div className="page-shell" variants={stagger(0.08)} initial="hidden" animate="show">
        {/* Meta rule */}
        <motion.div
          variants={item}
          className="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pb-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint sm:text-[11px]"
        >
          <span className="inline-flex items-start gap-2.5 text-ink/90 sm:items-center">
            <span className="status-dot mt-[3px] shrink-0 sm:mt-0" aria-hidden />
            <span>{t.hero.availability}</span>
          </span>
          <span className="hidden sm:inline">{profile.coordinates}</span>
          <motion.span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-line"
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, ease } } }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          id="hero-name"
          variants={stagger(0.09)}
          className="pt-10 font-display font-semibold leading-[0.95] tracking-[-0.035em] text-ink md:pt-14"
        >
          {profile.nameLines.map((line, i) => (
            <span
              key={line}
              className={`block overflow-hidden pb-[0.06em] text-[clamp(2.5rem,8.2vw,7.25rem)] sm:whitespace-nowrap ${
                i === 1 ? "md:pl-[16.666%]" : ""
              }`}
            >
              <motion.span className="inline-block" variants={nameLine}>
                {line}
                {i === 1 ? <span className="text-accent">.</span> : null}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <div className="grid gap-12 pb-20 pt-10 md:grid-cols-12 md:gap-8 md:pb-28 md:pt-12">
          {/* Role, summary, actions */}
          <motion.div variants={stagger(0.07, 0.1)} className="md:col-span-7">
            <motion.div variants={item} className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-8">
              <motion.span
                aria-hidden
                className="hidden h-px w-12 origin-left translate-y-3 bg-accent sm:block"
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.5, delay: 0.2, ease } } }}
              />
              <div>
                <p className="font-mono text-sm leading-relaxed text-ink/90">{profile.headline}</p>
                <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-muted sm:text-lg">{t.hero.summary}</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-hover"
              >
                {t.hero.viewProjects}
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden />
              </motion.a>
              <motion.a
                href={pick(profile.cv)}
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-150 hover:border-white/30"
              >
                <Download className="h-4 w-4" aria-hidden />
                {t.hero.downloadCv}
              </motion.a>

              <span aria-hidden className="mx-1 hidden h-5 w-px bg-line-strong sm:block" />

              <div className="flex items-center gap-1">
                <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
                  <Github className="h-[18px] w-[18px]" aria-hidden />
                </a>
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
                  <Linkedin className="h-[18px] w-[18px]" aria-hidden />
                </a>
                <CopyEmailButton className="ml-1 rounded-full px-3 py-2 text-sm text-muted transition-colors duration-150 hover:bg-white/[0.05] hover:text-ink" />
              </div>
            </motion.div>
          </motion.div>

          {/* Spec sheet */}
          <motion.aside
            variants={stagger(0.05, 0.15)}
            aria-label={t.hero.profileLabel}
            className="md:col-span-4 md:col-start-9"
          >
            <motion.p variants={item} className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              <span className="text-accent-fg">↳</span> {t.hero.profileLabel}
            </motion.p>
            <dl className="border-t border-line-strong">
              {t.hero.facts.map((fact, i) => (
                <motion.div
                  key={`hero-fact-${i}`}
                  variants={item}
                  className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-line py-3 text-sm sm:grid-cols-[7rem_1fr]"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">{fact.label}</dt>
                  <dd className="text-ink/90">{fact.value}</dd>
                </motion.div>
              ))}
              <motion.div variants={item} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 text-sm sm:grid-cols-[7rem_1fr]">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">{t.hero.localTime}</dt>
                <dd className="font-mono text-ink/90">
                  <LocalTime />
                </dd>
              </motion.div>
            </dl>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
