"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, PanelRightOpen } from "lucide-react";
import { useCallback, useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";
import { ProjectDrawer } from "./ProjectDrawer";
import { SectionHeading, item, itemX, stagger, useReveal } from "./Reveal";

function Flow({ project }: { project: Project }) {
  const { pick, t } = useLanguage();
  return (
    <div>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">{t.projects.flow}</p>
      {/* The arrow belongs to the *next* step, so a wrapped line starts with "→" instead of ending on one. */}
      <motion.ol
        variants={stagger(0.06, 0.15)}
        className="flex flex-wrap items-center gap-x-1.5 gap-y-2 font-mono text-[12px] text-ink/85"
      >
        {project.flow.map((step, i) => (
          <motion.li key={step.en} variants={itemX} className="inline-flex items-center gap-1.5">
            {i > 0 ? (
              <span aria-hidden className="text-accent-fg/80">
                →
              </span>
            ) : null}
            <span className="rounded-[4px] border border-line bg-surface-2 px-2 py-1 transition-colors duration-200 group-hover:border-white/[0.14]">
              {pick(step)}
            </span>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}

function Decisions({ project }: { project: Project }) {
  const { pick, t } = useLanguage();
  return (
    <div>
      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">{t.projects.decisions}</p>
      <motion.ul variants={stagger(0.07, 0.2)}>
        {project.decisions.map((d, i) => (
          <motion.li
            key={d.en}
            variants={item}
            className="grid grid-cols-[1.5rem_1fr] gap-2 border-b border-line py-3 text-sm leading-relaxed text-muted last:border-0"
          >
            <span className="font-mono text-[11px] text-accent-fg">{String.fromCharCode(97 + i)}.</span>
            <span>{pick(d)}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

function ProjectRow({
  project,
  featured,
  mirrored,
  onOpen,
}: {
  project: Project;
  featured: boolean;
  mirrored: boolean;
  onOpen: (p: Project, trigger: HTMLButtonElement) => void;
}) {
  const { pick, t } = useLanguage();
  const reveal = useReveal<HTMLElement>();

  return (
    <motion.article
      aria-labelledby={`project-${project.id}`}
      variants={stagger(0.08)}
      {...reveal}
      className="group relative grid gap-8 py-12 md:grid-cols-12 md:gap-8 md:py-16"
    >
      {/* Top rule draws in; an accent segment grows over it on hover */}
      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-line"
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
      />
      <span
        aria-hidden
        className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-[0.18]"
      />

      {/* Index column */}
      <motion.div variants={item} className="flex items-start justify-between md:col-span-2 md:block">
        <span
          aria-hidden
          className="inline-block font-display text-6xl font-semibold leading-none tracking-tighter text-white/[0.12] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-accent md:text-7xl"
        >
          {project.index}
        </span>
        {featured ? (
          <span className="inline-block rounded-full border border-accent/50 bg-accent-muted px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-fg md:mt-5">
            {t.projects.featured}
          </span>
        ) : null}
      </motion.div>

      {/* Main column */}
      <motion.div variants={item} className={mirrored ? "md:order-3 md:col-span-5 md:col-start-8" : "md:col-span-6"}>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">{pick(project.kind)}</p>
        <h3
          id={`project-${project.id}`}
          className={`mt-2 font-display font-semibold leading-[1.02] tracking-tight text-ink ${
            featured ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {project.name}
        </h3>
        <p className={`mt-5 leading-relaxed text-muted ${featured ? "text-base sm:text-lg" : "text-base"}`}>
          {pick(project.summary)}
        </p>

        <div className="mt-7">
          <Flow project={project} />
        </div>

        <p className="mt-6 font-mono text-[12px] leading-relaxed text-faint">{project.stack.join(" / ")}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <motion.button
            type="button"
            onClick={(e) => onOpen(project, e.currentTarget)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-2 px-4 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent/70 hover:text-white"
            aria-haspopup="dialog"
          >
            <PanelRightOpen className="h-4 w-4 text-accent-fg" aria-hidden />
            {t.projects.details}
          </motion.button>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-1.5 px-2 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink"
          >
            <Github className="h-4 w-4" aria-hidden />
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-px transition-[background-size] duration-300 group-hover/link:bg-[length:100%_1px]">
              {t.projects.code}
            </span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              aria-hidden
            />
          </a>
        </div>
      </motion.div>

      {/* Decisions column */}
      <motion.div
        variants={item}
        className={`md:col-span-4 md:pt-8 ${mirrored ? "md:order-2 md:col-start-3" : "md:col-start-9"}`}
      >
        <Decisions project={project} />
      </motion.div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [active, setActive] = useState<Project | null>(null);
  const [trigger, setTrigger] = useState<HTMLButtonElement | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-anchor py-16 md:py-24">
      <div className="page-shell">
        <SectionHeading
          id="projects-title"
          index={t.projects.index}
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          intro={t.projects.intro}
        />

        <div className="mt-14">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              featured={i === 0}
              mirrored={i % 2 === 1}
              onOpen={(p, el) => {
                setTrigger(el);
                setActive(p);
              }}
            />
          ))}
        </div>
      </div>

      <ProjectDrawer project={active} onClose={close} returnFocusTo={trigger} />
    </section>
  );
}
