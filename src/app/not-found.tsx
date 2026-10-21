import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20">
      <Container size="narrow" className="text-center space-y-6">
        <span className="text-xs font-mono font-semibold text-[#0071E3] uppercase tracking-wider">
          404 Error • Page Not Found
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#171717]">
          The requested page cannot be found.
        </h1>
        <p className="text-base text-[#6E6E73] max-w-md mx-auto leading-relaxed">
          The link you followed may be expired or the case study address may have been updated.
        </p>
        <div className="pt-4 flex justify-center gap-3">
          <Button variant="primary" size="md" href="/">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Portfolio</span>
          </Button>
          <Button variant="secondary" size="md" href="/#work">
            <span>Explore Selected Work</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
