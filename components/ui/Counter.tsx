"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

export function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      requestAnimationFrame(() => setCount(end));
      return;
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className="font-display gradient-text text-4xl font-bold sm:text-5xl md:text-6xl"
    >
      {count}
      {suffix}
    </motion.span>
  );
}
