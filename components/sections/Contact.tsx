"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useRevealMotion } from "@/hooks/useRevealMotion";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: `https://wa.me/${profile.whatsapp}`,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "GitHub",
    value: "shrinetaadi",
    href: profile.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Aditya Singh Shrinet",
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
];

function ContactLinkItem({
  item,
  index,
}: {
  item: (typeof contactLinks)[number];
  index: number;
}) {
  const reveal = useRevealMotion(
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0 },
    { transition: { delay: index * 0.05 }, viewport: { once: true } },
  );

  return (
    <motion.a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="glow-border glass-card group flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-accent-cyan/30"
      {...reveal}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
        <item.icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] tracking-widest text-muted uppercase">
          {item.label}
        </p>
        <p className="truncate text-sm font-medium group-hover:text-accent-cyan">
          {item.value}
        </p>
      </div>
      {item.external && (
        <ExternalLink
          size={14}
          className="shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100"
        />
      )}
    </motion.a>
  );
}

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sidebarReveal = useRevealMotion(
    { opacity: 0, x: -24 },
    { opacity: 1, x: 0 },
    { transition: { duration: 0.55 }, viewport: { once: true } },
  );

  const formReveal = useRevealMotion(
    { opacity: 0, x: 24 },
    { opacity: 1, x: 0 },
    {
      transition: { duration: 0.55, delay: 0.1 },
      viewport: { once: true },
    },
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("website");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: honeypot }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-main">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <motion.div
            className="lg:sticky lg:top-28"
            {...sidebarReveal}
          >
            <SectionHeading
              label="Contact"
              title="Let's Work Together"
              subtitle="Open to full-time roles, freelance work, and interesting product collaborations in Android, IPTV, and full-stack."
            />

            <div className="mt-8 space-y-3 sm:mt-10">
              {contactLinks.map((item, index) => (
                <ContactLinkItem key={item.label} item={item} index={index} />
              ))}

              <div className="glow-border glass-card flex items-center gap-4 rounded-xl p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-violet/10 text-accent-violet">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-muted uppercase">
                    Location
                  </p>
                  <p className="text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>

            <a
              href={profile.resumePath}
              download
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent-cyan transition-colors hover:text-foreground"
            >
              <Download size={16} />
              Download resume
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glow-border glass-card rounded-2xl p-5 sm:p-8"
            {...formReveal}
          >
            <h3 className="font-display text-lg font-semibold sm:text-xl">
              Send a message
            </h3>
            <p className="mt-1 text-sm text-muted">
              I usually respond within 1–2 business days.
            </p>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] opacity-0"
              aria-hidden
            />

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-card-border bg-background/60 px-4 py-3 outline-none transition-colors focus:border-accent-cyan/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-card-border bg-background/60 px-4 py-3 outline-none transition-colors focus:border-accent-cyan/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-card-border bg-background/60 px-4 py-3 outline-none transition-colors focus:border-accent-cyan/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
                  placeholder="Tell me about your project or role..."
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
