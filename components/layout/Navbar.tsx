"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/lib/content";

const menuEase = [0.22, 1, 0.36, 1] as const;

function lockBodyScroll() {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  const prevOverflow = document.body.style.overflow;
  const prevPaddingRight = document.body.style.paddingRight;

  document.body.style.overflow = "hidden";
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  return () => {
    document.body.style.overflow = prevOverflow;
    document.body.style.paddingRight = prevPaddingRight;
  };
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    return lockBodyScroll();
  }, [open]);

  const showBar = scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          showBar
            ? "glass-card border-b border-card-border shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            : "bg-background/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
        }`}
        style={{
          paddingTop: "max(0.625rem, env(safe-area-inset-top))",
        }}
      >
        <div
          className={`container-main flex max-w-6xl items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 ${
            showBar ? "py-2.5 sm:py-3" : "py-3 sm:py-4 lg:py-6"
          }`}
        >
          <a
            href="#"
            className="font-display text-lg font-bold tracking-tight sm:text-xl"
            onClick={() => setOpen(false)}
          >
            AS<span className="gradient-text">.</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-card-border px-4 py-2 text-sm transition-all hover:border-accent-cyan/40 hover:text-accent-cyan"
            >
              <Download size={14} />
              Resume
            </a>
          </nav>

          <button
            type="button"
            className="-mr-1 flex h-11 w-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-card/60 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: menuEase }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-background/88"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.32, ease: menuEase }}
              className="glass-card absolute inset-x-4 max-h-[min(70dvh,520px)] overflow-y-auto rounded-2xl border border-card-border p-5 shadow-[0_16px_48px_rgba(0,0,0,0.45)] sm:inset-x-6"
              style={{
                top: "calc(3.75rem + env(safe-area-inset-top))",
                transformOrigin: "top center",
              }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-muted transition-colors hover:bg-card/50 hover:text-foreground active:bg-card/60"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={profile.resumePath}
                  download
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-card-border px-4 py-3 text-sm font-medium transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
