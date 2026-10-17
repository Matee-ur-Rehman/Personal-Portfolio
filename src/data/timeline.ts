export interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  note?: string;
  bullets?: string[];
}

export const experience: TimelineEntry[] = [
  {
    title: "AI/ML Intern",
    organization: "Quantum Logics",
    period: "Jul 15 – Oct 14, 2026",
    note: "Worked on Quantum Learning Workspace, contributing to its AI-powered learning solution, Study Mind AI.",
    bullets: [
      "Contributed to the development of Study Mind AI, an intelligent learning system designed to support personalized and interactive learning experiences.",
      "Worked on the document ingestion and knowledge processing pipeline for preparing learning content for downstream AI modules.",
      "Implemented and worked with embedding-based representations to support semantic understanding and retrieval of educational content.",
      "Contributed to the AI Quiz Generator, enabling automated generation of quizzes from available learning content.",
      "Worked on Weak Topic Detection to identify areas where learners require additional attention based on their learning performance.",
      "Contributed to the development of a Knowledge Graph module for structuring and connecting relationships between learning concepts.",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    title: "BS Computer Science",
    organization: "COMSATS University Islamabad, Wah Campus",
    period: "Expected Jun 2027",
    note: "Currently in 7th semester",
  },
];