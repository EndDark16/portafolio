"use client";

import { motion } from "framer-motion";
import { stack } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";
import { SectionHeading, item, itemX, stagger, useReveal } from "./Reveal";

function RevealTbody({ children }: { children: React.ReactNode }) {
  const reveal = useReveal<HTMLTableSectionElement>();
  return (
    <motion.tbody variants={stagger(0.07)} {...reveal} className="border-b border-line-strong">
      {children}
    </motion.tbody>
  );
}

export function TechStack() {
  const { t, pick } = useLanguage();

  return (
    <section id="stack" aria-labelledby="stack-title" className="section-anchor bg-surface/70 py-16 md:py-24">
      <div className="page-shell">
        <SectionHeading
          id="stack-title"
          index={t.stack.index}
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          intro={t.stack.intro}
        />

        <table className="mt-14 w-full border-collapse text-left">
          <caption className="sr-only">{t.stack.title}</caption>
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-line-strong font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              <th scope="col" className="w-[26%] pb-3 font-normal">{t.stack.columns.area}</th>
              <th scope="col" className="w-[30%] pb-3 font-normal">{t.stack.columns.use}</th>
              <th scope="col" className="pb-3 font-normal">{t.stack.columns.tools}</th>
            </tr>
          </thead>
          {stack.map((group, gi) => (
            <RevealTbody key={group.title.en}>
              {group.rows.map((row, ri) => (
                <motion.tr
                  key={row.use.en}
                  variants={item}
                  className="group flex flex-col border-t border-line transition-colors duration-200 first:border-t-0 hover:bg-white/[0.025] md:table-row"
                >
                  {ri === 0 ? (
                    <th scope="rowgroup" rowSpan={group.rows.length} className="pb-1 pt-6 align-top font-normal md:py-5 md:pr-6">
                      <span className="font-mono text-[11px] text-accent-fg">0{gi + 1}</span>
                      <span className="mt-1 block font-display text-xl font-semibold leading-tight tracking-tight text-ink md:text-2xl">
                        {pick(group.title)}
                      </span>
                    </th>
                  ) : null}
                  <td className="pt-4 text-sm text-muted transition-colors duration-200 group-hover:text-ink/90 md:py-5 md:pr-6 md:align-top">
                    <span className="inline-flex items-center gap-2">
                      <span
                        aria-hidden
                        className="hidden h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-3 md:inline-block"
                      />
                      {pick(row.use)}
                    </span>
                  </td>
                  <td className="pb-4 pt-1.5 md:py-5 md:align-top">
                    <motion.ul variants={stagger(0.03, 0.08)} className="flex flex-wrap gap-x-1 gap-y-1 text-[15px] text-ink">
                      {row.tools.map((tool, ti) => (
                        <motion.li key={tool} variants={itemX} className="whitespace-nowrap">
                          {tool}
                          {ti < row.tools.length - 1 ? (
                            <span aria-hidden className="ml-1 text-white/25">
                              ·
                            </span>
                          ) : null}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </td>
                </motion.tr>
              ))}
            </RevealTbody>
          ))}
        </table>
      </div>
    </section>
  );
}
