import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-ink-line/70 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          code="03"
          eyebrow="Transform"
          title="Where raw feeds turn into something a business can trust."
          description="Two roles, one company, the same problem at increasing scale: get vendor data into shape before anyone downstream has to think about it."
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <article
              key={i}
              className="card-hover rounded-xl border border-ink-line bg-ink-surface p-8"
            >
              <div className="flex flex-col justify-between gap-2 border-b border-ink-line/70 pb-6 sm:flex-row sm:items-end">
                <div>
                  <h3 className="font-mono text-xl font-medium text-ivory">{job.role}</h3>
                  <p className="mt-1.5 text-sm text-signal-teal">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="chip whitespace-nowrap uppercase tracking-widest text-ivory-faint">
                  {job.period}
                </span>
              </div>

              <p className="mt-6 text-base leading-relaxed text-ivory-muted">{job.summary}</p>

              <ul className="mt-6 space-y-3">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-[0.95rem] leading-relaxed text-ivory-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-amber" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {job.stack.map((s) => (
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
