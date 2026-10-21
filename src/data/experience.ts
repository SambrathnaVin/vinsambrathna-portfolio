import { ExperienceItem } from "@/types";

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Digital Intern & Frontend Developer",
    organization: "MR Training & Job Center (MRTJC)",
    period: "July – September 2026",
    location: "Phnom Penh, Cambodia",
    type: "Internship",
    summary:
      "Contributed to production web applications, component engineering, internationalization, and frontend performance in an agile engineering team.",
    projects: [
      {
        name: "Angkor Social Innovation Park (ASIP) Web Platform",
        bulletPoints: [
          "Collaborated on redesigning and developing responsive web applications using Next.js, React, and Tailwind CSS.",
          "Built modular, reusable UI components and dynamic layouts to elevate user experience across mobile and desktop viewports.",
          "Implemented interactive features, smooth page animations, and multi-language support (i18n) for diverse user audiences.",
          "Worked alongside the core engineering team to test, debug, and optimize frontend render performance.",
        ],
        technologies: ["Next.js", "React", "Tailwind CSS", "i18n", "Responsive Design", "Performance Optimization"],
      },
      {
        name: "Chakrawal Portfolio",
        bulletPoints: [
          "Developed an interactive, responsive portfolio web application featuring modern UI components and fluid user interactions.",
          "Participated in agile team workflows using Git and GitHub for version control, code reviews, and resolving cross-device UI bugs.",
          "Maintained strict visual fidelity and accessibility across desktop, tablet, and mobile platforms.",
        ],
        technologies: ["React", "JavaScript", "Tailwind CSS", "Git / GitHub", "Agile QA"],
      },
    ],
  },
];
