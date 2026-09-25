export interface SkillGroup {
  label: string;
  skills: string[];
}

/**
 * Grouped for readability rather than shown as one flat tag wall.
 * Add or edit entries here — the Skills section renders whatever is here.
 */
export const skillGroups: SkillGroup[] = [
  { label: "Languages", skills: ["Python", "C++", "Java"] },
  { label: "Web", skills: ["HTML", "JavaScript"] },
  { label: "Focus", skills: ["AI / ML"] },
];
