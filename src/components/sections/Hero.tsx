import Container from "@/components/layout/Container";

const CORE_STACK = ["Python", "C++", "Java"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Faint grid texture — hero only, reinforces the technical identity quietly */}
      <div className="pointer-events-none absolute inset-0 bg-grid-texture" aria-hidden="true" />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-24 md:py-32 lg:grid-cols-[3fr_2fr] lg:gap-8">
        {/* Left column — identity */}
        <div className="animate-fade-slide-up">
          <p className="mb-4 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-accent">
            — AI/ML &amp; Software Development
          </p>

          <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-text-primary">
            Matee Ur Rehman
          </h1>

          <p className="mt-6 max-w-[520px] text-[1.25rem] leading-[1.6] text-text-secondary">
            Computer Science student specializing in AI/ML and software development.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-[6px] bg-accent px-6 py-3 font-medium text-bg-primary transition-colors duration-150 hover:bg-accent-hover"
            >
              View Projects
            </a>
            <a
              href="https://github.com/Matee-ur-Rehman"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[6px] border border-border-default px-6 py-3 font-medium text-text-primary transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right column — stack card */}
        <div
          className="animate-fade-slide-up rounded-md border border-border-subtle bg-bg-secondary p-8"
          style={{ animationDelay: "100ms" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
            Core Stack
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {CORE_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-[6px] bg-accent-muted px-3 py-1 font-mono text-[0.8125rem] text-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
            Focus
          </p>
          <p className="mt-3 font-mono text-[0.8125rem] text-text-primary">AI / ML</p>

          <div className="mt-6 flex items-center gap-2 border-t border-border-subtle pt-6">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-[0.8125rem] text-text-secondary">
              Available for internships
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
