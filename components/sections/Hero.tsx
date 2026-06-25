"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { HeroScene } from "@/components/three/HeroSceneLoader";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden section-padding pt-[calc(4.75rem+env(safe-area-inset-top))] sm:pt-24">
      <div className="hidden sm:block">
        <HeroScene />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={profile.heroImage}
          alt=""
          fill
          priority
          quality={100}
          unoptimized
          className="translate-y-4 object-cover object-[72%_38%] opacity-35 mix-blend-luminosity sm:translate-y-6 sm:object-[75%_40%] sm:opacity-45 md:translate-y-8 md:object-[78%_42%] md:opacity-55 lg:object-[80%_44%] xl:object-[82%_46%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/25 md:via-background/88 md:to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.2em] text-accent-cyan uppercase sm:text-sm">
            Hi, I&apos;m
          </p>
          <h1 className="font-display text-[2rem] leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.shortName}
            <br />
            <span className="gradient-text">Singh Shrinet</span>
          </h1>
          <p className="mt-4 text-base text-muted sm:mt-6 sm:text-xl md:text-2xl">
            {profile.title}
            <span className="text-foreground/30"> · </span>
            <span className="block sm:inline">{profile.subtitle}</span>
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap">
            <a href="#projects" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto">View Work</Button>
            </a>
            <a href={profile.resumePath} download className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                <Download size={18} />
                Resume
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                <Mail size={18} />
                Contact
              </Button>
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted sm:flex"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </a>
    </section>
  );
}
