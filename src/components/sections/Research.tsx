import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { research } from "@/data/research";

export default function Research() {
  return (
    <section id="research" className="border-t border-border-subtle py-14 md:py-20 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] text-text-tertiary">
            <span className="font-semibold text-accent">05</span> — Research
          </h2>

          <div className="mt-8 space-y-10">
            {research.map((entry) => (
              <div
                key={entry.title}
                className="rounded-md border border-border-subtle bg-bg-secondary p-6 md:p-8"
              >
                <span className="inline-block rounded-[6px] bg-accent-muted px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-accent">
                  {entry.type}
                </span>

                <h3 className="mt-4 font-display text-xl font-semibold text-text-primary">
                  {entry.title}
                </h3>

                <p className="mt-3 max-w-[680px] text-sm leading-[1.65] text-text-secondary">
                  {entry.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {entry.keyResults.map((result) => (
                    <li
                      key={result}
                      className="text-sm leading-[1.6] text-text-secondary before:mr-2 before:text-accent before:content-['—']"
                    >
                      {result}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[0.75rem] text-text-tertiary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-5 border-t border-border-subtle pt-4 font-mono text-[0.75rem] text-text-tertiary">
                  {entry.status}
                </p>

                {entry.githubUrl && (
                  <a
                    href={entry.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-mono text-[0.8125rem] text-text-secondary transition-colors duration-150 hover:text-accent"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
