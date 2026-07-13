import { certifications, education, languages } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-b border-ink-line/70 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading code="02" eyebrow="Staging" title="Before the data gets useful, it lands here." />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-ivory-muted">
              I'm a data engineer who spent the last three years turning messy, high-volume vendor
              feeds into analytics-ready warehouses — the unglamorous middle layer that every
              dashboard, alert, and report quietly depends on.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ivory-muted">
              At SuccessKPI, that meant owning the data integration stack for a contact-center
              analytics product: pulling from half a dozen vendor APIs, reshaping it into a single
              Redshift model, and keeping it running for enterprise clients who never notice a
              pipeline until it breaks. My focus has always been the boring kind of reliability —
              schemas that don't silently drift, monitoring that catches failures before support
              tickets do, and onboarding a new data source without touching last year's code.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ivory-muted">
              I hold an MCA in Information Technology from Nirma University, an AWS Cloud
              Practitioner certification, and a habit of reading the CloudWatch logs before the
              standup starts.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-ink-line bg-ink-surface p-6">
              <h3 className="chip mb-4 uppercase tracking-widest text-ivory-faint">Education</h3>
              <ul className="space-y-5">
                {education.map((e) => (
                  <li key={e.school}>
                    <p className="font-medium text-ivory">{e.school}</p>
                    <p className="mt-1 text-sm text-ivory-muted">{e.degree}</p>
                    <p className="chip mt-1.5 text-ivory-faint">
                      {e.period} · {e.detail}
                    </p>
                  </li>
                ))}
              </ul>

              <h3 className="chip mb-4 mt-8 uppercase tracking-widest text-ivory-faint">
                Certifications
              </h3>
              <ul className="space-y-2.5">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-ivory-muted">{c.name}</span>
                    <span className="chip shrink-0 text-ivory-faint">{c.year}</span>
                  </li>
                ))}
              </ul>

              <h3 className="chip mb-3 mt-8 uppercase tracking-widest text-ivory-faint">
                Languages
              </h3>
              <p className="text-sm leading-relaxed text-ivory-muted">{languages.join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
