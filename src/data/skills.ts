export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming Languages",
    skills: ["Python", "C++", "JavaScript"],
  },
  {
    label: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Model Training & Evaluation",
      "Data Preprocessing",
      "Natural Language Processing",
      "Computer Vision",
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Hugging Face", "FastAPI"],
  },
  {
    label: "Generative AI",
    skills: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "Prompt Engineering",
      "Generative AI Applications",
    ],
  },
  {
    label: "Databases & Tools",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "REST APIs"],
  },
];