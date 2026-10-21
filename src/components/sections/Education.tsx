import React from "react";
import { Container } from "@/components/ui/Container";
import { EDUCATION_ITEMS, VOLUNTEERING_ITEMS } from "@/data/education";
import { GraduationCap, Award, HeartHandshake, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <Container size="wide">
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
            Academic Background &amp; Leadership
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717]">
            Education &amp; academic distinctions.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            Concurrent dual-degree study combining software engineering fundamentals with advanced English proficiency, supplemented by volunteer technology mentorship.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.institution}
              className="rounded-3xl border border-[#E5E5E3] bg-white p-8 shadow-card flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#0071E3] font-semibold">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold text-[#171717]">{item.degree}</h3>
                    <div className="text-sm font-medium text-[#424245]">
                      {item.institution}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-full bg-[#F2F2F0] text-[#171717]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                {item.distinction && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.distinction}</span>
                  </div>
                )}

                <div className="space-y-2 pt-2 text-xs text-[#555559] leading-relaxed">
                  {item.details.map((detail, dIdx) => (
                    <p key={dIdx}>{detail}</p>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E5E3] flex items-center gap-1.5 text-xs text-[#86868B]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Volunteering */}
        <div className="rounded-3xl border border-[#E5E5E3] bg-[#FBFBF9] p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#0071E3]" />
            <h3 className="text-xl font-semibold text-[#171717]">
              Leadership, Mentorship &amp; Volunteering
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {VOLUNTEERING_ITEMS.map((vol) => (
              <div
                key={vol.title}
                className="rounded-2xl border border-[#E5E5E3] bg-white p-6 space-y-3"
              >
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-base font-semibold text-[#171717]">{vol.title}</h4>
                  <span className="text-[11px] font-mono text-[#6E6E73] bg-[#F7F7F5] px-2 py-0.5 rounded border border-[#E5E5E3] shrink-0">
                    {vol.date}
                  </span>
                </div>
                <div className="text-xs font-medium text-[#0071E3]">{vol.role} • {vol.organization}</div>
                <ul className="space-y-1.5 text-xs text-[#555559]">
                  {vol.activities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717] mt-1.5 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
