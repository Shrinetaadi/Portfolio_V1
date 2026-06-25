"use client";

import { useState } from "react";
import Image from "next/image";
import { getTechLogoUrl } from "@/lib/tech-logos";

type TechLogoProps = {
  name: string;
  size?: number;
  className?: string;
};

export function TechLogo({ name, size = 22, className = "" }: TechLogoProps) {
  const [failed, setFailed] = useState(false);
  const url = getTechLogoUrl(name);
  const label = name.replace(" — LinkedIn Assessed", " ✓");

  if (!url || failed) {
    return (
      <span
        className={`inline-flex max-w-full items-center rounded-lg border border-card-border bg-background/60 px-2.5 py-1.5 text-[10px] text-muted sm:text-xs ${className}`}
      >
        <span className="truncate">{label}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex max-w-full items-center gap-1.5 rounded-lg border border-card-border bg-background/40 px-2 py-1.5 sm:gap-2 sm:rounded-xl sm:px-2.5 sm:py-2 ${className}`}
      title={name}
    >
      <Image
        src={url}
        alt=""
        width={size}
        height={size}
        unoptimized
        onError={() => setFailed(true)}
        className="shrink-0"
      />
      <span className="truncate text-[10px] text-foreground/85 sm:text-xs">
        {label}
      </span>
    </span>
  );
}
