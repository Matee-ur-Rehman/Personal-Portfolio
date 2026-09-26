import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import FeaturedProjectCard from "@/components/ui/FeaturedProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-t border-border-subtle py-14 md:py-20 lg:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
            03 — Projects
          </p>

          {projects.length === 0 ? (
            <p className="mt-6 max-w-[520px] text-base leading-[1.6] text-text-tertiary">
              Projects are currently in development and will be added here soon.
            </p>
          ) : (
            <div className="mt-8 space-y-8">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.slug} project={project} />
              ))}

              {regularProjects.length > 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {regularProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              )}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
