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

          <div className="mt-6 max-w-[720px] space-y-4 text-lg leading-[1.65] text-text-secondary">
            <p>
              I&apos;m a Computer Science student at COMSATS University
              Islamabad, Wah Campus, with a strong interest in Artificial
              Intelligence, Machine Learning, and software development.
            </p>
            <p>
              My focus is on building practical, data-driven solutions and
              AI-powered applications that solve meaningful problems. I enjoy
              exploring machine learning techniques, developing software
              systems, and turning technical ideas into functional projects.
            </p>
            <p>
              Through academic projects, independent learning, and industry
              experience, I&apos;m continuously strengthening my skills in
              AI/ML engineering and software development. I&apos;m
              particularly interested in opportunities where I can contribute
              to real-world projects, collaborate with experienced
              professionals, and continue growing as an AI/ML engineer.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
