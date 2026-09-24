/**
 * Project data contract.
 *
 * The Projects section (built in a later phase) renders by mapping over
 * an array of these objects — adding a new project later means adding
 * one object here, not editing layout/UI code.
 *
 * `featured` projects render in the large case-study layout.
 * Non-featured projects render in the compact grid.
 * `caseStudy` is optional so early/in-progress projects can ship with
 * just the basics, then be upgraded to a full featured writeup later.
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
  role: string;
  stack: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  thumbnail?: string;
  caseStudy?: CaseStudy;
}
