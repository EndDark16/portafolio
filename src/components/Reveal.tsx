"use client";

import { motion, useInView, type HTMLMotionProps, type Variants } from "framer-motion";
import { useRef } from "react";

/* -------------------------------------------------------------------------- */
/*  Shared motion vocabulary. Only transform + opacity, 200–350 ms.            */
/*  <MotionConfig reducedMotion="user"> (Portfolio.tsx) strips the transforms  */
/*  for users who ask for reduced motion; opacity fades remain.                */
/* -------------------------------------------------------------------------- */

export const ease = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = { once: true, amount: "some" } as const;

/** Child item: rises 14px and fades in. */
export const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.34, ease } },
};

/** Child item for horizontal sequences (chips, inline lists). */
export const itemX: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.26, ease } },
};

/**
 * Reveal-on-scroll state for a container.
 *
 * Why not `whileInView`? It is a *gesture*: with `once: true` it fires a single
 * time, and any child that mounts afterwards (e.g. when ES/EN swaps the copy)
 * inherits `initial="hidden"` and is never told to show, so it stays at
 * opacity 0. Driving a regular `animate` prop from `useInView` keeps the parent
 * in the "show" state permanently, so late-mounting children animate in too.
 */
export function useReveal<T extends Element>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, viewportOnce);
  return { ref, initial: "hidden", animate: inView ? "show" : "hidden" } as const;
}

/** Parent container: staggers its `variants`-driven children. */
export function stagger(gap = 0.06, delay = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  };
}

type DivProps = HTMLMotionProps<"div">;

/** Container that animates its children in sequence the first time it enters the viewport. */
export function Stagger({ gap = 0.06, delay = 0, children, ...rest }: DivProps & { gap?: number; delay?: number }) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <motion.div variants={stagger(gap, delay)} {...reveal} {...rest}>
      {children}
    </motion.div>
  );
}

/** A single staggered child. Must live inside <Stagger> (or any parent using `stagger()`). */
export function Item({ children, ...rest }: DivProps) {
  return (
    <motion.div variants={item} {...rest}>
      {children}
    </motion.div>
  );
}

/** Standalone one-off entrance. */
export function Reveal({ delay = 0, children, ...rest }: DivProps & { delay?: number }) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <motion.div
      {...reveal}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.34, delay, ease } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  id,
  compact = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
  /** Smaller title for sentence-length headings (e.g. the About lead). */
  compact?: boolean;
}) {
  return (
    <Stagger gap={0.07} className="relative grid gap-6 pt-6 md:grid-cols-12 md:gap-8">
      {/* Rule draws in from the left */}
      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-line"
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.5, ease } } }}
      />
      <motion.p variants={item} className="font-mono text-xs uppercase tracking-[0.16em] text-faint md:col-span-3">
        <span className="text-accent-fg">{index}</span>
        <span className="mx-2 text-white/20">/</span>
        {eyebrow}
      </motion.p>
      <div className="md:col-span-9">
        <motion.h2
          variants={item}
          id={id}
          className={`font-display font-semibold tracking-tight text-ink ${
            compact ? "text-2xl leading-[1.15] sm:text-3xl md:text-4xl" : "text-3xl leading-[1.05] sm:text-4xl md:text-5xl"
          }`}
        >
          {title}
        </motion.h2>
        {intro ? (
          <motion.p variants={item} className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {intro}
          </motion.p>
        ) : null}
      </div>
    </Stagger>
  );
}
