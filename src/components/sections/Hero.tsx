import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-20 right-[8%] h-[560px] w-[560px] rounded-full bg-accent/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-[5%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-24 md:py-32 lg:grid-cols-[3fr_2fr] lg:gap-8">
        {/* Left column — identity */}
        <div className="animate-fade-slide-up">
          <p className="mb-4 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-accent">
            — AI/ML Engineer | Software Developer
          </p>

          <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            <span className="text-gradient">Matee Ur Rehman</span>
          </h1>

          <p className="mt-6 max-w-[560px] text-[1.125rem] leading-[1.6] text-text-secondary">
            Computer Science undergraduate building AI-powered applications
            and machine learning systems — currently focused on applied
            AI/ML research and real-world software development.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-[6px] bg-accent px-6 py-3 font-medium text-bg-primary transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              View Projects
            </a>
            <a
              href="/Matee-ur-Rehman-CV.pdf"
              download
              className="rounded-[6px] border border-border-default px-6 py-3 font-medium text-text-primary transition-[transform,border-color,color] duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
            <a
              href="https://github.com/Matee-ur-Rehman"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[6px] border border-border-default px-6 py-3 font-medium text-text-primary transition-[transform,border-color,color] duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="rounded-[6px] border border-border-default px-6 py-3 font-medium text-text-primary transition-[transform,border-color,color] duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right column — simplified info card: focus, core language, availability */}
        <div
          className="animate-fade-slide-up rounded-md border border-border-subtle bg-bg-secondary p-8"
          style={{ animationDelay: "100ms" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
            Current Focus
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-text-primary">
            Artificial Intelligence &amp; Machine Learning
          </p>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
            Core Language
          </p>
          <span className="mt-2 inline-block rounded-[6px] bg-accent-muted px-3 py-1 font-mono text-[0.8125rem] text-accent">
            Python
          </span>

          <div className="mt-6 flex items-start gap-2 border-t border-border-subtle pt-6">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 animate-pulse-dot rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="font-mono text-[0.8125rem] leading-[1.5] text-text-secondary">
              Open to AI/ML internships and relevant software development
              opportunities.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
