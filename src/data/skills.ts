export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: "Programming Languages", skills: ["Python", "C++", "Java", "JavaScript"] },
  {
    label: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "Data Preprocessing", "Model Training & Evaluation"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["Scikit-learn", "PyTorch", "TensorFlow", "NumPy", "Pandas", "FastAPI"],
  },
  { label: "Development Tools", skills: ["Git", "GitHub", "REST APIs", "MySQL", "SQLite"] },
  {
    label: "Areas of Interest",
    skills: ["Generative AI", "Large Language Models", "Computer Vision", "NLP"],
  },
];