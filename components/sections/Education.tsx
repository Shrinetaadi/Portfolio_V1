"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-main">
        <SectionHeading label="Education" title="Academic Background" />
        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-border glass-card flex gap-4 rounded-2xl p-5 sm:gap-5 sm:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-violet/20 text-accent-violet">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">{item.degree}</h3>
                <p className="mt-1 text-muted">{item.school}</p>
                {"location" in item && item.location && (
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted/80">
                    <MapPin size={14} />
                    {item.location}
                  </p>
                )}
                <p className="mt-2 text-sm text-accent-cyan">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
