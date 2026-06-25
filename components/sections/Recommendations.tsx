"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { recommendations } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useRevealMotion } from "@/hooks/useRevealMotion";

function RecommendationCard({
  rec,
  index,
}: {
  rec: (typeof recommendations)[number];
  index: number;
}) {
  const reveal = useRevealMotion(
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0 },
    {
      transition: { duration: 0.6, delay: index * 0.1 },
      viewport: { once: true },
    },
  );

  return (
    <motion.blockquote
      className="glow-border glass-card relative mt-8 rounded-2xl p-5 sm:mt-10 sm:p-8 md:p-10"
      {...reveal}
    >
      <Quote
        size={40}
        className="absolute top-6 right-6 text-accent-cyan/20"
      />
      <p className="text-lg leading-relaxed text-foreground/90 italic">
        &ldquo;{rec.quote}&rdquo;
      </p>
      <footer className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-card-border pt-6">
        <div>
          <cite className="font-display text-lg font-semibold not-italic">
            {rec.name}
          </cite>
          <p className="text-sm text-muted">{rec.role}</p>
        </div>
        <a
          href={rec.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent-cyan transition-colors hover:underline"
        >
          View on LinkedIn
        </a>
      </footer>
    </motion.blockquote>
  );
}

export function Recommendations() {
  if (recommendations.length === 0) return null;

  return (
    <section id="recommendations" className="section-padding">
      <div className="container-main">
        <SectionHeading
          label="Recommendations"
          title="What colleagues say"
          subtitle="Endorsements from LinkedIn"
        />
        <div className="mt-16">
          {recommendations.map((rec, index) => (
            <RecommendationCard key={rec.name} rec={rec} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
