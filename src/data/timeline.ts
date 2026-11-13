export interface TimelineEntry {
  title: string;
  organization: string;
  /** Optional so entries without a known date (e.g. a bootcamp) can omit it. */
  period?: string;
  /** e.g. "Remote" or "On-site" — shown next to the period. */
  location?: string;
  note?: string;
  bullets?: string[];
  link?: { label: string; href: string };
}

export const experience: TimelineEntry[] = [
  {
    title: "AI/ML Intern",
    organization: "Quantum Logics",
    location: "Remote",
    period: "13 Jul 2026 – Present",
    bullets: [
      "Contributed to StudyMind AI, the AI-powered learning solution of Quantum Learning Workspace, designed for personalized and interactive learning.",
      "Worked on the document ingestion and knowledge-processing pipeline, and implemented embedding-based representations for semantic retrieval of educational content.",
      "Contributed to the AI Quiz Generator, Weak Topic Detection, and Knowledge Graph modules.",
    ],
  },
  {
    title: "AI/ML Intern",
    organization: "IST",
    location: "On-site",
    period: "4 Aug – 15 Sep 2026 (six weeks)",
    bullets: [
      "Completed a six-week internship focused on Artificial Intelligence and Machine Learning.",
      "Gained hands-on exposure to AI/ML concepts, Python-based development, and practical machine learning workflows.",
      "Worked on understanding data processing, model development, and the application of machine learning techniques.",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    title: "BS Computer Science",
    organization: "COMSATS University Islamabad, Wah Campus",
    period: "Sep 2023 – Present",
    note: "Expected graduation: June 2027 · Currently in 7th semester",
  },
];

export const certifications: TimelineEntry[] = [
  {
    title: "Introduction to Artificial Intelligence (AI)",
    organization: "IBM (offered through Coursera)",
    period: "July 2026",
    link: {
      label: "Verify certificate",
      href: "https://coursera.org/verify/LFA3Z3SG6GW7",
    },
  },
  {
    title: "AI Kickoff Bootcamp",
    organization: "GDG",
    note: "Focused on Python, Data Cleaning, EDA, Data Preprocessing, and Basic Machine Learning Concepts.",
  },
];