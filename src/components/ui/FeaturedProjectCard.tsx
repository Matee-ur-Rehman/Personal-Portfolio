import type { Project } from "@/types/project";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <div className="rounded-lg border border-border-subtle bg-bg-secondary p-8 md:p-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
            Featured
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-text-primary md:text-3xl">
            {project.name}
          </h3>
        </div>
        {project.status === "in-progress" && (
          <span className="shrink-0 rounded-[6px] bg-accent-muted px-2 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-accent">
            In progress
          </span>
        )}
      </div>

      <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-text-secondary">
        {project.description}
      </p>

      <p className="mt-4 font-mono text-[0.8125rem] text-text-tertiary">
        Role — {project.role}
      </p>

      {project.caseStudy && (
        <div className="mt-8 grid grid-cols-1 gap-6 border-t border-border-subtle pt-8 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
              Problem
            </p>
            <p className="mt-2 text-sm leading-[1.6] text-text-secondary">
              {project.caseStudy.problem}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
              Approach
            </p>
            <p className="mt-2 text-sm leading-[1.6] text-text-secondary">
              {project.caseStudy.approach}
            </p>
          </div>
          {project.caseStudy.outcome && (
            <div className="md:col-span-2">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
                Outcome
              </p>
              <p className="mt-2 text-sm leading-[1.6] text-text-secondary">
                {project.caseStudy.outcome}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-2">
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
        <div className="mt-6 flex gap-4 border-t border-border-subtle pt-6">
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
