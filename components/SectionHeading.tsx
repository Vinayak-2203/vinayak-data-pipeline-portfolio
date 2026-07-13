export default function SectionHeading({
  code,
  eyebrow,
  title,
  description,
}: {
  code: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="chip rounded-full border border-ink-line bg-ink-surface px-2.5 py-1 text-signal-amber">
          STAGE {code}
        </span>
        <span className="chip uppercase tracking-[0.2em] text-ivory-faint">{eyebrow}</span>
      </div>
      <h2 className="font-mono text-3xl font-medium tracking-tight text-ivory sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ivory-muted">{description}</p>
      )}
    </div>
  );
}
