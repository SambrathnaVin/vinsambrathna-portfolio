export interface EngineeringPillar {
  number: string;
  title: string;
  summary: string;
  evidence: string;
  projectTag: string;
}

export const ENGINEERING_APPROACH: EngineeringPillar[] = [
  {
    number: "01",
    title: "Understand the Problem & System Constraints",
    summary:
      "Clarify user requirements, operational boundaries, and security needs before writing code. I map out deterministic business rules versus probabilistic model needs.",
    evidence:
      "In SentinelPay, separated fixed banking conversion rules (4,050 KHR = $1 USD) from probabilistic XGBoost inference to guarantee deterministic auditability.",
    projectTag: "SentinelPay",
  },
  {
    number: "02",
    title: "Design Clear Interfaces & Component Boundaries",
    summary:
      "Establish strict type contracts, modular layouts, and predictable state scopes. Keep presentation decoupled from underlying data acquisition.",
    evidence:
      "In the ASIP internship, engineered modular Next.js components and reusable Tailwind layouts to support responsive desktop/mobile viewports and multi-language i18n.",
    projectTag: "ASIP Platform",
  },
  {
    number: "03",
    title: "Build Maintainable Application Logic",
    summary:
      "Model domain state explicitly with type safety and sound design patterns. Avoid hidden side effects and leaky abstractions.",
    evidence:
      "In ParkSmart, modeled vehicle types, slots, and tariffs in Java OOP clean architecture with explicit state transitions (Available → Reserved → Occupied).",
    projectTag: "ParkSmart",
  },
  {
    number: "04",
    title: "Integrate APIs & Secure Data Persistence",
    summary:
      "Implement typed gateway contracts, enforce anti-IDOR authorization, and leverage secure cloud persistence with Row-Level Security.",
    evidence:
      "In Veriqo and Anuvat, structured Supabase PostgreSQL tables with RLS and private storage buckets to isolate sensitive identity documents and student credentials.",
    projectTag: "Veriqo & Anuvat",
  },
  {
    number: "05",
    title: "Test, Debug & Architect for Failure",
    summary:
      "Write automated tests for edge cases and design graceful degradation when external services or machine learning weights are unreachable.",
    evidence:
      "Developed 31 automated pytest tests in SentinelPay, including test_model_failure_graceful_fallback which verifies the system routes high-risk transactions safely without throwing 500 errors.",
    projectTag: "SentinelPay",
  },
  {
    number: "06",
    title: "Prioritize Accessibility & Performance",
    summary:
      "Ensure fast page load times, respect prefers-reduced-motion, maintain high contrast ratios, and support semantic navigation across all devices.",
    evidence:
      "Engineered this portfolio with server rendering, zero layout shift, semantic HTML landmarks, and accessible focus states across desktop and mobile.",
    projectTag: "Engineering Standard",
  },
];
