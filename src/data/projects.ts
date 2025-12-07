export interface Project {
  id: number;
  title: string;
  description: string;
  caseStudyLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Wishlist User Onboarding Flow Revamped",
    description: "Revamped the Wishlist platform onboarding journey to reduce the drop off and increased the onboarding completion rate from 29% to 74%.",
    caseStudyLink: "#"
  },
  {
    id: 2,
    title: "Project Name 2",
    description: "Description for project 2. Update this with actual content from your portfolio.",
    caseStudyLink: "#"
  },
  {
    id: 3,
    title: "Project Name 3",
    description: "Description for project 3. Update this with actual content from your portfolio.",
    caseStudyLink: "#"
  },
  {
    id: 4,
    title: "Project Name 4",
    description: "Description for project 4. Update this with actual content from your portfolio.",
    caseStudyLink: "#"
  }
];
