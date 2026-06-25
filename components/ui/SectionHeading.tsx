type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={alignClass}>
      <p className="mb-2 text-[10px] font-semibold tracking-[0.25em] text-accent-cyan uppercase sm:mb-3 sm:text-xs">
        {label}
      </p>
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm text-muted sm:text-base ${align === "center" ? "mx-auto max-w-lg" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
