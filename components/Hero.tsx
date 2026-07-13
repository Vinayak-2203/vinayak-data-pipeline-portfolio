import { ArrowDownRight, Mail } from "lucide-react";
import { metrics, profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden border-b border-ink-line/70 px-6 pt-28 pb-20"
    >
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="animate-rise flex items-center gap-2.5" style={{ animationDelay: "0ms" }}>
          <span className="chip rounded-full border border-ink-line bg-ink-surface px-3 py-1.5 uppercase tracking-widest text-signal-teal">
            source · {profile.location}
          </span>
        </div>

        <h1
          className="animate-rise mt-8 max-w-4xl font-mono text-[2.6rem] font-medium leading-[1.08] tracking-tight text-ivory text-glow sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {profile.tagline}
        </h1>

        <p
          className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-ivory-muted"
          style={{ animationDelay: "160ms" }}
        >
          {profile.subtagline}
        </p>

        <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "240ms" }}>
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-md bg-signal-amber px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Trace the pipeline
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-ink-line px-5 py-3 text-sm font-medium text-ivory transition-colors hover:border-signal-teal hover:text-signal-teal"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <dl
          className="animate-rise mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-ink-line/70 pt-10 sm:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-3xl font-medium text-signal-amber">{m.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-ivory-muted">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
