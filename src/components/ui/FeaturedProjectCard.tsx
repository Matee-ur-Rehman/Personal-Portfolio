import type { Project } from "@/types/project";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <div className="rounded-md border border-border-subtle bg-bg-secondary p-6 md:p-10">
      <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block rounded-[6px] bg-accent-muted px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-accent">
          Featured
        </span>
        <span className="rounded-[6px] bg-accent-muted px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-accent">
          {project.status === "completed" ? "Completed" : "In Progress"}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-semibold text-text-primary">
        {project.name}
      </h3>

      <p className="mt-3 max-w-[680px] text-base leading-[1.65] text-text-secondary">
        {project.description}
      </p>

      {project.role && (
        <p className="mt-4 font-mono text-[0.8125rem] text-text-tertiary">
          Role — {project.role}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-[6px] border border-border-default px-3 py-1 font-mono text-[0.75rem] text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-6 flex gap-6 border-t border-border-subtle pt-6">
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
