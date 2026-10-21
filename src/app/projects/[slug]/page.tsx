import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SentinelPayLiveConsole } from "@/components/devices/SentinelPayLiveConsole";
import { AnuvatPhoneMockup } from "@/components/devices/AnuvatPhoneMockup";
import { ParkSmartDualConsole } from "@/components/devices/ParkSmartDualConsole";
import { VeriqoMarketplaceMockup } from "@/components/devices/VeriqoMarketplaceMockup";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { GithubIcon } from "@/components/ui/Icons";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  FileCode2,
  Terminal,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | Vin Sambrathna`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Case Study | Vin Sambrathna`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isDarkTheme = project.visualTheme.isCinematicDark;

  return (
    <div className="pt-28 pb-24">
      {/* Back to Home Bar */}
      <Container size="wide" className="mb-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-medium text-[#6E6E73] hover:text-[#171717] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Work</span>
        </Link>
      </Container>

      {/* Case Study Header */}
      <section className="pb-12">
        <Container size="wide">
          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="accent">{project.category}</Badge>
              <Badge variant="neutral">{project.period}</Badge>
              <span className="inline-flex items-center gap-1 text-xs text-[#059669] font-medium bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3 h-3" />
                {project.verificationStatus.evidenceLevel}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#171717]">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-[#6E6E73] font-normal leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.links.github && (
                <Button variant="secondary" size="sm" href={project.links.github} external>
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Inspect Source Code</span>
                </Button>
              )}
              {project.links.liveDemo ? (
                <Button variant="primary" size="sm" href={project.links.liveDemo} external>
                  <span>Live Interactive Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              ) : (
                <span className="text-xs text-[#86868B] font-mono">
                  • Public repository verified on GitHub
                </span>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Core Demonstration Section */}
      <section className="py-8">
        <Container size="wide">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Verified Interactive System Demonstration</span>
              </span>
              <span className="text-xs text-[#86868B] font-mono">100% Repository-Verified Logic</span>
            </div>

            {project.slug === "sentinelpay" && <SentinelPayLiveConsole />}
            {project.slug === "anuvat" && (
              <div className="py-6 flex justify-center">
                <AnuvatPhoneMockup />
              </div>
            )}
            {project.slug === "parksmart" && <ParkSmartDualConsole />}
            {project.slug === "veriqo" && <VeriqoMarketplaceMockup />}
          </div>
        </Container>
      </section>

      {/* Narrative Section: Problem, Scope, & Users */}
      <section className="py-12 border-t border-[#E5E5E3] mt-8">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              {/* Executive Overview */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-[#171717]">
                  Executive Overview
                </h2>
                <p className="text-base text-[#424245] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Problem & Target Users */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="rounded-2xl border border-[#E5E5E3] bg-[#FBFBF9] p-6 space-y-2">
                  <h3 className="text-sm font-semibold text-[#171717]">Target Stakeholders</h3>
                  <p className="text-xs text-[#555559] leading-relaxed">{project.targetUsers}</p>
                </div>
                <div className="rounded-2xl border border-[#E5E5E3] bg-[#FBFBF9] p-6 space-y-2">
                  <h3 className="text-sm font-semibold text-[#171717]">Core Engineering Challenge</h3>
                  <p className="text-xs text-[#555559] leading-relaxed">{project.problem}</p>
                </div>
              </div>

              {/* Verified Author Contributions */}
              <div className="space-y-4 pt-2">
                <h2 className="text-2xl font-semibold tracking-tight text-[#171717]">
                  My Role &amp; Verified Engineering Contributions
                </h2>
                <div className="p-6 rounded-2xl border border-[#E5E5E3] bg-white space-y-3 shadow-subtle">
                  <div className="text-xs font-semibold text-[#0071E3]">
                    Role: {project.role}
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#424245]">
                    {project.verifiedContributions.map((contrib, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Architecture Data Flow */}
              {project.slug === "sentinelpay" && (
                <div className="space-y-4 pt-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#171717]">
                    End-to-End Decision Architecture
                  </h2>
                  <ArchitectureDiagram
                    title={project.architecture.title}
                    description={project.architecture.description}
                    steps={project.architecture.nodes}
                    isDark={true}
                  />
                </div>
              )}

              {/* Important Implementation Decisions */}
              <div className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold tracking-tight text-[#171717]">
                  Key Architectural Decisions &amp; Safety Trade-offs
                </h2>
                <div className="space-y-4">
                  {project.implementationDecisions.map((dec, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#E5E5E3] bg-white p-6 space-y-3 shadow-subtle"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-[#171717]">{dec.title}</h3>
                        <span className="text-[10px] font-mono text-[#6E6E73] bg-[#F7F7F5] px-2 py-0.5 rounded border border-[#E5E5E3]">
                          Design Choice
                        </span>
                      </div>
                      <div className="text-xs text-[#424245] space-y-1.5">
                        <div>
                          <strong className="text-[#171717]">Decision: </strong>
                          {dec.decision}
                        </div>
                        <div>
                          <strong className="text-[#171717]">Rationale: </strong>
                          {dec.rationale}
                        </div>
                        <div className="pt-2 border-t border-[#E5E5E3]/60 text-[#059669]">
                          <strong>Safety &amp; Audit Guarantee: </strong>
                          {dec.safetyOrAudit}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testing & Limitations */}
              <div className="space-y-4 pt-4">
                <h2 className="text-2xl font-semibold tracking-tight text-[#171717]">
                  Testing Rigor &amp; Transparent Limitations
                </h2>
                <div className="p-6 rounded-2xl border border-amber-200 bg-amber-50/50 space-y-3 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-amber-900">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>{project.verifiedTestingNotes.suite}</span>
                  </div>
                  <p className="text-amber-900/80 leading-relaxed">
                    {project.verifiedTestingNotes.details}
                  </p>
                  <div className="pt-2 border-t border-amber-200 text-amber-950 font-medium">
                    <strong>Honest Scope &amp; Limitation: </strong>
                    {project.verifiedTestingNotes.limitation}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar: Verified Tech Stack & Evidence */}
            <div className="lg:col-span-4 space-y-6">
              {/* Tech Stack Breakdown */}
              <div className="rounded-3xl border border-[#E5E5E3] bg-white p-6 shadow-card space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-[#E5E5E3]">
                  <FileCode2 className="w-4 h-4 text-[#0071E3]" />
                  <h3 className="text-sm font-semibold text-[#171717]">Verified Technology Stack</h3>
                </div>

                <div className="space-y-4 text-xs">
                  {project.techStack.map((stack) => (
                    <div key={stack.category} className="space-y-1.5">
                      <span className="text-[11px] font-semibold text-[#86868B] block uppercase tracking-wider">
                        {stack.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {stack.items.map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 rounded-md bg-[#F7F7F5] border border-[#E5E5E3] text-[#171717] font-mono text-[11px]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evidence Scope Card */}
              <div className="rounded-3xl border border-[#E5E5E3] bg-[#FBFBF9] p-6 space-y-4 text-xs">
                <div className="flex items-center gap-2 font-semibold text-[#171717]">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span>Verification Evidence Log</span>
                </div>
                <ul className="space-y-1.5 text-[#555559]">
                  {project.verificationStatus.verifiedFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#059669] font-bold">✓</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-[#E5E5E3] text-[#86868B] italic">
                  {project.verificationStatus.honestScope}
                </div>
              </div>

              {/* Return CTA */}
              <div className="pt-2">
                <Button variant="secondary" size="md" href="/#work" className="w-full justify-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span>Explore Other Projects</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
