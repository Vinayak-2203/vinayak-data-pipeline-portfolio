import { Check } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-ink-line/70 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          code="04"
          eyebrow="Load"
          title="Frameworks built to outlast the first client they were built for."
          description="Both started as a way to solve one integration faster, then got generalized enough that the next ten sources didn't need new code."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-hover flex flex-col rounded-xl border border-ink-line bg-ink-surface p-8"
            >
              <span className="chip w-fit rounded-full border border-signal-tealdim bg-ink px-2.5 py-1 uppercase tracking-widest text-signal-teal">
                {p.stage}
              </span>

              <h3 className="mt-5 font-mono text-xl font-medium text-ivory">{p.title}</h3>
              <p className="mt-1 text-sm text-ivory-faint">{p.subtitle}</p>

              <p className="mt-5 text-[0.95rem] leading-relaxed text-ivory-muted">
                {p.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {p.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-ivory-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal-amber" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="chip rounded-md border border-ink-line bg-ink px-2.5 py-1 text-ivory-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
