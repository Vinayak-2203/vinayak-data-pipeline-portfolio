import { Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          code="06"
          eyebrow="Sink"
          title="Where this pipeline lands."
          description="Open to data engineering and cloud data infrastructure roles — happy to walk through any pipeline above in more depth."
        />

        <div className="rounded-xl border border-ink-line bg-ink-surface p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="card-hover group flex flex-col gap-3 rounded-lg border border-ink-line bg-ink p-6"
            >
              <Mail className="h-5 w-5 text-signal-amber" />
              <div>
                <p className="chip uppercase tracking-widest text-ivory-faint">Email</p>
                <p className="mt-1 break-all text-sm text-ivory">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="card-hover group flex flex-col gap-3 rounded-lg border border-ink-line bg-ink p-6"
            >
              <Phone className="h-5 w-5 text-signal-teal" />
              <div>
                <p className="chip uppercase tracking-widest text-ivory-faint">Phone</p>
                <p className="mt-1 text-sm text-ivory">{profile.phone}</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="card-hover group flex flex-col gap-3 rounded-lg border border-ink-line bg-ink p-6"
            >
              <Linkedin className="h-5 w-5 text-signal-teal" />
              <div>
                 <p className="chip uppercase tracking-widest text-ivory-faint">LinkedIn</p>

                  <a href="https://www.linkedin.com/in/vinayak-khalasi-240a85181/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-sm text-ivory hover:text-blue-400">
                    Vinayak Khalasi
                  </a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
