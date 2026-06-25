"use client";

import dynamic from "next/dynamic";

export const HeroScene = dynamic(
  () => import("./HeroScene").then((mod) => mod.HeroScene),
  { ssr: false },
);
