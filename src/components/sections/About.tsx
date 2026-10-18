import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] text-text-tertiary">
            <span className="font-semibold text-accent">01</span> — About
          </h2>

          <div className="mt-6 max-w-[680px] space-y-4 text-lg leading-[1.65] text-text-secondary">
            <p>
              I&apos;m a Computer Science undergraduate at COMSATS University
              Islamabad, Wah Campus, with a strong foundation in
              programming, data structures, and database systems, and a
              growing focus on Artificial Intelligence and Machine Learning.
            </p>
            <p>
              I build practical, data-driven solutions and AI-powered
              applications — turning technical ideas into functional
              projects through academic work, independent learning, and
              industry experience, while continuing to grow as an AI/ML
              engineer.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
