export interface FactItem {
  claim: string;
  category: "CV-Supported" | "Repository-Verified" | "Boundary / Scope Statement";
  evidenceSource: string;
  status: "Verified True" | "Accurately Scoped";
  detail: string;
}

export const VERIFICATION_CHECKLIST: FactItem[] = [
  {
    claim: "Education & Degree Status",
    category: "CV-Supported",
    evidenceSource: "Official CV (Pages 1-3)",
    status: "Verified True",
    detail: "4th-Year Software Engineering at CamTech University (01 March 2023 – Present, 75% Merit) and English at RUPP IFL.",
  },
  {
    claim: "MRTJC Digital Internship & Frontend Development",
    category: "CV-Supported",
    evidenceSource: "Official CV (July – September 2026)",
    status: "Verified True",
    detail: "Worked on Angkor Social Innovation Park (ASIP) with Next.js/Tailwind and Chakrawal Portfolio in an agile team.",
  },
  {
    claim: "SentinelPay Machine Learning & Test Suite",
    category: "Repository-Verified",
    evidenceSource: "GitHub: VinSambrathna/CreditCardFraudDectection",
    status: "Verified True",
    detail: "Confirmed FastAPI backend, XGBoost classifier, TreeSHAP service, and 31/31 passing unit tests in source code.",
  },
  {
    claim: "SentinelPay Banking Connection Scope",
    category: "Boundary / Scope Statement",
    evidenceSource: "Repository Source Code Inspection",
    status: "Accurately Scoped",
    detail: "Operates via simulated multi-tenant gateway payloads; does NOT claim live financial institution API connections.",
  },
  {
    claim: "Anuvat Mobile Tech Stack & Dependencies",
    category: "Repository-Verified",
    evidenceSource: "GitHub: SambrathnaVin/anuvat-mobile-main/package.json",
    status: "Verified True",
    detail: "Verified Expo 54, React Native, TypeScript, @supabase/supabase-js, expo-camera, and async storage.",
  },
  {
    claim: "Anuvat Roadmap vs Implemented Feature Distinction",
    category: "Boundary / Scope Statement",
    evidenceSource: "Repository Code Tree Analysis",
    status: "Accurately Scoped",
    detail: "Mobile client and Supabase persistence are implemented; Classroom sync and AI tutor are explicitly noted as planned roadmap goals.",
  },
  {
    claim: "ParkSmart Domain Modeling & Mobile Design",
    category: "Repository-Verified",
    evidenceSource: "GitHub: SambrathnaVin/parking-system-management",
    status: "Verified True",
    detail: "Verified Java OOP domain classes (ParkingRate, Vehicle, customer, parkingevent, slot, staff); Flutter mobile workflow designed for user reservations.",
  },
  {
    claim: "Veriqo Full-Stack Flutter & Supabase Implementation",
    category: "Repository-Verified",
    evidenceSource: "GitHub: SambrathnaVin/veriqo_flutter",
    status: "Verified True",
    detail: "Verified full Flutter application with Riverpod, GoRouter, mobile scanner, and complete Supabase SQL schema.",
  },
  {
    claim: "No Fabricated Metrics or Unsubstantiated Users",
    category: "Boundary / Scope Statement",
    evidenceSource: "Strict Editorial Policy",
    status: "Accurately Scoped",
    detail: "Zero fake user statistics, revenue numbers, or synthetic benchmarks are presented across the portfolio.",
  },
];
