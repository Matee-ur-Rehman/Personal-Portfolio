export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: "Programming Languages", skills: ["Python", "C++", "JavaScript"] },
  {
    label: "AI / ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Data Preprocessing",
      "Model Training & Evaluation",
      "RAG Pipelines",
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["Scikit-learn", "PyTorch", "TensorFlow", "NumPy", "Pandas", "FastAPI"],
  },
  { label: "Databases & Tools", skills: ["MySQL", "MongoDB", "Git", "GitHub", "REST APIs"] },
  {
    label: "Areas of Interest",
    skills: ["Generative AI", "Large Language Models", "Computer Vision", "NLP"],
  },
];