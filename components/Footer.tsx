import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line/70 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="chip text-ivory-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind.
        </p>
        <p className="chip text-ivory-faint">status: <span className="text-signal-teal">operational</span></p>
      </div>
    </footer>
  );
}
