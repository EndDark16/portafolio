"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

/* Content cascades in once the panel has mostly slid into place.
   On close, the panel slides out (0.25s) while the content stays put: every
   variant defines an instant "exit" so AnimatePresence can finish and unmount
   the full-screen wrapper (a missing label would leave it blocking clicks). */
const bodyVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.14 } },
  exit: { transition: { staggerChildren: 0 } },
};
const childVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
  exit: { opacity: 1, transition: { duration: 0 } },
};

function useDrawerBehavior(open: boolean, onClose: () => void, panel: React.RefObject<HTMLDivElement | null>, returnFocusTo: HTMLElement | null) {
  useEffect(() => {
    if (!open) return;

    const { body, documentElement } = document;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    const focusFirst = window.requestAnimationFrame(() => {
      panel.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const focusables = panel.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.cancelAnimationFrame(focusFirst);
      window.removeEventListener("keydown", onKey);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
      returnFocusTo?.focus({ preventScroll: true });
    };
  }, [open, onClose, panel, returnFocusTo]);
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.section variants={childVariants} className="grid gap-4 border-t border-line py-7 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
      <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">{label}</h3>
      <div>{children}</div>
    </motion.section>
  );
}

export function ProjectDrawer({
  project,
  onClose,
  returnFocusTo,
}: {
  project: Project | null;
  onClose: () => void;
  returnFocusTo: HTMLElement | null;
}) {
  const { t, pick } = useLanguage();
  const panel = useRef<HTMLDivElement>(null);
  useDrawerBehavior(project !== null, onClose, panel, returnFocusTo);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div key="drawer-root" className="fixed inset-0 z-[70]" initial="hidden" animate="visible" exit="exit">
          <motion.div
            aria-hidden
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-[3px]"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            className="absolute inset-y-0 right-0 flex w-full max-w-[44rem] flex-col border-l border-line-strong bg-surface shadow-[0_0_80px_rgba(0,0,0,0.6)]"
            variants={{
              hidden: { x: "100%", opacity: 0.6 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.34, ease } },
              exit: { x: "100%", opacity: 0.6, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4 sm:px-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                <span className="text-accent-fg">{project.index}</span>
                <span className="mx-2 text-white/20">/</span>
                {pick(project.kind)}
              </p>
              <div className="flex items-center gap-3">
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-faint sm:inline">{t.drawer.hint}</span>
                <button
                  type="button"
                  data-autofocus
                  onClick={onClose}
                  aria-label={t.drawer.close}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-[color,border-color,transform] duration-200 hover:rotate-90 hover:border-accent/60 hover:text-accent-fg"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>

            {/* Body */}
            <motion.div variants={bodyVariants} className="flex-1 overflow-y-auto overscroll-contain px-6 pb-12 pt-8 sm:px-10">
              <motion.h2 variants={childVariants} id="drawer-title" className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl">
                {project.name}
              </motion.h2>
              <motion.p variants={childVariants} className="mt-5 text-base leading-relaxed text-muted">
                {pick(project.details.overview)}
              </motion.p>

              <div className="mt-10">
                <Block label={t.drawer.architecture}>
                  <ol className="relative">
                    {project.details.architecture.map((item, i) => (
                      <li key={item.layer.en} className="relative grid grid-cols-[1.75rem_1fr] gap-3 pb-5 last:pb-0">
                        <span className="relative flex justify-center">
                          <span className="mt-1.5 h-2 w-2 rounded-[2px] bg-accent" aria-hidden />
                          {i < project.details.architecture.length - 1 ? (
                            <span className="absolute bottom-[-0.25rem] top-5 w-px bg-line-strong" aria-hidden />
                          ) : null}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink">{pick(item.layer)}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{pick(item.detail)}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Block>

                <Block label={t.drawer.decisions}>
                  <ul className="space-y-3">
                    {project.decisions.map((d, i) => (
                      <li key={d.en} className="grid grid-cols-[1.5rem_1fr] gap-2 text-sm leading-relaxed text-ink/90">
                        <span className="font-mono text-[11px] text-accent-fg">{String.fromCharCode(97 + i)}.</span>
                        {pick(d)}
                      </li>
                    ))}
                  </ul>
                </Block>

                <Block label={t.drawer.challenges}>
                  <div className="space-y-4">
                    {project.details.challenges.map((c) => (
                      <div key={c.problem.en} className="rounded-md border border-line bg-surface-2 p-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{t.drawer.problem}</p>
                        <p className="mt-1 text-sm text-ink">{pick(c.problem)}</p>
                        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-fg">{t.drawer.solution}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{pick(c.solution)}</p>
                      </div>
                    ))}
                  </div>
                </Block>

                <Block label={t.drawer.stack}>
                  <p className="font-mono text-[13px] leading-relaxed text-ink/85">{project.stack.join(" / ")}</p>
                </Block>

                {project.relatedRepos?.length ? (
                  <Block label={t.drawer.related}>
                    <ul className="flex flex-wrap gap-2">
                      {project.relatedRepos.map((repo) => (
                        <li key={repo.url}>
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-surface-2 px-3 py-1.5 font-mono text-[12px] text-ink/85 transition-colors duration-150 hover:border-accent/50 hover:text-accent-fg"
                          >
                            <Github className="h-3.5 w-3.5" aria-hidden />
                            {repo.label}
                            <ArrowUpRight
                              className="h-3 w-3 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              aria-hidden
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Block>
                ) : null}
              </div>

              <motion.a
                variants={childVariants}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.97 }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-hover"
              >
                <Github className="h-4 w-4" aria-hidden />
                {t.drawer.repo}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
