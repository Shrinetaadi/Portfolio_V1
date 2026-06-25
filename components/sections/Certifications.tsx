"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-card/30">
      <div className="container-main">
        <SectionHeading label="Certifications" title="Credentials" />
        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="glow-border glass-card group flex items-start gap-4 rounded-2xl p-6 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
                <Award size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display font-semibold group-hover:text-accent-cyan">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <ExternalLink
                size={16}
                className="shrink-0 text-muted transition-colors group-hover:text-accent-cyan"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
