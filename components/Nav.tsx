import { profile, stages } from "@/lib/data";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/70 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="h-2 w-2 animate-blink rounded-full bg-signal-teal" />
          <span className="font-mono text-sm tracking-tight text-ivory">
            {profile.name}
          </span>
        </a>
        <nav aria-label="Section links" className="hidden items-center gap-6 md:flex">
          {stages
            .filter((s) => s.id !== "hero")
            .map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="chip uppercase tracking-widest text-ivory-muted transition-colors hover:text-signal-teal"
              >
                {s.label}
              </a>
            ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="chip rounded-md border border-ink-line bg-ink-surface px-3.5 py-2 uppercase tracking-widest text-ivory transition-colors hover:border-signal-amber hover:text-signal-amber"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
