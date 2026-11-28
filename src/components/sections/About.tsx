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
              I&apos;m a final-year Computer Science student at COMSATS
              University Islamabad, Wah Campus, with a strong interest in
              Artificial Intelligence, Machine Learning, and Generative AI.
            </p>
            <p>
              I enjoy building practical, AI-powered applications and
              exploring innovative solutions to real-world problems. Through
              academic projects, independent research, and industry
              experience, I&apos;m continuously developing my skills in AI/ML
              engineering and software development.
            </p>
            <p>
              I&apos;m passionate about learning new technologies,
              collaborating on challenging projects, and turning ideas into
              meaningful solutions.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}