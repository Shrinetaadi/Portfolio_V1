"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogo } from "@/components/ui/TechLogo";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;
  const isFeatured = "featured" in project && project.featured === true;

  return (
    <article className={`group relative ${isFeatured ? "lg:col-span-2" : ""}`}>
      <div
        className={`glow-border glass-card overflow-hidden rounded-2xl transition-all duration-500 ${
          isFeatured
            ? "grid lg:grid-cols-[1.1fr_1fr]"
            : `grid md:grid-cols-2 ${!isEven ? "md:[&>*:first-child]:order-2" : ""}`
        }`}
      >
        {"image" in project && project.image && (
          <div
            className={`relative overflow-hidden ${
              isFeatured ? "min-h-[220px] lg:min-h-[360px]" : "min-h-[200px] md:min-h-full"
            }`}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                quality={100}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-background/30 md:to-background/80" />

            <span className="absolute top-4 left-4 font-display text-6xl font-bold text-accent-cyan/15 sm:text-7xl">
              {project.id}
            </span>

            <span className="absolute top-4 right-4 rounded-full border border-accent-cyan/40 bg-background/85 px-3 py-1 text-xs font-medium text-accent-cyan backdrop-blur-sm">
              {project.badge}
            </span>
            {isFeatured && (
              <span className="absolute bottom-4 left-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet px-3 py-1 text-[10px] font-semibold tracking-wide text-background uppercase">
                Main Project
              </span>
            )}
          </div>
        )}

        <div className="relative flex flex-col p-5 sm:p-7 lg:p-8">
          <div className="absolute top-0 right-0 h-24 w-24 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_70%)]" />

          <div className="mb-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet" />

          <h3 className="font-display text-xl font-bold sm:text-2xl lg:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-accent-violet sm:text-base">
            {project.subtitle}
          </p>
          {"company" in project && project.company && (
            <p className="mt-2 text-[10px] tracking-widest text-muted uppercase sm:text-xs">
              {project.company}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
            {project.description}
          </p>

          {"highlights" in project && project.highlights && (
            <div className="mt-5">
              <ul className="space-y-2">
                {project.highlights.slice(0, 3).map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm text-muted before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent-cyan"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {expanded && (
                <ul className="mt-2 space-y-2">
                  {project.highlights.slice(3).map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm text-muted before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent-violet"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {project.highlights.length > 3 && (
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className="mt-3 flex items-center gap-1 text-xs text-accent-cyan transition-colors hover:text-foreground sm:text-sm"
                >
                  {expanded ? "Show less" : `${project.highlights.length - 3} more highlights`}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                  />
                </button>
              )}
            </div>
          )}

          <p className="mt-4 rounded-xl border border-card-border bg-background/40 px-3 py-2.5 text-sm text-foreground/80">
            <span className="font-medium text-accent-cyan">Role · </span>
            {project.role}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech.map((t) => (
              <TechLogo key={t} name={t} size={18} />
            ))}
          </div>
        </div>
      </div>

      {index < projects.length - 1 && (
        <div className="mx-auto my-6 hidden h-8 w-px bg-gradient-to-b from-accent-cyan/40 to-transparent lg:block" />
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-main">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          subtitle="Catvision IPTV is the flagship — plus production Android apps and full-stack side projects."
        />

        <a
          href="#github"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent-cyan"
        >
          See open-source repos below
          <ArrowUpRight size={14} />
        </a>

        <div className="mt-10 flex flex-col gap-8 sm:mt-14 sm:gap-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
