"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Layers, Cpu, Smartphone, Car, ShoppingBag } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";
import { Button } from "@/components/ui/Button";
import { SentinelPayLiveConsole } from "@/components/devices/SentinelPayLiveConsole";
import { AnuvatPhoneMockup } from "@/components/devices/AnuvatPhoneMockup";
import { ParkSmartDualConsole } from "@/components/devices/ParkSmartDualConsole";
import { VeriqoMarketplaceMockup } from "@/components/devices/VeriqoMarketplaceMockup";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const isDark = project.visualTheme.isCinematicDark;

  return (
    <article
      className={`group relative rounded-[32px] border transition-all duration-300 overflow-hidden ${
        isDark
          ? "border-[#252A36] bg-[#0A0C12] text-white shadow-elevated"
          : "border-[#E5E5E3] bg-white text-[#171717] shadow-card hover:border-[#D1D1CE]"
      }`}
    >
      <div className="p-7 sm:p-10 lg:p-12 space-y-8">
        {/* Top Info Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-black/5 dark:border-white/10">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                  isDark
                    ? "bg-blue-950/80 text-blue-400 border border-blue-800/80"
                    : "bg-[#F2F2F0] text-[#171717] border border-[#E5E5E3]"
                }`}
              >
                {project.category}
              </span>
              <span className={`text-xs font-mono ${isDark ? "text-[#86868B]" : "text-[#6E6E73]"}`}>
                {project.period}
              </span>
            </div>

            <Link href={`/projects/${project.slug}`}>
              <h3
                className={`text-3xl sm:text-4xl font-bold tracking-tight transition-colors ${
                  isDark ? "text-white group-hover:text-blue-400" : "text-[#171717] group-hover:text-[#0071E3]"
                }`}
              >
                {project.title}
              </h3>
            </Link>
            <p
              className={`text-base sm:text-lg font-medium ${
                isDark ? "text-[#94A3B8]" : "text-[#6E6E73]"
              }`}
            >
              {project.tagline}
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant={isDark ? "primary" : "primary"}
              size="sm"
              href={`/projects/${project.slug}`}
              className={isDark ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md font-medium" : "shadow-sm font-medium"}
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>

            {project.links.github && (
              <Button
                variant={isDark ? "ghost" : "secondary"}
                size="sm"
                href={project.links.github}
                external
                className={isDark ? "text-[#CBD5E1] hover:text-white hover:bg-white/5" : ""}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
                <ArrowUpRight className="w-3 h-3 text-[#86868B]" />
              </Button>
            )}
          </div>
        </div>

        {/* Narrative & Contribution Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className={project.slug === "anuvat" ? "lg:col-span-6 space-y-4 text-sm leading-relaxed" : "lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed"}>
            <div>
              <span className={`font-semibold block mb-1 text-xs uppercase tracking-wider ${isDark ? "text-blue-400" : "text-[#0071E3]"}`}>
                The Engineering Problem
              </span>
              <p className={isDark ? "text-[#CBD5E1]" : "text-[#424245]"}>{project.problem}</p>
            </div>

            <div className={project.slug === "anuvat" ? "pt-2" : ""}>
              <span className={`font-semibold block mb-2 text-xs uppercase tracking-wider ${isDark ? "text-[#86868B]" : "text-[#86868B]"}`}>
                Verified Core Contributions
              </span>
              <ul className="space-y-2">
                {project.verifiedContributions.slice(0, 3).map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-xs flex items-start gap-2.5 ${
                      isDark ? "text-[#94A3B8]" : "text-[#555559]"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isDark ? "bg-blue-400" : "bg-[#171717]"}`} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className={`flex flex-wrap gap-1.5 ${project.slug === "anuvat" ? "pt-2" : "md:col-span-2 pt-2 border-t border-black/5 dark:border-white/10"}`}>
              {project.techStack.flatMap((ts) => ts.items).slice(0, 10).map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                    isDark
                      ? "bg-[#161B26] text-[#CBD5E1] border border-[#252A36]"
                      : "bg-[#F2F2F0] text-[#333336] border border-[#E5E5E3]"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column for Anuvat Mobile Phone */}
          {project.slug === "anuvat" && (
            <div className="lg:col-span-6 space-y-2">
              <AnuvatPhoneMockup />
              <div className="text-[11px] text-[#86868B] text-center pt-2 font-mono">
                Interactive Expo 54 client: Tap bottom tabs (Home, Classes, Scanner, Quiz) to explore.
              </div>
            </div>
          )}
        </div>

        {/* Full-Width Interactive Stage for SentinelPay, ParkSmart, and Veriqo */}
        {project.slug === "sentinelpay" && (
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Live Interactive System: SentinelPay Gateway &amp; Cambodian Banking Simulator</span>
              </span>
              <span className="text-[11px] font-mono text-[#86868B]">
                FastAPI &bull; XGBoost Classifier &bull; TreeSHAP
              </span>
            </div>
            <SentinelPayLiveConsole />
          </div>
        )}

        {project.slug === "parksmart" && (
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5" />
                <span>Live Interactive System: ParkSmart Dual Kiosk &amp; Java Domain Console</span>
              </span>
              <span className="text-[11px] font-mono text-[#86868B]">
                slot.java &bull; ParkingRate.java &bull; parkingevent.java
              </span>
            </div>
            <ParkSmartDualConsole />
          </div>
        )}

        {project.slug === "veriqo" && (
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Live Interactive System: Veriqo Marketplace &amp; Supabase Storage RLS</span>
              </span>
              <span className="text-[11px] font-mono text-[#86868B]">
                Flutter &bull; Riverpod &bull; Supabase Private Bucket KYC
              </span>
            </div>
            <VeriqoMarketplaceMockup />
          </div>
        )}
      </div>
    </article>
  );
}
