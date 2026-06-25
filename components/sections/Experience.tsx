"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useRevealMotion } from "@/hooks/useRevealMotion";

const PREVIEW_COUNT = 5;

function ExperienceCard({
  job,
  index,
}: {
  job: (typeof experience)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = job.highlights.length > PREVIEW_COUNT;
  const visible = expanded
    ? job.highlights
    : job.highlights.slice(0, PREVIEW_COUNT);

  const reveal = useRevealMotion(
    { opacity: 0, x: -24 },
    { opacity: 1, x: 0 },
    {
      transition: { duration: 0.5, delay: index * 0.1 },
      viewport: { once: true, margin: "-40px" },
    },
  );

  return (
    <motion.article
      className="grid items-start gap-4 md:grid-cols-[3.5rem_1px_1fr] md:gap-x-6"
      {...reveal}
    >
      <span className="font-display hidden pt-2 text-right text-3xl font-bold text-accent-cyan/30 md:block lg:text-4xl">
        {job.id}
      </span>

      <div
        className="relative hidden md:block"
        aria-hidden
      >
        <div className="absolute top-3 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent-cyan bg-background" />
        <div className="mx-auto h-full min-h-[calc(100%-0.75rem)] w-px bg-gradient-to-b from-accent-cyan/50 via-accent-violet/30 to-transparent" />
      </div>

      <div className="glow-border glass-card rounded-2xl p-5 sm:p-8">
        <div className="flex items-center gap-3 md:hidden">
          <span className="font-display text-2xl font-bold text-accent-cyan/40">
            {job.id}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/40 to-transparent" />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-bold sm:text-2xl">
              {job.company}
            </h3>
            <p className="mt-1 text-sm text-accent-cyan sm:text-base">
              {job.role}
            </p>
            {"employmentType" in job && job.employmentType && (
              <p className="mt-1 text-[10px] tracking-wide text-muted uppercase sm:text-xs">
                {job.employmentType}
              </p>
            )}
          </div>
          <div className="text-left text-xs text-muted sm:text-right sm:text-sm">
            <p>{job.period}</p>
            <p className="mt-0.5">{job.location}</p>
          </div>
        </div>

        <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
          {visible.map((point) => (
            <li
              key={point}
              className="flex gap-2.5 text-xs leading-relaxed text-muted sm:gap-3 sm:text-sm before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent-cyan"
            >
              {point}
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-1 text-xs text-accent-cyan transition-colors hover:text-foreground sm:text-sm"
          >
            {expanded ? "Show less" : `Show ${job.highlights.length - PREVIEW_COUNT} more`}
            <ChevronDown
              size={14}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}

        {"technologies" in job && job.technologies && (
          <div className="mt-5 border-t border-card-border pt-5 sm:mt-6 sm:pt-6">
            <p className="mb-2 text-[10px] font-semibold tracking-widest text-accent-violet uppercase sm:mb-3 sm:text-xs">
              Technologies
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {job.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-card-border bg-background/50 px-2.5 py-0.5 font-mono text-[10px] text-foreground/80 sm:px-3 sm:py-1 sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="container-main">
        <SectionHeading
          label="Experience"
          title="Where I've built"
          subtitle="Three roles — Android, IPTV & hospitality software"
        />
        <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
          {experience.map((job, index) => (
            <ExperienceCard key={`${job.company}-${job.role}`} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
