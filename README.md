# Vinayak Khalasi — Data Engineer Portfolio

A single-page portfolio built around one idea: the site itself is structured like a
data pipeline. Six sections map to six pipeline stages — **Source → Staging →
Transform → Load → Serve → Sink** — with a live rail on desktop that tracks which
"stage" you're scrolled into, connected by an animated flowing line.

## Role classification

- **Primary role:** Data Engineer
- **Seniority:** Mid-level (~3 years, including internship-to-full-time conversion)
- **Reasoning:** The candidate's work is centered on cloud-native ETL/ELT pipeline
  architecture on AWS (Lambda, S3, DynamoDB, Kinesis Data Firehose, Redshift),
  schema/metadata design, and pipeline reliability — the core responsibilities of a
  data engineering role rather than general software engineering, data science, or
  ML. Despite an "Associate Software Engineer" title, the scope (architecting 20+
  production pipelines, serving 50+ enterprise clients, cutting latency by 60%) and
  an AWS Cloud Practitioner certification place this squarely in data engineering,
  at a mid-level of seniority given ~3 years of hands-on ownership.

## Design direction

- **Palette:** deep ink-navy background (`#0B1220`) rather than pure black, with an
  amber signal color (`#F2A93B`, "data in flight") and a teal signal color
  (`#35D0C5`, "validated / at rest") standing in for pipeline states.
- **Type:** JetBrains Mono for headlines and labels (technical, engineer-native),
  Inter for body copy. Both are self-hosted via `@fontsource` — no external font
  requests at build or runtime, so the site works with zero network dependencies
  beyond `npm install`.
- **Signature element:** the `PipelineRail` component — a fixed vertical rail
  (desktop only) with an animated dashed line and stage nodes that light up as you
  scroll, turning site navigation into a literal pipeline diagram of the page's
  own content.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom theme in `tailwind.config.ts`)
- `lucide-react` for icons
- `@fontsource/inter` and `@fontsource/jetbrains-mono` for self-hosted fonts

No environment variables, API keys, or external services are required.

## Project structure

```
app/
  layout.tsx      Root layout, font imports, metadata
  page.tsx         Assembles all sections
  globals.css      Base styles, focus states, reduced-motion handling
components/
  Nav.tsx           Sticky top navigation
  PipelineRail.tsx  Scroll-tracking pipeline rail (client component)
  Hero.tsx          Source stage
  About.tsx         Staging stage
  Experience.tsx    Transform stage
  Projects.tsx      Load stage
  Skills.tsx        Serve stage
  Contact.tsx       Sink stage
  Footer.tsx
  SectionHeading.tsx
lib/
  data.ts           All resume/profile content in one place
```

To update content (experience, projects, skills, contact info), edit `lib/data.ts` —
nothing else needs to change.

## Local setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To verify a production build locally:

```bash
npm run build
npm start
```
