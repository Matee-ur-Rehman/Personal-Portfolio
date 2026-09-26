import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
            01 — About
          </h2>

          <div className="mt-6 max-w-[720px] space-y-4 text-lg leading-[1.65] text-text-secondary">
            <p>
              I&apos;m a Computer Science student at COMSATS University Islamabad,
              Wah Campus, currently in my seventh semester, specializing in
              AI/ML and software development.
            </p>
            <p>
              I&apos;m drawn to applying AI/ML to real-world problems rather
              than working with it purely in the abstract. I&apos;m currently
              interning at Quantum Logics, applying what I&apos;ve learned in
              a professional setting.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
