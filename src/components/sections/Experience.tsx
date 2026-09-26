import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { experience, education } from "@/data/timeline";
import type { TimelineEntry } from "@/data/timeline";

function TimelineColumn({ heading, entries }: { heading: string; entries: TimelineEntry[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
        {heading}
      </p>
      <div className="mt-5 space-y-6">
        {entries.map((entry) => (
          <div
            key={`${entry.title}-${entry.organization}`}
            className="border-l border-border-subtle pl-5"
          >
            <p className="font-mono text-[0.75rem] text-text-tertiary">{entry.period}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-text-primary">
              {entry.title}
            </h3>
            <p className="mt-0.5 text-sm text-text-secondary">{entry.organization}</p>
            {entry.note && (
              <p className="mt-1 font-mono text-[0.75rem] text-text-tertiary">{entry.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border-subtle py-14 md:py-20 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
            04 — Experience
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <TimelineColumn heading="Work" entries={experience} />
            <TimelineColumn heading="Education" entries={education} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
