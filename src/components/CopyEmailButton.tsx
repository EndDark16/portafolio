"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";

type Status = "idle" | "copied" | "failed";

async function writeClipboard(text: string) {
  // Modern API first; if it's missing or refused (permissions policy, non-secure
  // context, embedded webview), fall back to the legacy textarea + execCommand.
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      /* fall through to legacy path */
    }
  }
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "fixed";
  el.style.opacity = "0";
  document.body.appendChild(el);
  el.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(el);
  if (!ok) throw new Error("copy failed");
}

export function useCopyEmail() {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await writeClipboard(profile.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), 2000);
  };

  return { status, copyEmail };
}

/** Compact button: icon + label that swaps to "¡Copiado!". */
export function CopyEmailButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const { status, copyEmail } = useCopyEmail();
  const label = status === "copied" ? t.contact.copied : status === "failed" ? t.contact.copyFailed : t.contact.copy;

  return (
    <button
      type="button"
      onClick={copyEmail}
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label={`${t.contact.copy}: ${profile.email}`}
    >
      <span className="relative grid h-4 w-4 place-items-center">
        <AnimatePresence initial={false} mode="wait">
          {status === "copied" ? (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
              className="text-accent-fg"
            >
              <Check className="h-4 w-4" aria-hidden />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              <Copy className="h-4 w-4" aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span aria-live="polite">{label}</span>
    </button>
  );
}
