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

function shouldPlayIntro() {
  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const seen = sessionStorage.getItem("portfolio-intro-seen");
  return !reduced && !seen;
}

export function PageLoader({ children }: { children: ReactNode }) {
  const [introActive, setIntroActive] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const currentLine = LOADER_LINES[lineIndex] ?? "";
  const displayed = currentLine.slice(0, charIndex);

  useEffect(() => {
    if (!shouldPlayIntro()) return;

    const frame = requestAnimationFrame(() => {
      setIntroActive(true);
      document.body.style.overflow = "hidden";
    });

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!introActive) return;

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
      setIntroActive(false);
      document.body.style.overflow = "";
    }, END_PAUSE_MS);

    return () => clearTimeout(t);
  }, [introActive, charIndex, currentLine.length, lineIndex]);

  return (
    <>
      <AnimatePresence>
        {introActive && (
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

      {children}
    </>
  );
}
