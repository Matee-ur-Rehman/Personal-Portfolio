import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "studymind-ai",
    name: "StudyMind AI",
    description:
      "An AI study companion that turns PDFs, lecture videos, and articles into chat, quizzes, flashcards, a knowledge graph, and a personalized study roadmap — built so students can turn scattered material into an actual study plan.",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "MongoDB",
      "ChromaDB",
      "Groq API",
      "sentence-transformers",
      "JWT",
      "Vercel",
      "Railway",
      "pytest",
      "GitHub Actions",
    ],
    status: "completed",
    featured: true,
    // GitHub link withheld until the exposed secret in repo history is
    // rotated and employer permission to link the org repo is confirmed.
  },
  {
    slug: "chesswala",
    name: "ChessWala — AI Chess Engine",
    description:
      "An AlphaZero-inspired chess engine combining a deep residual neural network with Monte Carlo Tree Search, able to both play at a strong level and analyze games move-by-move with Chess.com-style move classifications.",
    role: "Designed, trained, and built the complete engine end-to-end — supervised pretraining on up to 5 million Lichess positions, self-play reinforcement learning, MCTS search, and a PyQt6 desktop GUI with a move-by-move game analyzer.",
    stack: [
      "Python",
      "PyTorch",
      "python-chess",
      "PyQt6",
      "Monte Carlo Tree Search",
      "NumPy",
      "Git",
      "GitHub",
    ],
    status: "completed",
    featured: true,
    githubUrl: "https://github.com/Matee-ur-Rehman/AI-Chess-Engine",
  },
];