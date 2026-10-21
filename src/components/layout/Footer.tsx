import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E5E3] bg-[#F7F7F5] py-14 text-sm text-[#6E6E73]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E5E5E3]">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-flex items-center text-base font-semibold text-[#171717] hover:text-[#0071E3] transition-colors">
              Vin Sambrathna
            </Link>
            <p className="text-sm text-[#6E6E73] max-w-md leading-relaxed">
              Software Engineer and Year 4 Software Engineering student at CamTech University (01 March 2023 – Present). Dedicated to building performant web systems, secure gateways, and native mobile applications.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171717]">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#work" className="hover:text-[#171717] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-[#171717] transition-colors">
                  Engineering Approach
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-[#171717] transition-colors">
                  Experience & Internship
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-[#171717] transition-colors">
                  Skills & Tools
                </Link>
              </li>
              <li>
                <Link href="/#education" className="hover:text-[#171717] transition-colors">
                  Education & Awards
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#171717] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Profiles & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171717]">Repositories & Code</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/VinSambrathna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#171717] transition-colors"
                >
                  GitHub @VinSambrathna
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SambrathnaVin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#171717] transition-colors"
                >
                  GitHub @SambrathnaVin
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B]" />
                </a>
              </li>
              <li>
                <a
                  href="/documents/CV_VinSambrathna.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#171717] transition-colors"
                >
                  Download Curriculum Vitae (PDF)
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B]" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:sv6024010100@camtech.edu.kh"
                  className="inline-flex items-center gap-1 hover:text-[#171717] transition-colors"
                >
                  sv6024010100@camtech.edu.kh
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#86868B]">
          <p>© {currentYear} Vin Sambrathna. All rights reserved.</p>
          <span>Phnom Penh, Cambodia</span>
        </div>
      </Container>
    </footer>
  );
}
