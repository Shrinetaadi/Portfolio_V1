"use client";

import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADER_LINES = [
  "Building products.",
  "Solving problems.",
  "Shipping ideas.",
  "Learning every day.",
  "Creating experiences.",
  "Almost ready.",
];

const CHAR_MS = 42;
const LINE_PAUSE_MS = 380;
const END_PAUSE_MS = 500;

export function PageLoader({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const currentLine = LOADER_LINES[lineIndex] ?? "";
  const displayed = currentLine.slice(0, charIndex);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const seen = sessionStorage.getItem("portfolio-intro-seen");

    if (reduced || seen) {
      setActive(false);
      setReady(true);
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    if (charIndex < currentLine.length) {
      const t = window.setTimeout(() => setCharIndex((c) => c + 1), CHAR_MS);
      return () => clearTimeout(t);
    }

    if (lineIndex < LOADER_LINES.length - 1) {
      const t = window.setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, LINE_PAUSE_MS);
      return () => clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      sessionStorage.setItem("portfolio-intro-seen", "1");
      setActive(false);
      window.setTimeout(() => setReady(true), 550);
    }, END_PAUSE_MS);

    return () => clearTimeout(t);
  }, [active, charIndex, currentLine.length, lineIndex]);

  useEffect(() => {
    if (!active) {
      document.body.style.overflow = "";
    }
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            key="intro-loader"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background px-6"
            style={{ paddingTop: "env(safe-area-inset-top)" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            aria-live="polite"
            aria-busy="true"
            role="status"
          >
            <p className="text-center text-lg text-foreground/90 sm:text-xl">
              {displayed}
              <span
                className="ml-0.5 inline-block h-[1.05em] w-0.5 animate-pulse bg-foreground/75 align-[-0.08em]"
                aria-hidden
              />
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={
          ready
            ? "opacity-100"
            : "pointer-events-none fixed inset-0 opacity-0"
        }
        aria-hidden={!ready}
      >
        {children}
      </div>
    </>
  );
}
