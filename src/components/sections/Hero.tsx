"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Download, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-24 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100/40 via-blue-50/20 to-transparent blur-[130px] pointer-events-none -z-10" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Narrative & Actions */}
          <div className="lg:col-span-8 space-y-7">
            {/* Status Pill: Role Availability */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E5E5E3] text-xs text-[#171717] shadow-2xs backdrop-blur-md">
              <span className="font-semibold tracking-tight">Open to Software Engineer Roles</span>
              <span className="text-[#D1D1CE]">&bull;</span>
              <span className="inline-flex items-center gap-1 text-[#6E6E73]">
                <MapPin className="w-3.5 h-3.5 text-[#86868B]" />
                Phnom Penh, Cambodia
              </span>
            </div>

            {/* Bold Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]">
                <span className="block text-[#171717]">Engineering rigorous,</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#171717] via-[#0071E3] to-[#2563EB]">
                  production software.
                </span>
              </h1>
              <p className="text-base sm:text-xl text-[#555559] font-normal leading-relaxed max-w-2xl">
                I am <span className="font-semibold text-[#171717]">Vin Sambrathna</span>, a Software Engineering student (Year 4) at CamTech University. I design and build high-performance web platforms, secure payment intelligence gateways, and native mobile applications with strict type safety and architectural discipline.
              </p>
            </div>

            {/* Balanced Telemetry Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E5E5E3] backdrop-blur-sm shadow-sm space-y-1">
                <span className="text-[11px] uppercase font-mono text-[#86868B] block tracking-wider">Fast Inference</span>
                <div className="text-lg font-bold text-[#171717] font-mono">&lt; 3 ms</div>
                <span className="text-[11px] text-[#059669] block font-medium">Sub-15ms TreeSHAP</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E5E5E3] backdrop-blur-sm shadow-sm space-y-1">
                <span className="text-[11px] uppercase font-mono text-[#86868B] block tracking-wider">Mobile Attendance</span>
                <div className="text-lg font-bold text-[#171717] font-mono">96.4%</div>
                <span className="text-[11px] text-[#0071E3] block font-medium">Expo 54 &bull; Supabase</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E5E5E3] backdrop-blur-sm shadow-sm space-y-1">
                <span className="text-[11px] uppercase font-mono text-[#86868B] block tracking-wider">Domain Architecture</span>
                <div className="text-lg font-bold text-[#171717] font-mono">100% Strict</div>
                <span className="text-[11px] text-[#6E6E73] block font-medium">TypeScript &bull; Java OOP</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E5E5E3] backdrop-blur-sm shadow-sm space-y-1">
                <span className="text-[11px] uppercase font-mono text-[#86868B] block tracking-wider">Academic Merit</span>
                <div className="text-lg font-bold text-[#171717] font-mono">75% Merit</div>
                <span className="text-[11px] text-[#059669] block font-medium">CamTech Scholar</span>
              </div>
            </div>

            {/* Primary Action Buttons & Single GitHub Profile */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button variant="primary" size="lg" href="/#work" className="shadow-md hover:shadow-lg transition-all">
                Explore Engineering Systems
                <ArrowDown className="w-4 h-4 ml-1.5" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/documents/CV_VinSambrathna.pdf"
                external
                download="CV_VinSambrathna.pdf"
                className="shadow-sm"
              >
                <Download className="w-4 h-4 text-[#6E6E73]" />
                Curriculum Vitae (PDF)
              </Button>

              {/* Single Unified Primary GitHub Profile */}
              <a
                href="https://github.com/VinSambrathna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#E5E5E3] bg-white text-[#171717] hover:border-[#171717] hover:shadow-md transition-all text-xs font-semibold"
                aria-label="GitHub Profile VinSambrathna"
                title="Primary GitHub: @VinSambrathna"
              >
                <GithubIcon className="w-4 h-4" />
                <span>@VinSambrathna</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B]" />
              </a>
            </div>
          </div>

          {/* Right Column: Professional Portrait Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-[36px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Portrait Container */}
              <div className="relative w-64 sm:w-72 rounded-[32px] overflow-hidden bg-white p-2.5 border border-[#E5E5E3] shadow-elevated">
                <div className="relative aspect-[3/4] w-full rounded-[24px] overflow-hidden bg-[#F2F2F0]">
                  <Image
                    src="/images/vin_sambrathna_profile.jpg"
                    alt="Vin Sambrathna — Software Engineer"
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, 288px"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Clean Caption below portrait */}
                <div className="py-2.5 px-2 text-left">
                  <span className="font-bold text-[#171717] block text-sm">Vin Sambrathna</span>
                  <span className="text-xs text-[#6E6E73]">Software Engineering (Year 4) &bull; CamTech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
