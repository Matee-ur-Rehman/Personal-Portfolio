import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border-subtle py-14 md:py-20 lg:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
            02 — Skills
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
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
