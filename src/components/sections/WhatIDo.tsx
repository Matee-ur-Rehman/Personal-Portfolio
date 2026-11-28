import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

const FOCUS_AREAS = [
  {
    title: "Machine Learning & Deep Learning",
    description:
      "Developing intelligent models through data preprocessing, model training, evaluation, and experimentation.",
  },
  {
    title: "Generative AI & LLM Applications",
    description:
      "Building AI-powered solutions using Large Language Models, RAG, and modern Generative AI technologies.",
  },
  {
    title: "AI Application Development",
    description:
      "Integrating AI models, APIs, and backend technologies to develop practical, real-world applications.",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="border-t border-border-subtle py-14 md:py-20 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] text-text-tertiary">
            <span className="font-semibold text-accent">02</span> — What I Do
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {FOCUS_AREAS.map((area) => (
              <div key={area.title} className="border-l border-border-subtle pl-5">
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.6] text-text-secondary">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}