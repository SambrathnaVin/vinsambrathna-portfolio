import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, className, size = "default", ...props }: ContainerProps) {
  const maxWidthClass = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  }[size];

  return (
    <div className={cn("mx-auto px-6 sm:px-8 lg:px-12 w-full", maxWidthClass, className)} {...props}>
      {children}
    </div>
  );
}
