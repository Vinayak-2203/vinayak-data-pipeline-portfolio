import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-ink-line/70 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          code="05"
          eyebrow="Serve"
          title="The stack, ready to query."
          description="Grouped the way I actually reach for it — language, cloud data infra, storage & APIs, and the tooling that keeps a team honest."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-ink-line bg-ink-surface p-6"
            >
              <h3 className="chip mb-4 uppercase tracking-widest text-signal-amber">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip rounded-md border border-ink-line bg-ink px-2.5 py-1.5 text-ivory-muted transition-colors hover:border-signal-teal hover:text-ivory"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
