# Vin Sambrathna — Software Engineer Portfolio

A production-grade personal portfolio website for **Vin Sambrathna**, engineered with Next.js (App Router), TypeScript, and Tailwind CSS. Inspired by Apple's design philosophy—focused on editorial clarity, product storytelling, architectural integrity, and truthful technical evidence.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.1-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38bdf8.svg)
![Status](https://img.shields.io/badge/Verification-100%25%20Verified%20Facts-emerald.svg)

---

## 🌟 Philosophy & Design Principles

- **Minimal & Restrained**: Built upon a warm off-white canvas (`#F7F7F5`) with near-black typography (`#171717`), muted grays (`#6E6E73`), and restrained Apple-blue accents (`#0071E3`).
- **Truthful Engineering Storytelling**: Zero fabricated metrics, zero unverified user claims, and zero dead call-to-actions. Distinguishes between repository-verified implementations, CV-documented facts, and explicit scope boundaries.
- **Deep Technical Case Studies**: Features interactive forensic demonstrations directly extracted from verified repositories (e.g., SentinelPay ABA Mobile Simulator & Double-Bezel TreeSHAP Forensics Portal, ParkSmart Java OOP SlotTracker & Tariff Engine, Anuvat React Native Expo 54 phone mockup).
- **Accessibility & Motion Respect**: Fully supports `prefers-reduced-motion`, semantic HTML landmarks (`<nav>`, `<main>`, `<article>`, `<header>`, `<footer>`), keyboard navigation, and accessible focus indicators.

---

## 🛠️ Technology Stack

| Domain | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router with Server & Client Component separation) |
| **Language** | TypeScript (Strict type checking enabled) |
| **Styling** | Tailwind CSS with custom editorial typography & design tokens |
| **Animations** | Native CSS cubic-bezier micro-transitions |
| **Icons** | Lucide React |
| **Document Delivery** | Direct PDF stream from `/documents/CV_VinSambrathna.pdf` |
| **Deployment Target**| Vercel |

---

## 📁 Project Structure

```
├── public/
│   ├── documents/
│   │   └── CV_VinSambrathna.pdf       # Verified Curriculum Vitae (PDF)
│   ├── images/
│   │   └── vin_sambrathna.jpg         # Professional portrait extracted from CV
│   └── favicon.svg                    # SVG monogram favicon
├── src/
│   ├── app/
│   │   ├── globals.css                # Tailwind base, anchor scroll margins & animations
│   │   ├── layout.tsx                 # Root layout with SEO OpenGraph & font optimization
│   │   ├── page.tsx                   # Homepage assembling all portfolio sections
│   │   ├── not-found.tsx              # 404 handler with return navigation
│   │   ├── sitemap.ts                 # Search engine sitemap
│   │   ├── robots.ts                  # Search crawler permissions
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx           # Dynamic project case study router
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Floating capsule navigation with avatar & mobile sheet
│   │   │   └── Footer.tsx             # Dynamic copyright, verified profiles & credentials
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # Editorial headline, portrait & availability status
│   │   │   ├── SelectedWork.tsx       # Featured project showcase
│   │   │   ├── EngineeringApproach.tsx# 6-pillar software engineering lifecycle
│   │   │   ├── Experience.tsx         # MRTJC Digital Internship timeline
│   │   │   ├── Skills.tsx             # Categorized technical abilities
│   │   │   ├── Education.tsx          # CamTech University & RUPP IFL degrees
│   │   │   ├── About.tsx              # Professional philosophy & academic reference
│   │   │   └── Contact.tsx            # Validated message dispatcher & direct contact
│   │   ├── devices/
│   │   │   ├── SentinelPayLiveConsole.tsx   # ABA Mobile & TreeSHAP double-bezel portal
│   │   │   ├── AnuvatPhoneMockup.tsx        # Expo 54 React Native phone mockup
│   │   │   ├── ParkSmartDualConsole.tsx     # Java slot.java & ParkingRate.java console
│   │   │   └── VeriqoMarketplaceMockup.tsx  # Flutter & Supabase Storage RLS mockup
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx        # High-contrast project card with evidence tags
│   │   │   └── ArchitectureDiagram.tsx# Interactive pipeline flow visualizer
│   │   └── ui/
│   │       ├── Badge.tsx              # Status & tech pill badges
│   │       ├── Button.tsx             # Apple-inspired pill button variants
│   │       ├── Container.tsx          # Responsive width container with generous margins
│   │       └── VerificationChecklistModal.tsx # Recruiter transparency fact auditor
│   ├── data/
│   │   ├── projects.ts                # Typed verified project case studies
│   │   ├── experience.ts              # MRTJC internship records & project bullet points
│   │   ├── skills.ts                  # Categorized tools & programming languages
│   │   ├── education.ts               # CamTech (75% Merit), RUPP IFL, & volunteer workshops
│   │   ├── approach.ts                # 6 engineering approach pillars backed by project proof
│   │   └── verification.ts            # Fact verification checklist
│   ├── lib/
│   │   └── utils.ts                   # Utility functions (clsx + twMerge)
│   └── types/
│       └── index.ts                   # Strict TypeScript data models
├── tailwind.config.ts                 # Extended design tokens & color palettes
├── tsconfig.json                      # Strict TypeScript compiler options
└── package.json                       # Dependencies & build scripts
```

---

## 🔍 Verified Facts & Project Traceability

| Project | Verified Repository | Core Architectural Highlights | Honest Scope Boundary |
|---|---|---|---|
| **SentinelPay** | [VinSambrathna/CreditCardFraudDectection](https://github.com/VinSambrathna/CreditCardFraudDectection) | XGBoost 45-Tree Classifier (`PR-AUC 0.9990`), sub-15ms TreeSHAP explainability, FastAPI WebSockets, 31/31 unit tests passing. | Tested via simulated multi-tenant banking sandbox payloads; does not connect to live banking core switches. |
| **Anuvat** | [SambrathnaVin/anuvat-mobile-main](https://github.com/SambrathnaVin/anuvat-mobile-main) | React Native (Expo 54), TypeScript, `@supabase/supabase-js`, `expo-camera`, AsyncStorage offline caching. | Core mobile app & Supabase backend implemented; live quiz & QR attendance session tested with Supabase RLS. |
| **ParkSmart** | [SambrathnaVin/parking-system-management](https://github.com/SambrathnaVin/parking-system-management) | Java OOP clean architecture domain model (`ParkingRate`, `Vehicle`, `customer`, `parkingevent`, `slot`, `staff`), state pattern slot transitions. | Java domain model repository verified; tariff engine computes hourly and daily rates with validity period checks. |
| **Veriqo** | [SambrathnaVin/veriqo_flutter](https://github.com/SambrathnaVin/veriqo_flutter) | Full-stack Flutter + Supabase e-commerce app, Riverpod, GoRouter, national ID verification bucket policies, camera scanner. | Complete Flutter application & SQL migrations verified in repository. |

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js**: v18.18.0 or higher (Tested on Node.js v24.x)
- **npm**: v9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/VinSambrathna/VinSambrathna_portfolio.git

# Navigate into project directory
cd VinSambrathna_portfolio

# Install dependencies
npm install
```

### Running Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Verification & Quality Checks

Run the verification suite:

```bash
# Type-check with strict TypeScript
node ./node_modules/typescript/bin/tsc --noEmit

# Production build test
node ./node_modules/next/dist/bin/next build
```
