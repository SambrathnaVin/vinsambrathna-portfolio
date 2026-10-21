import React from "react";
import { Container } from "@/components/ui/Container";
import { SKILL_CATEGORIES } from "@/data/skills";
import { Code2, Smartphone, Database, Terminal, Languages, Sparkles, Cpu } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-[#F2F2EF]/50 border-t border-[#E5E5E3]">
      <Container size="wide">
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
            Keynote Architecture Bento
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#171717]">
            Core competencies &amp; technical foundation.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            Organized across specialized domains—combining modern frontend engineering, machine learning pipelines, and multi-platform mobile architectures.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Frontend & Web Architecture (Span 8) */}
          <div className="md:col-span-8 rounded-[32px] border border-[#E5E5E3] bg-white p-8 sm:p-10 shadow-card flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-[#D1D1CE] transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-3 rounded-2xl bg-blue-50 text-[#0071E3] border border-blue-200">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E5E5E3] text-[#171717]">
                  Primary Domain
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#171717] tracking-tight">
                  Frontend &amp; Reactive Web Architecture
                </h3>
                <p className="text-sm text-[#6E6E73] mt-1 max-w-xl leading-relaxed">
                  Engineered with Next.js App Router, React 19, TypeScript, and Tailwind CSS. Focuses on component-driven modularity, strict state boundaries, and accessible user experiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Next.js 15 (App Router)",
                  "React 19",
                  "TypeScript (Strict)",
                  "Tailwind CSS",
                  "Framer Motion",
                  "HTML5 Semantic",
                  "CSS3 Layouts",
                  "i18n Multi-Language",
                  "Performance Tuning",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-xl bg-[#F7F7F5] border border-[#E5E5E3] text-xs font-medium text-[#171717] tracking-tight hover:bg-white transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E5E3] text-xs text-[#86868B]">
              <span>Applied in MRTJC Digital Internship &amp; ASIP platform</span>
            </div>
          </div>

          {/* Card 2: AI & Forensics (Span 4) */}
          <div className="md:col-span-4 rounded-[32px] border border-[#252A36] bg-[#0C0E14] text-white p-8 sm:p-10 shadow-elevated flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
                  Sub-15ms SHAP
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Machine Learning &amp; Forensics
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  XGBoost 45-Tree Classifier, TreeSHAP explainability, and multi-tenant security architecture.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["XGBoost", "TreeSHAP", "Python 3.11", "FastAPI", "WebSockets", "Pytest (31 tests)"].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-[#161B26] border border-[#252A36] text-[11px] font-mono text-[#D1D5DB]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1E232F] text-[11px] text-[#94A3B8] font-mono">
              <span>Holdout Test: 98.61% Recall &bull; 0.9990 PR-AUC</span>
            </div>
          </div>

          {/* Card 3: Mobile Engineering (Span 4) */}
          <div className="md:col-span-4 rounded-[32px] border border-[#E5E5E3] bg-white p-8 shadow-card flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-teal-50 text-teal-600 border border-teal-200 w-fit">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#171717] tracking-tight">
                  Mobile Engineering
                </h3>
                <p className="text-xs text-[#6E6E73] mt-1 leading-relaxed">
                  Cross-platform iOS and Android mobile development using React Native (Expo) and Flutter.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["React Native", "Expo 54", "Flutter", "Dart", "Riverpod", "Expo Camera", "GoRouter"].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-[#F7F7F5] border border-[#E5E5E3] text-xs font-medium text-[#424245]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-[11px] text-[#86868B] font-mono pt-3 border-t border-[#E5E5E3]">
              Verified in Anuvat &amp; Veriqo Repositories
            </div>
          </div>

          {/* Card 4: Backend & Cloud Persistence (Span 4) */}
          <div className="md:col-span-4 rounded-[32px] border border-[#E5E5E3] bg-white p-8 shadow-card flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-200 w-fit">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#171717] tracking-tight">
                  Backend &amp; Persistence
                </h3>
                <p className="text-xs text-[#6E6E73] mt-1 leading-relaxed">
                  RESTful gateways, relational schema modeling, and cloud BaaS with Row-Level Security.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Spring Boot", "Supabase", "PostgreSQL", "MySQL", "Laravel", "Docker", "REST APIs"].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-[#F7F7F5] border border-[#E5E5E3] text-xs font-medium text-[#424245]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-[11px] text-[#86868B] font-mono pt-3 border-t border-[#E5E5E3]">
              Row-Level Security &amp; Anti-IDOR Scoping
            </div>
          </div>

          {/* Card 5: Languages & Dual Degree Excellence (Span 4) */}
          <div className="md:col-span-4 rounded-[32px] border border-[#E5E5E3] bg-white p-8 shadow-card flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 w-fit">
                <Languages className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#171717] tracking-tight">
                  Dual-Degree &amp; Communication
                </h3>
                <p className="text-xs text-[#6E6E73] mt-1 leading-relaxed">
                  Bilingual cross-functional teamwork, agile Git workflows, and academic merit excellence.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "English (Professional — IFL RUPP)",
                  "Khmer (Native)",
                  "Agile Collaboration",
                  "Public Speaking",
                  "Git / GitHub Workflow",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-[#F7F7F5] border border-[#E5E5E3] text-xs font-medium text-[#424245]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-[11px] text-[#D97706] font-mono font-medium pt-3 border-t border-[#E5E5E3]">
              75% Academic Merit Scholarship
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
