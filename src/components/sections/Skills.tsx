import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

/**
 * Five categories laid out as 3 + 2 on desktop: the top row has three
 * equal columns, and the bottom row has two wider columns, so both rows
 * span the full width. On tablet it's two columns with the last category
 * spanning the full row; on mobile everything stacks.
 */
const COLUMN_SPANS = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "md:col-span-2 lg:col-span-3",
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border-subtle py-14 md:py-20 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] text-text-tertiary">
            <span className="font-semibold text-accent">03</span> — Skills
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-6">
            {skillGroups.map((group, index) => (
              <div key={group.label} className={COLUMN_SPANS[index] ?? "lg:col-span-2"}>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
                  {group.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-[6px] bg-accent-muted px-3 py-1 font-mono text-[0.8125rem] text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}