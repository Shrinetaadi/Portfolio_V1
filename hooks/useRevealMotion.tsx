"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

const ANCHOR_SUPPRESS_MS = 900;

type RevealMotionContextValue = {
  suppressEntrance: boolean;
};

const RevealMotionContext = createContext<RevealMotionContextValue>({
  suppressEntrance: false,
});

export function RevealMotionProvider({ children }: { children: ReactNode }) {
  const [suppressEntrance, setSuppressEntrance] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const suppressForAnchorNav = useCallback(() => {
    setSuppressEntrance(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSuppressEntrance(false);
      timerRef.current = null;
    }, ANCHOR_SUPPRESS_MS);
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;
    const frame = requestAnimationFrame(() => suppressForAnchorNav());
    return () => cancelAnimationFrame(frame);
  }, [suppressForAnchorNav]);

  useEffect(() => {
    const onHashChange = () => suppressForAnchorNav();
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      suppressForAnchorNav();
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick, true);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [suppressForAnchorNav]);

  return (
    <RevealMotionContext.Provider value={{ suppressEntrance }}>
      {children}
    </RevealMotionContext.Provider>
  );
}

type RevealMotionOptions = {
  transition?: Transition;
  viewport?: ViewportOptions;
};

export function useRevealMotion(
  hidden: TargetAndTransition,
  visible: TargetAndTransition,
  options?: RevealMotionOptions,
) {
  const { suppressEntrance } = useContext(RevealMotionContext);
  const viewport = options?.viewport ?? { once: true, margin: "-40px" };

  if (suppressEntrance) {
    return {
      initial: false as const,
      whileInView: visible,
      viewport,
      transition: { duration: 0 },
    };
  }

  return {
    initial: hidden,
    whileInView: visible,
    viewport,
    transition: options?.transition,
  };
}
