export const profile = {
  name: "Vinayak Khalasi",
  role: "Data Engineer",
  location: "Surat, Gujarat, India",
  email: "vinayakkhalasi22@gmail.com",
  phone: "+91 99135 61946",
  linkedin: "https://www.linkedin.com/in/vinayakkhalasi-240a85181",
  tagline: "Pipelines that don't wake anyone up at 3 a.m.",
  subtagline:
    "Data Engineer building serverless AWS pipelines that move millions of records a day — and stay boring in production.",
};

export const stages = [
  { id: "hero", label: "Source", code: "01" },
  { id: "about", label: "Staging", code: "02" },
  { id: "experience", label: "Transform", code: "03" },
  { id: "projects", label: "Load", code: "04" },
  { id: "skills", label: "Serve", code: "05" },
  { id: "contact", label: "Sink", code: "06" },
];

export const metrics = [
  { value: "20+", label: "ETL pipelines shipped to production" },
  { value: "60%", label: "cut in end-to-end ingestion latency" },
  { value: "50+", label: "enterprise clients served on one platform" },
  { value: "40%", label: "fewer deployment regressions after review process" },
];

export const experience = [
  {
    company: "SuccessKPI",
    role: "Associate Software Engineer, Data Integration",
    location: "Remote — Fairfax County, Virginia, USA",
    period: "Jan 2022 — Sep 2024",
    summary:
      "Owned the data integration layer for a contact-center analytics product, moving vendor data into a single Redshift warehouse used by dozens of enterprise clients.",
    bullets: [
      "Architected 20+ cloud-native ETL pipelines pulling from Amazon Connect, Genesys, Zendesk, Talkdesk, and LiveVox into one Redshift analytics platform serving 50+ enterprise clients.",
      "Rebuilt ingestion around AWS Lambda, S3, DynamoDB, and Kinesis Data Firehose, cutting end-to-end processing latency by 60% while the client base kept growing.",
      "Led peer code review and owned incident response across distributed ETL workflows, dropping deployment regressions by 40% and keeping SLAs on target.",
    ],
    stack: ["AWS Lambda", "Amazon S3", "DynamoDB", "Kinesis Data Firehose", "Redshift", "Python"],
  },
  {
    company: "SuccessKPI",
    role: "Software Engineering Intern, Data Integration",
    location: "Ahmedabad, Gujarat, India",
    period: "Jul 2021 — Jan 2022",
    summary:
      "Took end-to-end ownership of two vendor integrations before converting to full-time, with a focus on schema design and zero-downtime delivery.",
    bullets: [
      "Owned ETL pipelines for LiveVox and Amazon Connect end to end, tuning schema design to raise throughput without any production downtime.",
      "Standardized reusable pipeline templates for ingestion, transformation, validation, and monitoring, cutting new data-source onboarding time by roughly 50%.",
    ],
    stack: ["Python", "AWS Lambda", "Amazon S3", "SQL"],
  },
];

export const projects = [
  {
    title: "Metadata-Driven ETL Framework",
    subtitle: "for API Ingestion",
    description:
      "A configuration-first ETL framework where onboarding a new API source is a metadata entry, not a new code path. Handles ingestion, validation, and loading into Redshift automatically, with run-level tracking built in from day one.",
    highlights: [
      "Cut new-source onboarding from a multi-day build to a config change",
      "Built-in metadata tracking for every ingestion run",
      "Designed for analytics-ready output with zero manual cleanup",
    ],
    stack: ["Python", "AWS Lambda", "Amazon S3", "DynamoDB", "Redshift", "FastAPI", "Docker"],
    stage: "LOAD",
  },
  {
    title: "Serverless Contact Center Analytics Platform",
    subtitle: "multi-vendor data unification",
    description:
      "Centralizes contact-center data from several vendor APIs into one Redshift model for unified reporting, with automated monitoring that catches pipeline failures before they ever reach a dashboard.",
    highlights: [
      "Unified reporting across multiple vendor data formats",
      "Automated monitoring surfaces failures before stakeholders see stale data",
      "Fully serverless — scales with client volume with no infra to manage",
    ],
    stack: ["Python", "AWS Lambda", "Amazon S3", "DynamoDB", "Redshift", "FastAPI", "Docker"],
    stage: "TRANSFORM",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "SQL", "TypeScript", "Java", "C"],
  },
  {
    label: "Cloud & Data Engineering",
    items: [
      "AWS Lambda",
      "Amazon S3",
      "Amazon Redshift",
      "DynamoDB",
      "Kinesis Data Firehose",
      "ETL / ELT",
      "Data Warehousing",
      "Real-Time Streaming",
      "Event-Driven Architecture",
    ],
  },
  {
    label: "Databases & APIs",
    items: ["PostgreSQL", "MySQL", "DynamoDB", "REST APIs", "Data Modeling", "Schema Validation"],
  },
  {
    label: "Tooling & Practice",
    items: ["Docker", "Git", "Bitbucket", "CloudWatch", "Postman", "CI/CD", "Agile / Scrum"],
  },
];

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", year: "2023" },
  { name: "GitHub Ultimate — Udemy", year: "2022" },
  { name: "NPTEL Java — IIT Kanpur", year: "2019" },
  { name: "Microsoft AI Classroom Series", year: "2021" },
];

export const education = [
  {
    school: "Nirma University",
    degree: "Master of Computer Applications, Information Technology",
    period: "Dec 2020 — Apr 2022",
    detail: "CGPA 8.14 / 10",
  },
  {
    school: "CHARUSAT University",
    degree: "B.Sc. Information Technology (Computer Science)",
    period: "Jul 2017 — Dec 2020",
    detail: "CGPA 9.12 / 10",
  },
];

export const languages = ["English — Professional", "Hindi — Native", "Gujarati — Native"];
