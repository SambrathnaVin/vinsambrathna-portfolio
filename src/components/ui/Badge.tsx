import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "neutral" | "accent" | "success" | "warning" | "dark";
}

export function Badge({ children, variant = "neutral", className, ...props }: BadgeProps) {
  const variantStyles = {
    neutral: "bg-[#F2F2F0] text-[#424245] border border-[#E5E5E3]",
    accent: "bg-[#EBF4FD] text-[#0071E3] border border-[#D0E6FB]",
    success: "bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]",
    warning: "bg-[#FFFBEB] text-[#D97706] border border-[#FDE68A]",
    dark: "bg-[#1E222B] text-[#E2E8F0] border border-[#2E3544]",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-tight",
        variantStyles,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
