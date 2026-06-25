"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card border-b border-card-border py-3" : "py-6"
        }`}
      >
        <div className="container-main flex max-w-6xl items-center justify-between">
          <a href="#" className="font-display text-lg font-bold tracking-tight">
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
            className="text-foreground lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-card fixed inset-x-4 top-20 z-40 rounded-2xl border border-card-border p-6 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
