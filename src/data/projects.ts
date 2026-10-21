import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "sentinelpay",
    title: "SentinelPay",
    tagline: "Multi-Tenant Financial Fraud Detection & Forensics",
    shortDescription:
      "An AI-assisted fraud detection platform combining XGBoost inference, sub-15ms TreeSHAP explainability, and multi-tenant banking sandbox simulations.",
    category: "AI & FinTech",
    period: "September 2026",
    featured: true,
    status: "Production Architecture",
    role: "Lead Engineer & System Designer",
    overview:
      "SentinelPay is a high-throughput, multi-tenant fraud prevention architecture engineered to analyze financial transactions in real time. It unifies deterministic circuit breakers with an XGBoost ML classifier, providing immediate operational tier routing and exact marginal TreeSHAP feature attributions so banking analysts understand precisely why a transaction was flagged.",
    targetUsers:
      "Bank fraud operations teams, compliance officers, and financial integration engineers monitoring transaction safety across multiple tenant institutions.",
    problem:
      "Modern digital payment rails must identify fraud in milliseconds without creating false-positive friction for genuine customers or exposing sensitive PII to external machine learning models.",
    solution:
      "Engineered a zero-PII transactional pipeline utilizing behavioral and velocity vectors, paired with a three-tier decision state machine and a live WebSocket surveillance hub with automated heuristic fallback.",
    verifiedContributions: [
      "Designed and implemented the core FastAPI REST gateway (`/api/v1/fraud/check`) with SHA-256 API Key verification and anti-IDOR tenant isolation.",
      "Trained and calibrated an XGBoost 45-tree classifier achieving 0.9990 PR-AUC and 98.61% recall on a balanced 12,000-sample holdout test suite.",
      "Integrated fast local TreeSHAP attribution generating sub-15ms marginal Shapley values for human-in-the-loop analyst justification.",
      "Engineered a graceful heuristic fallback engine in PredictionService that protects uptime and soft-blocks high-risk transactions if the ML model is unreachable.",
      "Developed an automated pytest verification suite with 31/31 unit tests validating IDOR protection, validation rules, and fail-safe fallback.",
    ],
    techStack: [
      {
        category: "Backend & Gateway",
        items: ["FastAPI", "Python 3.11", "Pydantic", "WebSockets", "Uvicorn"],
      },
      {
        category: "Machine Learning & Forensics",
        items: ["XGBoost Classifier", "TreeSHAP", "Scikit-Learn", "NumPy", "Pandas"],
      },
      {
        category: "Persistence & Security",
        items: ["Multi-Tenant MySQL/SQLite", "SHA-256 Hashing", "Anti-IDOR Tenant Scoping", "Zero-PII Vectors"],
      },
      {
        category: "Analyst Portal & Testing",
        items: ["Next.js", "React", "Tailwind CSS", "Pytest (31 tests)", "Chart Visualization"],
      },
    ],
    architecture: {
      title: "SentinelPay Fraud Pipeline & Verification Architecture",
      description:
        "End-to-end data flow separating deterministic banking invariants from probabilistic ML scoring.",
      nodes: [
        {
          step: 1,
          name: "Gateway Ingestion",
          role: "API Auth & Contract Validation",
          tech: "FastAPI + Pydantic",
          details: "Validates X-API-KEY, normalizes currencies (4,050 KHR = $1 USD), and asserts non-negative values.",
        },
        {
          step: 2,
          name: "Deterministic Breakers",
          role: "Instant Hard Rules",
          tech: "Rules Engine",
          details: "Applies velocity burst heuristics and hard threshold cutoffs (amount >= $5,000).",
        },
        {
          step: 3,
          name: "Probabilistic Scoring",
          role: "XGBoost 45-Tree Inference",
          tech: "XGBoost (Sub-3ms)",
          details: "Computes fraud probability across 9 behavioral dimensions with zero cardholder PII.",
        },
        {
          step: 4,
          name: "TreeSHAP Attribution",
          role: "Explainability & Audit",
          tech: "TreeSHAP Engine",
          details: "Calculates marginal Shapley contributions to justify risk factors to human analysts.",
        },
        {
          step: 5,
          name: "Action State Machine",
          role: "Operational Tier Routing",
          tech: "State Engine",
          details: "Auto-Approve (<0.35), Soft-Block Step-Up OTP (0.35-0.70), or Critical Denial (>=0.70).",
        },
        {
          step: 6,
          name: "Live Push Hub",
          role: "Real-time Operations",
          tech: "FastAPI WebSockets",
          details: "Broadcasts high-risk alerts to tenant-scoped analyst dashboards instantly.",
        },
      ],
    },
    implementationDecisions: [
      {
        title: "Deterministic vs Probabilistic Separation",
        decision: "Kept currency conversion, hard safety ceilings, and state transitions strictly deterministic while reserving XGBoost solely for multivariate risk weighting.",
        rationale: "Financial state transitions must be mathematically strictly verifiable, whereas non-linear pattern anomalies require ML flexibility.",
        safetyOrAudit: "Ensures no customer is blocked without a traceable deterministic audit rule or exact Shapley feature attribution.",
      },
      {
        title: "Zero-PII Data Minimization",
        decision: "The machine learning pipeline never accepts cardholder names, primary account numbers (PAN), CVVs, or phone numbers.",
        rationale: "Reduces PCI-DSS compliance scope and eliminates cardholder identity exposure during real-time model evaluation.",
        safetyOrAudit: "Transactions are identified solely by anonymized transaction tokens and behavioral vectors.",
      },
      {
        title: "Graceful Heuristic Fallback",
        decision: "Built a deterministic fallback engine that activates automatically if ML model weights fail to load or throw an exception.",
        rationale: "Mission-critical payment gateways cannot return HTTP 500 internal errors during upstream service degradation.",
        safetyOrAudit: "High-value transactions during fallback are routed to SOFT_BLOCKED review rather than blind approval.",
      },
    ],
    verifiedTestingNotes: {
      suite: "Pytest Automated Suite (31 Unit & Integration Tests)",
      details:
        "Full test coverage across tenant scoping, negative amount validation, boundary scores, TreeSHAP formatting, and graceful model failure simulation (`test_model_failure_graceful_fallback`).",
      limitation:
        "Evaluated against synthetic multi-tenant sandbox simulation datasets (ABA, Wing, ACLEDA, Bakong simulations) rather than production live banking switches.",
    },
    verificationStatus: {
      evidenceLevel: "Repository Verified",
      verifiedFacts: [
        "Repository confirmed at VinSambrathna/CreditCardFraudDectection",
        "FastAPI backend and Next.js frontend source code verified",
        "XGBoost 45-Tree Classifier & TreeSHAP service verified in source code",
        "31/31 automated tests passing verified in repository",
        "Zero-PII architecture verified in Pydantic schema definitions",
      ],
      honestScope:
        "Built and tested with simulated multi-tenant banking gateway requests; not integrated into live interbank payment rails.",
    },
    links: {
      github: "https://github.com/VinSambrathna/CreditCardFraudDectection",
      demoNote: "Interactive TreeSHAP Forensics Visualizer available below in this case study.",
    },
    visualTheme: {
      accent: "#2563EB",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      badgeText: "text-blue-600",
      cardBg: "bg-white",
      isCinematicDark: true,
    },
  },
  {
    slug: "anuvat",
    title: "Anuvat Education Platform",
    tagline: "Modern E-Learning Mobile Architecture",
    shortDescription:
      "A cross-platform React Native and Supabase mobile educational application built with Expo 54, modular navigation, and camera hardware integration.",
    category: "Mobile & EdTech",
    period: "November 2025",
    featured: true,
    status: "Active Engineering",
    role: "Mobile Frontend Engineer",
    overview:
      "Anuvat is an educational mobile application engineered to modernize student engagement and classroom interaction. Built with React Native and Expo 54, it integrates a Supabase backend for authentication and realtime state, camera hardware access, and file-based routing.",
    targetUsers:
      "Students and educators transitioning traditional classroom activities into structured, mobile-first interactive workflows.",
    problem:
      "Traditional learning setups often lack immediate mobile accessibility, interactive content verification, and fluid offline/online state synchronization.",
    solution:
      "Architected a mobile client with Expo Router, Supabase BaaS data persistence, camera QR verification workflows, and asynchronous storage caching.",
    verifiedContributions: [
      "Configured and developed the mobile application using React Native, Expo 54, and TypeScript.",
      "Integrated Supabase JavaScript client (`@supabase/supabase-js` 2.84) for authentication and cloud database communication.",
      "Implemented hardware camera integration via `expo-camera` for physical classroom QR check-ins.",
      "Built modular bottom-tab navigation and screen layout hierarchies using `@react-navigation/bottom-tabs` and Expo Router.",
      "Designed asynchronous storage persistence layers for offline credential and session management.",
    ],
    techStack: [
      {
        category: "Mobile Framework",
        items: ["React Native", "Expo 54", "TypeScript", "Expo Router"],
      },
      {
        category: "Backend & Services",
        items: ["Supabase (PostgreSQL, Auth, Realtime)", "REST APIs", "AsyncStorage"],
      },
      {
        category: "Hardware & Media",
        items: ["Expo Camera", "Expo Font", "Vector Icons"],
      },
    ],
    architecture: {
      title: "Anuvat Mobile Client Architecture",
      description: "Layered client structure connecting Expo mobile runtime with Supabase cloud infrastructure.",
      nodes: [
        {
          step: 1,
          name: "Mobile UI Shell",
          role: "View Layer",
          tech: "React Native + TypeScript",
          details: "Responsive mobile views designed for iOS and Android form factors.",
        },
        {
          step: 2,
          name: "Expo Router & Nav",
          role: "Navigation Controller",
          tech: "Expo Router 4",
          details: "File-based tab routing with protected session guards.",
        },
        {
          step: 3,
          name: "Hardware Scanner",
          role: "Physical Check-In",
          tech: "Expo Camera",
          details: "Reads classroom QR codes to automate attendance and quiz entry.",
        },
        {
          step: 4,
          name: "State & Cache",
          role: "Client Store",
          tech: "AsyncStorage + Context",
          details: "Preserves user session tokens and offline content states.",
        },
        {
          step: 5,
          name: "Cloud BaaS",
          role: "Data Persistence",
          tech: "Supabase PostgreSQL",
          details: "Manages student profiles, courses, and realtime notifications.",
        },
      ],
    },
    implementationDecisions: [
      {
        title: "Expo Managed Workflow Adoption",
        decision: "Selected Expo 54 with Expo Router over bare React Native CLI.",
        rationale: "Accelerated development speed, predictable cross-platform builds, and seamless native module configuration.",
        safetyOrAudit: "Eliminates native platform build drift between iOS and Android targets.",
      },
      {
        title: "Supabase BaaS Integration",
        decision: "Leveraged Supabase for authentication and PostgreSQL data management.",
        rationale: "Provides built-in Row-Level Security (RLS) and real-time subscription capabilities without building custom server boilerplate.",
        safetyOrAudit: "Enforces strict database-level security policies per student profile.",
      },
    ],
    verifiedTestingNotes: {
      suite: "Client Linting & Type Checking",
      details: "Configured with strict TypeScript configuration and ESLint mobile rules.",
      limitation:
        "The repository confirms core mobile shell, camera integration, and Supabase client setup. Google Classroom synchronization, live Kahoot-style quiz sync, and AI assistant modules represent planned platform roadmap milestones.",
    },
    verificationStatus: {
      evidenceLevel: "Repository Verified",
      verifiedFacts: [
        "Repository confirmed at SambrathnaVin/anuvat-mobile-main",
        "React Native, Expo 54, and TypeScript dependencies verified in package.json",
        "Supabase client (@supabase/supabase-js 2.84) and Expo Camera verified",
        "Navigation structure verified in app directory",
      ],
      honestScope:
        "Mobile client application with Supabase integration; roadmap features (AI assistant & Classroom sync) accurately identified as planned milestones.",
    },
    links: {
      github: "https://github.com/SambrathnaVin/anuvat-mobile-main",
      demoNote: "Mobile prototype architecture and screen design walk-through detailed below.",
    },
    visualTheme: {
      accent: "#0D9488",
      badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
      badgeText: "text-teal-600",
      cardBg: "bg-white",
      isCinematicDark: false,
    },
  },
  {
    slug: "parksmart",
    title: "ParkSmart",
    tagline: "Smart Parking Reservation & Domain Architecture",
    shortDescription:
      "An object-oriented parking reservation system modeling vehicle slot lifecycles, real-time availability tracking, and automated rate calculation.",
    category: "Systems & Cloud",
    period: "July 2026",
    featured: true,
    status: "Core Domain Model",
    role: "Software Architecture & Domain Modeling",
    overview:
      "ParkSmart is a software system engineered to streamline urban vehicle parking management. It encompasses an object-oriented Java domain architecture that models vehicle categories, slot states, parking events, and rate calculations with high structural integrity.",
    targetUsers:
      "Parking facility operators, automated gate controllers, and drivers seeking predictable spot reservations.",
    problem:
      "Parking facilities experience bottlenecks due to uncoordinated space allocation, inaccurate availability tracking, and error-prone billing rules.",
    solution:
      "Engineered an object-oriented domain model with discrete slot states (Available, Occupied, Reserved), decoupled tariff calculation engines, and driver reservation flows.",
    verifiedContributions: [
      "Designed and modeled the core Java object architecture (`ParkingRate`, `Vehicle`, `customer`, `parkingevent`, `slot`, `staff`).",
      "Implemented slot state transition logic preventing double-booking and tracking real-time capacity.",
      "Structured extensible vehicle classification (Compact, SUV, EV) with polymorphic tariff calculation.",
      "Designed responsive mobile user reservation interface workflows using Flutter / Dart principles.",
      "Ensured clean architectural separation between domain models, event records, and operational staff workflows.",
    ],
    techStack: [
      {
        category: "Core Domain Architecture",
        items: ["Java (OOP Clean Architecture)", "State Pattern", "Polymorphism"],
      },
      {
        category: "Mobile Interface Design",
        items: ["Flutter", "Dart", "Responsive Layouts"],
      },
      {
        category: "Data & Persistence",
        items: ["Relational Slot Schema", "Event Auditing"],
      },
    ],
    architecture: {
      title: "ParkSmart Slot Lifecycle State Machine",
      description: "State-driven domain model tracking vehicles from reservation through exit settlement.",
      nodes: [
        {
          step: 1,
          name: "Driver Reservation",
          role: "Intent Creation",
          tech: "Mobile / Customer Model",
          details: "Driver selects target parking facility and specifies vehicle category and arrival window.",
        },
        {
          step: 2,
          name: "Slot State Allocation",
          role: "Availability Engine",
          tech: "Slot State Controller",
          details: "Transitions slot status from AVAILABLE to RESERVED with time-bound locks.",
        },
        {
          step: 3,
          name: "Vehicle Check-In Event",
          role: "Arrival Verification",
          tech: "ParkingEvent Model",
          details: "Logs exact entry timestamp and marks slot status to OCCUPIED.",
        },
        {
          step: 4,
          name: "Duration & Rate Settlement",
          role: "Tariff Calculation",
          tech: "ParkingRate Model",
          details: "Calculates total fee based on vehicle type duration multipliers and grace periods.",
        },
        {
          step: 5,
          name: "Slot Release & Audit",
          role: "State Reinitialization",
          tech: "Slot Release Engine",
          details: "Resets slot to AVAILABLE and archives complete event record for facility auditing.",
        },
      ],
    },
    implementationDecisions: [
      {
        title: "Clean Object-Oriented Domain Modeling",
        decision: "Modeled distinct classes for Slot, Vehicle, Customer, Staff, ParkingEvent, and ParkingRate.",
        rationale: "Encapsulates business rules within domain entities, preventing rate leaks or invalid slot states.",
        safetyOrAudit: "Every state transition produces an immutable ParkingEvent record.",
      },
      {
        title: "Polymorphic Vehicle Classifications",
        decision: "Decoupled vehicle dimensions from the physical slot dimensions through dynamic assignment rules.",
        rationale: "Accommodates compact cars, electric vehicles, and commercial vehicles without rigid database column lock-in.",
        safetyOrAudit: "Prevents oversized vehicle allocations to standard parking bays.",
      },
    ],
    verifiedTestingNotes: {
      suite: "Domain Object Verification",
      details: "Validated class encapsulation, time duration calculations, and state transition integrity.",
      limitation:
        "The public GitHub repository preserves the Java OOP domain architecture (`parking-system-management`); mobile client design corresponds to Flutter/Dart prototypes.",
    },
    verificationStatus: {
      evidenceLevel: "CV Verified & Architectural Domain",
      verifiedFacts: [
        "Java domain model repository verified at SambrathnaVin/parking-system-management",
        "Classes verified: ParkingRate.java, Vehicle.java, customer.java, parkingevent.java, slot.java, staff.java",
        "Commit history reflects iterative domain model development",
      ],
      honestScope:
        "Core OOP domain logic implemented in Java; mobile reservation interface designed in Flutter.",
    },
    links: {
      github: "https://github.com/SambrathnaVin/parking-system-management",
      demoNote: "Complete interactive slot lifecycle and tariff simulation presented below.",
    },
    visualTheme: {
      accent: "#D97706",
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
      badgeText: "text-amber-600",
      cardBg: "bg-white",
      isCinematicDark: false,
    },
  },
  {
    slug: "veriqo",
    title: "Veriqo",
    tagline: "Verified E-Commerce & Product Origin Scanner",
    shortDescription:
      "A full-stack Flutter and Supabase mobile e-commerce platform with multi-tier seller identity verification, product approval workflows, and camera scanning.",
    category: "Full-Stack & E-Commerce",
    period: "March 2026",
    featured: false,
    status: "Production Architecture",
    role: "Full-Stack Mobile Engineer",
    overview:
      "Veriqo is a verified mobile marketplace application built with Flutter and Supabase to counter counterfeit merchandise. It enforces strict seller verification via national ID uploads to private storage buckets, two-tier product approval workflows, camera barcode scanning, and Riverpod state management.",
    targetUsers:
      "Authentic merchants, discerning buyers, and platform admins responsible for compliance and catalogue review.",
    problem:
      "E-commerce marketplaces often suffer from unvetted merchants, counterfeit goods, and lack of origin verification.",
    solution:
      "Implemented a comprehensive 3-tier user role structure (Buyer, Seller, Admin) backed by Supabase storage security, DB triggers, and camera scanning.",
    verifiedContributions: [
      "Engineered full Flutter mobile client architecture using Riverpod and GoRouter navigation.",
      "Built complete Supabase backend schema (`001_schema.sql`) with Row-Level Security, storage buckets, and automated database triggers.",
      "Implemented camera-based barcode and QR product scanner using `mobile_scanner` for origin checking.",
      "Designed admin verification portals with document preview and approval/rejection notification workflows.",
    ],
    techStack: [
      {
        category: "Mobile",
        items: ["Flutter", "Dart", "Riverpod", "GoRouter", "Mobile Scanner"],
      },
      {
        category: "Backend & Cloud",
        items: ["Supabase", "PostgreSQL", "RLS", "Storage Buckets", "DB Triggers"],
      },
    ],
    architecture: {
      title: "Veriqo Multi-Role Verification Pipeline",
      description: "End-to-end verification pipeline from merchant onboarding to approved marketplace display.",
      nodes: [
        {
          step: 1,
          name: "Seller Onboarding",
          role: "ID Document Upload",
          tech: "Flutter + ImagePicker",
          details: "Merchants upload national ID documents to private Supabase storage bucket.",
        },
        {
          step: 2,
          name: "Admin Review",
          role: "Identity Verification",
          tech: "Supabase RLS",
          details: "Admins review credentials; approval mutates profile role and unlocks product upload.",
        },
        {
          step: 3,
          name: "Product Submission",
          role: "Catalogue Ingestion",
          tech: "Database Triggers",
          details: "Products enter pending_review state with real-time push notification to moderation queue.",
        },
        {
          step: 4,
          name: "Marketplace Display",
          role: "Verified Showcase",
          tech: "Flutter GridView",
          details: "Only admin-approved products are indexed and rendered in the buyer marketplace.",
        },
      ],
    },
    implementationDecisions: [
      {
        title: "Role-Based Storage Bucket Isolation",
        decision: "Stored national identity photos in private buckets accessible only by authenticated admins and the issuing merchant.",
        rationale: "Prevents accidental public exposure of sensitive identity documents.",
        safetyOrAudit: "Enforced strictly through Supabase Storage Row-Level Security policies.",
      },
    ],
    verifiedTestingNotes: {
      suite: "Flutter Analysis & Schema Verification",
      details: "Full Flutter project verified with sound null safety and SQL migration scripts.",
      limitation: "Requires active Supabase project URL and keys to run live authentication.",
    },
    verificationStatus: {
      evidenceLevel: "Repository Verified",
      verifiedFacts: [
        "Repository confirmed at SambrathnaVin/veriqo_flutter",
        "Complete schema file verified: supabase/migrations/001_schema.sql",
        "Full Flutter Riverpod and GoRouter architecture verified in lib/",
      ],
      honestScope: "Fully implemented Flutter application and complete Supabase SQL schema.",
    },
    links: {
      github: "https://github.com/SambrathnaVin/veriqo_flutter",
    },
    visualTheme: {
      accent: "#059669",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      badgeText: "text-emerald-600",
      cardBg: "bg-white",
      isCinematicDark: false,
    },
  },
];
