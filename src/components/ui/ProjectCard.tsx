import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-md border border-border-subtle bg-bg-secondary p-6 transition-colors duration-150 hover:border-border-default">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-semibold text-text-primary">
          {project.name}
        </h3>
        {project.status === "in-progress" && (
          <span className="shrink-0 rounded-[6px] bg-accent-muted px-2 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-accent">
            In progress
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-[1.6] text-text-secondary">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-[6px] border border-border-subtle px-2 py-1 font-mono text-[0.75rem] text-text-tertiary"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-5 flex gap-4 border-t border-border-subtle pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.8125rem] text-text-secondary transition-colors duration-150 hover:text-accent"
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.8125rem] text-text-secondary transition-colors duration-150 hover:text-accent"
            >
              Live →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
