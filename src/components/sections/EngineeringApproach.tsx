import React from "react";
import { Container } from "@/components/ui/Container";
import { ENGINEERING_APPROACH } from "@/data/approach";
import { CheckCircle2 } from "lucide-react";

export function EngineeringApproach() {
  return (
    <section id="approach" className="py-20 md:py-28 bg-[#F2F2EF]/60 border-y border-[#E5E5E3]">
      <Container size="wide">
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
            Methodology &amp; Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717]">
            How I approach software engineering.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            Good software is deliberate. I follow a disciplined engineering cycle that prioritizes clear domain boundaries, testability, and resilient failure handling over superficial speed.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_APPROACH.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-2xl border border-[#E5E5E3] bg-white p-7 flex flex-col justify-between space-y-4 shadow-subtle hover:border-[#D1D1CE] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#0071E3]">{pillar.number}</span>
                  <span className="text-[11px] font-mono text-[#6E6E73] bg-[#F7F7F5] px-2 py-0.5 rounded border border-[#E5E5E3]">
                    {pillar.projectTag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-[#171717]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#555559] leading-relaxed">
                  {pillar.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E5E3]/60 text-xs text-[#6E6E73]">
                <div className="flex items-start gap-1.5 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="italic leading-normal">{pillar.evidence}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
