"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { featuredTechs } from "@/lib/tech-logos";
import { skills as skillGroups } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogo } from "@/components/ui/TechLogo";

function LogoTile({ slug, color, name }: { slug: string; color: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const src = `https://cdn.simpleicons.org/${slug}/${color}`;

  return (
    <div className="flex shrink-0 flex-col items-center gap-1.5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-card-border bg-card/80 sm:h-14 sm:w-14 sm:rounded-2xl">
        {failed ? (
          <span className="text-[10px] text-muted">{name.slice(0, 2)}</span>
        ) : (
          <Image
            src={src}
            alt={name}
            width={32}
            height={32}
            unoptimized
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <span className="max-w-[4rem] truncate text-center text-[9px] text-muted sm:max-w-none sm:text-[11px]">
        {name}
      </span>
    </div>
  );
}

function LogoCloud() {
  const reducedMotion = useReducedMotion();
  const doubled = [...featuredTechs, ...featuredTechs];

  if (reducedMotion) {
    return (
      <div className="mt-8 grid grid-cols-4 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-5">
        {featuredTechs.map((tech) => (
          <LogoTile key={tech.slug} {...tech} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative mt-8 overflow-hidden py-3 sm:mt-10 sm:py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-16" />
      <motion.div
        className="flex w-max gap-5 sm:gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((tech, i) => (
          <LogoTile key={`${tech.slug}-${i}`} {...tech} />
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-main">
        <SectionHeading
          label="Skills"
          title="My Tech Stacks"
          subtitle="Android, IPTV streaming, React/Node full-stack, and system integration."
        />

        <LogoCloud />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glow-border glass-card rounded-2xl p-4 sm:p-6"
            >
              <h3 className="font-display mb-3 text-[10px] font-semibold tracking-widest text-accent-cyan uppercase sm:mb-4 sm:text-xs">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.items.map((skill) => (
                  <TechLogo key={skill} name={skill} size={20} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
