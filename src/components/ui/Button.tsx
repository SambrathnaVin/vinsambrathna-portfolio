import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "subtle" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  download?: boolean | string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  download,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none rounded-full select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 tracking-tight",
    md: "text-sm px-5 py-2.5 gap-2 tracking-normal",
    lg: "text-base px-6 py-3 gap-2.5 tracking-normal",
  }[size];

  const variantStyles = {
    primary: "bg-[#171717] text-white hover:bg-[#262626] active:bg-[#000000] shadow-sm",
    secondary: "bg-white text-[#171717] border border-[#E5E5E3] hover:border-[#D1D1CE] hover:bg-[#FBFBF9] active:bg-[#F2F2F0]",
    subtle: "bg-[#EBF4FD] text-[#0071E3] hover:bg-[#E1EFFC] active:bg-[#D5E8FA]",
    ghost: "text-[#6E6E73] hover:text-[#171717] hover:bg-black/5 active:bg-black/10",
  }[variant];

  const combinedClasses = cn(baseStyles, sizeStyles, variantStyles, className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          download={download}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} download={download}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
