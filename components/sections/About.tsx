"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Timer } from "lucide-react";
import { profile, aboutBio } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { useRevealMotion } from "@/hooks/useRevealMotion";

function AboutCard({
  delay,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reveal = useRevealMotion(
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0 },
    { transition: { delay } },
  );

  return (
    <motion.div className={className} {...reveal}>
      {children}
    </motion.div>
  );
}

export function About() {
  const bioReveal = useRevealMotion(
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0 },
    { transition: { delay: 0.15 } },
  );

  return (
    <section id="about" className="section-padding">
      <div className="container-main">
        <SectionHeading
          label="About Me"
          title="Android, IPTV & full-stack engineer"
          subtitle="Lead builder of Catvision IPTV — hospitality guest experiences on Android TV, Samsung, and LG."
        />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
          <AboutCard className="glow-border glass-card col-span-2 flex items-center gap-4 rounded-2xl p-4 sm:col-span-1 sm:flex-col sm:items-start sm:p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan sm:h-12 sm:w-12">
              <Timer size={22} />
            </div>
            <div>
              <Counter end={profile.yearsExperience} suffix="+" />
              <p className="mt-1 text-xs text-muted sm:text-sm">
                Years experience
              </p>
            </div>
          </AboutCard>

          <AboutCard
            delay={0.05}
            className="glow-border glass-card rounded-2xl p-4 sm:p-6"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-violet">
              <Briefcase size={20} />
            </div>
            <p className="font-display text-sm font-semibold sm:text-base">
              {profile.company}
            </p>
            <p className="mt-1 text-xs text-muted">{profile.companyTenure}</p>
          </AboutCard>

          <AboutCard
            delay={0.1}
            className="glow-border glass-card rounded-2xl p-4 sm:p-6"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/10 text-accent-violet">
              <MapPin size={20} />
            </div>
            <p className="text-sm font-medium sm:text-base">Noida, India</p>
            <p className="mt-1 text-xs text-muted">On-site · Full-time</p>
          </AboutCard>
        </div>

        <motion.div
          className="glow-border glass-card mt-4 rounded-2xl p-5 sm:mt-6 sm:p-8"
          {...bioReveal}
        >
          <p className="text-sm leading-relaxed text-foreground/90 sm:text-base md:text-lg">
            {aboutBio}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
