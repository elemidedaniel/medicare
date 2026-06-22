export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? "text-gold" : "text-coral"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${light ? "text-white/70" : "text-slate"}`}>
          {description}
        </p>
      )}
    </div>
  );
}