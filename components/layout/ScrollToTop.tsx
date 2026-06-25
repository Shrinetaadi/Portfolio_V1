"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER = 320;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="glass-card glow-border fixed left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-card-border text-foreground transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan sm:left-6 sm:h-14 sm:w-14"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={22} />
    </button>
  );
}
