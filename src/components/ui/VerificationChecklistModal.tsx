"use client";

import React, { useState } from "react";
import { ShieldCheck, X, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { VERIFICATION_CHECKLIST } from "@/data/verification";

export function VerificationChecklistModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 bg-[#171717] hover:bg-[#262626] text-white text-xs font-medium px-3.5 py-2 rounded-full shadow-lg border border-[#2E3544] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
      >
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>Audit &amp; Facts Checklist</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 nav-backdrop animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl border border-[#E5E5E3] max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#E5E5E3] flex justify-between items-center bg-[#FBFBF9]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#171717]">
                    Technical Integrity &amp; Verification Audit
                  </h3>
                  <p className="text-xs text-[#6E6E73]">
                    Distinguishing CV facts, repository-verified facts, and explicit scope boundaries.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#86868B] hover:text-[#171717] hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 leading-relaxed">
                <strong>Zero Fabrication Guarantee:</strong> This portfolio explicitly prohibits synthetic metrics,
                unsupported performance claims, imaginary production deployments, or fabricated user volumes.
              </div>

              <div className="space-y-3 pt-2">
                {VERIFICATION_CHECKLIST.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-[#E5E5E3] bg-[#F7F7F5] space-y-1.5"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-semibold text-xs text-[#171717]">{item.claim}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium shrink-0">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[#555559] leading-relaxed">{item.detail}</p>
                    <div className="text-[10px] text-[#86868B] font-mono flex items-center gap-1 pt-1">
                      <FileText className="w-3 h-3" />
                      <span>Source: {item.evidenceSource}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#E5E5E3] bg-[#FBFBF9] flex justify-between items-center text-xs">
              <a
                href="/documents/CV_VinSambrathna.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0071E3] font-medium hover:underline flex items-center gap-1"
              >
                Inspect Official CV PDF
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-full bg-[#171717] text-white hover:bg-[#262626] font-medium transition-colors"
              >
                Close Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
