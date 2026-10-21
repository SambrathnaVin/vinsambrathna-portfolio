"use client";

import React, { useState } from "react";
import { ArrowRight, Layers, CheckCircle } from "lucide-react";

interface ArchitectureStep {
  step: number;
  name: string;
  role: string;
  tech: string;
  details: string;
}

interface ArchitectureDiagramProps {
  title: string;
  description: string;
  steps: ArchitectureStep[];
  isDark?: boolean;
}

export function ArchitectureDiagram({ title, description, steps, isDark = false }: ArchitectureDiagramProps) {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStep = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 font-sans ${
        isDark
          ? "border-[#252A36] bg-[#0E1117] text-white"
          : "border-[#E5E5E3] bg-white text-[#171717] shadow-card"
      }`}
    >
      <div className="pb-6 border-b border-[#E5E5E3]/40">
        <div className="flex items-center gap-2">
          <Layers className={`w-5 h-5 ${isDark ? "text-blue-400" : "text-[#0071E3]"}`} />
          <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        </div>
        <p className={`text-xs mt-1 ${isDark ? "text-[#86868B]" : "text-[#6E6E73]"}`}>
          {description}
        </p>
      </div>

      {/* Steps Pipeline Horizontal Bar */}
      <div className="pt-6 pb-6 overflow-x-auto">
        <div className="flex items-center min-w-[550px] justify-between relative">
          {/* Connector Line */}
          <div
            className={`absolute top-5 left-4 right-4 h-0.5 -z-0 ${
              isDark ? "bg-[#1E232F]" : "bg-[#E5E5E3]"
            }`}
          />

          {steps.map((node) => {
            const isActive = node.step === activeStep;
            const isPassed = node.step < activeStep;

            return (
              <button
                key={node.step}
                type="button"
                onClick={() => setActiveStep(node.step)}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 border-2 ${
                    isActive
                      ? isDark
                        ? "bg-blue-600 border-blue-400 text-white shadow-lg ring-4 ring-blue-500/20"
                        : "bg-[#171717] border-[#171717] text-white shadow-md ring-4 ring-black/5"
                      : isPassed
                      ? isDark
                        ? "bg-[#1E232F] border-blue-500 text-blue-400"
                        : "bg-[#F7F7F5] border-[#171717] text-[#171717]"
                      : isDark
                      ? "bg-[#141720] border-[#252A36] text-[#86868B]"
                      : "bg-[#F7F7F5] border-[#E5E5E3] text-[#86868B]"
                  }`}
                >
                  {isPassed ? <CheckCircle className="w-4 h-4" /> : `0${node.step}`}
                </div>
                <span
                  className={`text-[11px] font-medium mt-2 max-w-[90px] text-center line-clamp-1 transition-colors ${
                    isActive
                      ? isDark
                        ? "text-blue-400 font-semibold"
                        : "text-[#171717] font-semibold"
                      : isDark
                      ? "text-[#86868B]"
                      : "text-[#6E6E73]"
                  }`}
                >
                  {node.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Detailed Inspector */}
      <div
        className={`rounded-xl border p-5 ${
          isDark
            ? "border-[#1E232F] bg-[#141720]"
            : "border-[#E5E5E3] bg-[#FBFBF9]"
        }`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-black/5 dark:border-white/5">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                isDark ? "bg-blue-900/60 text-blue-300" : "bg-[#171717] text-white"
              }`}
            >
              STAGE 0{currentStep.step}
            </span>
            <h4 className="text-sm font-semibold">{currentStep.name}</h4>
          </div>
          <span
            className={`text-xs font-mono px-2.5 py-0.5 rounded border ${
              isDark
                ? "border-[#252A36] bg-[#0E1117] text-blue-400"
                : "border-[#E5E5E3] bg-white text-[#0071E3]"
            }`}
          >
            {currentStep.tech}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
          <div>
            <span className={`block uppercase tracking-wider text-[10px] ${isDark ? "text-[#86868B]" : "text-[#86868B]"}`}>
              Subsystem Responsibility:
            </span>
            <span className="font-medium mt-1 block">{currentStep.role}</span>
          </div>
          <div className="sm:col-span-2">
            <span className={`block uppercase tracking-wider text-[10px] ${isDark ? "text-[#86868B]" : "text-[#86868B]"}`}>
              Verified Implementation Detail:
            </span>
            <p className={`mt-1 leading-relaxed ${isDark ? "text-[#D1D5DB]" : "text-[#424245]"}`}>
              {currentStep.details}
            </p>
          </div>
        </div>

        {/* Next step hint */}
        <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex justify-end">
          {currentStep.step < steps.length ? (
            <button
              type="button"
              onClick={() => setActiveStep(currentStep.step + 1)}
              className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                isDark ? "text-blue-400 hover:text-blue-300" : "text-[#0071E3] hover:text-blue-700"
              }`}
            >
              Next Pipeline Stage ({steps[currentStep.step]?.name}) <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setActiveStep(1)}
              className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                isDark ? "text-[#86868B] hover:text-white" : "text-[#6E6E73] hover:text-[#171717]"
              }`}
            >
              Return to Pipeline Start <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
