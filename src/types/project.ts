/**
 * Project data contract.
 *
 * The Projects section renders by mapping over an array of these objects —
 * adding a new project later means adding one object here, not editing
 * layout/UI code.
 *
 * `featured` projects render in the large case-study layout.
 * Non-featured projects render in the compact grid.
 * `role` is optional — omit it when there's nothing specific to say about
 * individual contribution (e.g. a team/company project).
 */

export type ProjectStatus = "completed" | "in-progress";

export interface CaseStudy {
  problem: string;
  approach: string;
  outcome?: string;
  images?: string[];
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  role?: string;
  stack: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  thumbnail?: string;
  caseStudy?: CaseStudy;
}