"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";
import { useRevealMotion } from "@/hooks/useRevealMotion";

type GitHubRepoCardProps = {
  repo: GitHubRepo;
  index: number;
  languageColors: Record<string, string>;
};

export function GitHubRepoCard({
  repo,
  index,
  languageColors,
}: GitHubRepoCardProps) {
  const langColor = repo.language
    ? (languageColors[repo.language] ?? "#a1a1aa")
    : null;

  const reveal = useRevealMotion(
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0 },
    {
      transition: { duration: 0.45, delay: index * 0.06 },
      viewport: { once: true, margin: "-40px" },
    },
  );

  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className="group glow-border glass-card flex h-full flex-col rounded-2xl p-5 transition-shadow sm:p-6"
      {...reveal}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display truncate text-base font-semibold text-foreground group-hover:text-accent-cyan sm:text-lg">
          {repo.name}
        </h3>
        <ExternalLink
          size={14}
          className="mt-1 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
        {repo.description ?? "No description provided."}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-card-border pt-4 text-xs text-muted">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: langColor ?? "#a1a1aa" }}
            />
            {repo.language}
          </span>
        )}
        {repo.stars > 0 && (
          <span className="inline-flex items-center gap-1">
            <Star size={12} />
            {repo.stars}
          </span>
        )}
        {repo.topics.slice(0, 2).map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-card-border bg-background/50 px-2 py-0.5 font-mono text-[10px]"
          >
            {topic}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
