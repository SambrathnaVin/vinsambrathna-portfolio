import React from "react";
import { Container } from "@/components/ui/Container";
import { EXPERIENCES } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <Container size="wide">
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
            Professional Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717]">
            Industry internship &amp; team delivery.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            Collaborative development experience delivered within an agile organizational workflow, focusing on modular frontend engineering and cross-device QA.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#E5E5E3] bg-white p-8 sm:p-10 shadow-card space-y-6"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-6 border-b border-[#E5E5E3]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#0071E3]" />
                    <h3 className="text-xl font-semibold text-[#171717]">{exp.role}</h3>
                  </div>
                  <div className="text-base font-medium text-[#424245]">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#6E6E73]">
                  <span className="inline-flex items-center gap-1 bg-[#F2F2F0] px-3 py-1 rounded-full border border-[#E5E5E3]">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#F2F2F0] px-3 py-1 rounded-full border border-[#E5E5E3]">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Projects Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                {exp.projects.map((proj) => (
                  <div
                    key={proj.name}
                    className="rounded-2xl border border-[#E5E5E3] bg-[#FBFBF9] p-6 space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-semibold text-[#171717] tracking-tight">
                          {proj.name}
                        </h4>
                        <span className="text-[10px] font-mono uppercase bg-white border border-[#E5E5E3] px-2 py-0.5 rounded text-[#6E6E73]">
                          Team Project
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs text-[#555559] leading-relaxed">
                        {proj.bulletPoints.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#171717] mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#E5E5E3]/80">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-[#E5E5E3] text-[#424245]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Distinguishing Notice */}
              <div className="text-xs text-[#86868B] italic pt-2">
                * Preserving all primary responsibilities from MR Training &amp; Job Center (MRTJC). Clearly distinguished as team internship contributions.
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
