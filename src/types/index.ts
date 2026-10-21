export interface Project {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  category: "AI & FinTech" | "Mobile & EdTech" | "Systems & Cloud" | "Full-Stack & E-Commerce";
  period: string;
  featured: boolean;
  status: "Production Architecture" | "Active Engineering" | "Core Domain Model";
  role: string;
  overview: string;
  targetUsers: string;
  problem: string;
  solution: string;
  verifiedContributions: string[];
  techStack: {
    category: string;
    items: string[];
  }[];
  architecture: {
    title: string;
    description: string;
    nodes: {
      step: number;
      name: string;
      role: string;
      tech: string;
      details: string;
    }[];
  };
  implementationDecisions: {
    title: string;
    decision: string;
    rationale: string;
    safetyOrAudit: string;
  }[];
  verifiedTestingNotes: {
    suite: string;
    details: string;
    limitation: string;
  };
  verificationStatus: {
    evidenceLevel: "Repository Verified" | "CV Verified & Architectural Domain" | "Simulated Gateway";
    verifiedFacts: string[];
    honestScope: string;
  };
  links: {
    github?: string;
    liveDemo?: string;
    demoNote?: string;
  };
  visualTheme: {
    accent: string;
    badgeBg: string;
    badgeText: string;
    cardBg: string;
    isCinematicDark?: boolean;
  };
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  projects: {
    name: string;
    bulletPoints: string[];
    technologies: string[];
  }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  distinction?: string;
  details: string[];
}

export interface VolunteeringItem {
  title: string;
  organization: string;
  date: string;
  role: string;
  activities: string[];
}
