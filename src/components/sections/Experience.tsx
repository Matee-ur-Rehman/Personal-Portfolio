import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { experience, education, certifications } from "@/data/timeline";
import type { TimelineEntry } from "@/data/timeline";

function TimelineColumn({ heading, entries }: { heading: string; entries: TimelineEntry[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
        {heading}
      </p>
      <div className="mt-5 space-y-8">
        {entries.map((entry) => {
          const meta = [entry.location, entry.period].filter(Boolean).join(" · ");
          return (
            <div
              key={`${entry.title}-${entry.organization}`}
              className="border-l border-border-subtle pl-5"
            >
              {meta && (
                <p className="font-mono text-[0.75rem] text-text-tertiary">{meta}</p>
              )}
              <h3 className="mt-1 font-display text-lg font-semibold text-text-primary">
                {entry.title}
              </h3>
              <p className="mt-0.5 text-sm text-text-secondary">{entry.organization}</p>
              {entry.note && (
                <p className="mt-2 font-mono text-[0.75rem] leading-[1.5] text-text-tertiary">
                  {entry.note}
                </p>
              )}
              {entry.bullets && entry.bullets.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-[1.6] text-text-secondary before:mr-2 before:text-accent before:content-['—']"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {entry.link && (
                <a
                  href={entry.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-mono text-[0.8125rem] text-text-secondary transition-colors duration-150 hover:text-accent"
                >
                  {entry.link.label} →
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border-subtle py-14 md:py-20 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] text-text-tertiary">
            <span className="font-semibold text-accent">06</span> — Experience
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <TimelineColumn heading="Work" entries={experience} />
            <div className="space-y-10">
              <TimelineColumn heading="Education" entries={education} />
              <TimelineColumn heading="Certifications" entries={certifications} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
