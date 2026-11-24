"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useCopyEmail } from "./CopyEmailButton";
import { useLanguage } from "./LanguageProvider";
import { Item, SectionHeading, Stagger, item, stagger } from "./Reveal";

function About() {
  const { t } = useLanguage();
  return (
    <section id="about" aria-labelledby="about-title" className="section-anchor pb-8 pt-16 md:pb-12 md:pt-24">
      <div className="page-shell">
        <SectionHeading id="about-title" index={t.about.index} eyebrow={t.about.eyebrow} title={t.about.lead} compact />

        <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-12 md:gap-8">
          <Stagger gap={0.08} className="space-y-5 text-base leading-relaxed text-muted md:col-span-5 md:col-start-4">
            {t.about.body.map((p, i) => (
              <Item key={`about-body-${i}`}>
                <p>{p}</p>
              </Item>
            ))}
          </Stagger>
          <Stagger gap={0.06} delay={0.1} className="md:col-span-4 md:col-start-9">
            <dl className="border-t border-line-strong">
              {t.about.facts.map((f, i) => (
                <motion.div
                  key={`about-fact-${i}`}
                  variants={item}
                  className="group border-b border-line py-3.5 transition-colors duration-200 hover:border-white/[0.16]"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint transition-colors duration-200 group-hover:text-accent-fg">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-ink/90">{f.value}</dd>
                </motion.div>
              ))}
            </dl>
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t, pick, lang } = useLanguage();
  const { status, copyEmail } = useCopyEmail();

  const links = [
    { id: "linkedin", href: profile.linkedinUrl, label: "LinkedIn", detail: profile.linkedinLabel, icon: Linkedin, external: true },
    { id: "github", href: profile.githubUrl, label: "GitHub", detail: profile.githubLabel, icon: Github, external: true },
    { id: "cv", href: pick(profile.cv), label: t.nav.cv, detail: `PDF · ${lang.toUpperCase()}`, icon: Download, download: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-anchor pb-10 pt-12 md:pt-16">
      <div className="page-shell">
        <SectionHeading id="contact-title" index={t.contact.index} eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.body} />

        <div className="mt-10 md:grid md:grid-cols-12 md:gap-8">
          <Stagger gap={0.08} className="md:col-span-9 md:col-start-4">
          {/* The email itself is the primary action */}
          <motion.div variants={item} className="flex flex-col gap-4 border-y border-line-strong py-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={copyEmail}
              className="group min-w-0 text-left"
              aria-label={`${t.contact.copy}: ${profile.email}`}
            >
              <span className="block font-display [overflow-wrap:anywhere] text-[clamp(1.25rem,3.6vw,2.25rem)] font-semibold leading-tight tracking-tight text-ink transition-colors duration-150 group-hover:text-accent-fg">
                {profile.email}
              </span>
            </button>
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <motion.button
                type="button"
                onClick={copyEmail}
                whileTap={{ scale: 0.96 }}
                animate={status === "copied" ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                transition={{ duration: 0.25 }}
                className={`inline-flex min-w-[8.5rem] items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                  status === "copied" ? "bg-ink text-canvas" : "bg-accent text-white hover:bg-accent-hover"
                }`}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2"
                  >
                    {status === "copied" ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
                    {status === "copied" ? t.contact.copied : status === "failed" ? t.contact.copyFailed : t.contact.copy}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
              <span className="sr-only" aria-live="polite">
                {status === "copied" ? t.contact.copied : ""}
              </span>
              <motion.a
                href={`mailto:${profile.email}`}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:border-white/30"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {t.contact.write}
              </motion.a>
            </div>
          </motion.div>

          <motion.ul variants={stagger(0.07)} className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {links.map(({ id, href, label, detail, icon: Icon, external, download }) => (
              <motion.li key={id} variants={item}>
                <motion.a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  {...(download ? { download: true } : {})}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="group flex h-full items-start justify-between gap-4 rounded-lg border border-white/10 bg-surface/60 p-5 transition-colors duration-200 hover:border-accent/50 hover:bg-surface-2"
                >
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 text-sm font-medium text-ink">
                      <Icon className="h-4 w-4 shrink-0 text-muted transition-colors duration-150 group-hover:text-accent-fg" aria-hidden />
                      {label}
                    </span>
                    <span className="mt-1.5 block truncate font-mono text-[11px] text-faint">{detail}</span>
                  </span>
                  <ArrowUpRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-faint transition-[color,transform] duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-fg"
                    aria-hidden
                  />
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export function AboutContact() {
  return (
    <>
      <About />
      <Contact />
    </>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-16" data-lang-fade>
      <div className="page-shell flex flex-col gap-4 border-t border-line py-8 font-mono text-[11px] uppercase tracking-[0.12em] text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="normal-case tracking-normal">{t.footer.rights}</p>
        <a href="#top" className="group inline-flex items-center gap-2 text-ink transition-colors duration-150 hover:text-accent-fg">
          {t.contact.backToTop}
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5" aria-hidden />
        </a>
      </div>
    </footer>
  );
}
