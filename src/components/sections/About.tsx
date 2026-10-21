import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Mail, Phone, UserCheck, Shield, GraduationCap, MapPin, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F2F2EF]/50 border-t border-[#E5E5E3]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial About Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
              About &amp; Professional Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717]">
              Engineering practical products with architectural integrity.
            </h2>
            <div className="space-y-4 text-base text-[#424245] leading-relaxed">
              <p>
                I am a fourth-year (Year 4) Software Engineering student at CamTech University (01 March 2023 – Present) and a concurrent Bachelor of
                English student at the Institute of Foreign Languages (IFL, RUPP) in Phnom Penh, Cambodia.
              </p>
              <p>
                My engineering focus centers on frontend systems, robust backend logic, and mobile platforms.
                Rather than treating software as merely visual interfaces, I approach development by modeling explicit
                domain states, separating deterministic business rules from probabilistic AI models, and ensuring all
                components remain accessible, testable, and maintainable.
              </p>
              <p>
                Through my digital internship at MR Training &amp; Job Center (MRTJC), I collaborated in agile teams
                delivering Next.js and Tailwind CSS platforms, implementing internationalization (i18n), and resolving
                complex cross-device bugs. I actively seek software engineering roles where I can contribute to
                production products with rigorous craftsmanship.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#171717]">
                <CheckCircle2 className="w-4 h-4 text-[#0071E3]" />
                <span>Strict architectural separation</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#171717]">
                <CheckCircle2 className="w-4 h-4 text-[#0071E3]" />
                <span>Automated testing &amp; fail-safes</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#171717]">
                <CheckCircle2 className="w-4 h-4 text-[#0071E3]" />
                <span>Zero-PII &amp; data privacy standards</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#171717]">
                <CheckCircle2 className="w-4 h-4 text-[#0071E3]" />
                <span>Bilingual technical communication</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Card & Academic Reference Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Engineer Profile Card with Portrait */}
            <div className="rounded-3xl border border-[#E5E5E3] bg-white p-6 shadow-card flex items-center gap-5">
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border border-black/10 shrink-0 bg-[#F2F2F0] shadow-sm">
                <Image
                  src="/images/vin_sambrathna_profile.jpg"
                  alt="Vin Sambrathna"
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1.5 text-xs">
                <span className="text-[11px] font-mono text-[#0071E3] font-semibold uppercase tracking-wider">
                  Software Engineer
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] tracking-tight">Vin Sambrathna</h3>
                <p className="text-xs text-[#6E6E73] font-medium">B.S. Software Engineering (Year 4) &bull; CamTech University</p>
                <div className="pt-1 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-[#059669] font-medium bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <Award className="w-3.5 h-3.5" />
                    75% Merit Scholar
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-[#1d1d1f] font-medium bg-gray-100 px-2.5 py-0.5 rounded-full border border-gray-200">
                    RUPP &bull; IFL English
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Reference Box */}
            <div className="rounded-3xl border border-[#E5E5E3] bg-white p-7 sm:p-8 shadow-card space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-[#E5E5E3]">
                <UserCheck className="w-5 h-5 text-[#0071E3]" />
                <h3 className="text-lg font-semibold text-[#171717]">Academic Reference</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-semibold text-sm text-[#171717]">Ms. Noy Chovin</div>
                  <div className="text-[#6E6E73] mt-0.5">Head of Student Affairs</div>
                  <div className="text-[#6E6E73]">CamTech University, Phnom Penh</div>
                </div>

                <div className="pt-3 border-t border-[#E5E5E3]/70 space-y-2">
                  <div className="flex items-center gap-2 text-[#424245]">
                    <Phone className="w-3.5 h-3.5 text-[#86868B]" />
                    <span className="font-mono">089 924 144</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#424245]">
                    <Mail className="w-3.5 h-3.5 text-[#86868B]" />
                    <a
                      href="mailto:chhorvin.noy@camtech.edu.kh"
                      className="text-[#0071E3] hover:underline"
                    >
                      chhorvin.noy@camtech.edu.kh
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F7F5] border border-[#E5E5E3] text-xs space-y-2 text-[#555559]">
                <div className="flex items-center gap-1.5 font-semibold text-[#171717]">
                  <Shield className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Truthful Engineering Commitment</span>
                </div>
                <p className="leading-relaxed">
                  Every capability, repository link, and performance characteristic mentioned in this portfolio is
                  verifiable through direct source inspection or contact with university references.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
