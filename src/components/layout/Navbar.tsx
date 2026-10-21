"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Menu,
  X,
  ArrowUpRight,
  Briefcase,
  Compass,
  Building2,
  Cpu,
  User,
  Mail,
  ChevronRight,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: "work", label: "Work", href: "/#work", icon: Briefcase },
  { id: "approach", label: "Approach", href: "/#approach", icon: Compass },
  { id: "experience", label: "Experience", href: "/#experience", icon: Building2 },
  { id: "skills", label: "Skills", href: "/#skills", icon: Cpu },
  { id: "about", label: "About", href: "/#about", icon: User },
  { id: "contact", label: "Contact", href: "/#contact", icon: Mail },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Pill positioning state
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  // Update sliding pill indicator position
  const updatePill = useCallback(() => {
    const targetId = hoveredSection || activeSection;
    if (!targetId || !linkRefs.current[targetId]) {
      if (!hoveredSection && !activeSection) {
        setPillStyle((prev) => ({ ...prev, opacity: 0 }));
      }
      return;
    }

    const targetEl = linkRefs.current[targetId];
    if (!targetEl) return;

    setPillStyle({
      left: targetEl.offsetLeft,
      width: targetEl.offsetWidth,
      opacity: 1,
    });
  }, [hoveredSection, activeSection]);

  useEffect(() => {
    updatePill();
  }, [updatePill]);

  // Track window resize to recompute pill position
  useEffect(() => {
    const handleResize = () => updatePill();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updatePill]);

  // Recompute pill position when scroll morph occurs
  useEffect(() => {
    updatePill();
    const timer = setTimeout(updatePill, 350);
    return () => clearTimeout(timer);
  }, [isScrolled, updatePill]);

  // Track scroll position for capsule elevation and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to spy on active sections
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Dynamic Shape-Shifting Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "pt-3 sm:pt-4 px-3 sm:px-6" : "pt-0 px-0"
        }`}
      >
        <div
          onTransitionEnd={() => updatePill()}
          className={`relative flex items-center justify-between pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "w-full max-w-4xl bg-white/85 nav-backdrop border border-black/[0.12] rounded-full py-2 px-3.5 sm:px-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              : "w-full max-w-full bg-white/85 nav-backdrop border-b border-black/[0.08] rounded-none py-3.5 px-6 sm:px-10 lg:px-14 shadow-none"
          }`}
        >
          {/* Subtle scroll progress line at bottom of navbar */}
          <div
            className={`absolute bottom-0 h-[2px] overflow-hidden pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled ? "left-6 right-6 rounded-full" : "left-0 right-0 rounded-none"
            }`}
          >
            <div
              className="h-full bg-gradient-to-r from-[#0071E3] via-indigo-500 to-emerald-500 transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Left Brandmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#171717] hover:opacity-85 transition-opacity"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-black/10 shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/vin_sambrathna_avatar.jpg"
                alt="Vin Sambrathna"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-bold tracking-tight text-[#171717] text-sm sm:text-base group-hover:text-[#0071E3] transition-colors">
                Vin Sambrathna
              </span>
              <span className="text-xs font-normal text-[#6E6E73] hidden sm:inline-block">
                &bull; Software Engineer
              </span>
            </div>
          </Link>

          {/* Center Links: Fluid Magnetic Sliding Pill Indicator */}
          <nav
            className="hidden md:flex relative items-center bg-black/[0.03] p-1 rounded-full border border-black/[0.04]"
            aria-label="Main Navigation"
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* The Animated Sliding Pill */}
            <div
              className="absolute left-0 top-1 bottom-1 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/[0.06] pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(${pillStyle.left}px)`,
                width: `${pillStyle.width}px`,
                opacity: pillStyle.opacity,
              }}
            />

            {NAV_ITEMS.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredSection === link.id;

              return (
                <Link
                  key={link.id}
                  ref={(el) => {
                    linkRefs.current[link.id] = el;
                  }}
                  href={link.href}
                  onMouseEnter={() => setHoveredSection(link.id)}
                  className={`relative z-10 px-3.5 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive || isHovered
                      ? "text-[#171717] font-semibold"
                      : "text-[#6E6E73] hover:text-[#171717]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action: Shimmering "Download CV" Button */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/documents/CV_VinSambrathna.pdf"
              download="CV_VinSambrathna.pdf"
              className={`group relative inline-flex items-center gap-1.5 rounded-full text-xs font-semibold text-white bg-[#171717] hover:bg-black shadow-sm active:scale-95 transition-all overflow-hidden ${
                isScrolled ? "px-3.5 py-1.5" : "px-4 py-2"
              }`}
              title="Download Curriculum Vitae (PDF)"
            >
              {/* Shimmer light sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <Download className="w-3.5 h-3.5 text-white/80 group-hover:translate-y-0.5 group-hover:text-white transition-transform duration-200" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile & Tablet Actions & Menu Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href="/documents/CV_VinSambrathna.pdf"
              download="CV_VinSambrathna.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#171717] px-3 py-1.5 rounded-full shadow-sm active:scale-95 transition-transform"
              title="Download CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#171717] hover:bg-black/5 active:scale-90 transition-all focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#0071E3]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Cupertino Glass Sheet */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#F7F7F5]/95 nav-backdrop md:hidden flex flex-col justify-between p-6 pt-24 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Header Profile Info in Mobile Drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E3]">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black/10">
                <Image
                  src="/images/vin_sambrathna_avatar.jpg"
                  alt="Vin Sambrathna"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#171717]">Vin Sambrathna</h3>
                <p className="text-xs text-[#6E6E73]">Software Engineering (Year 4) &bull; CamTech</p>
              </div>
            </div>
          </div>

          {/* Section Navigation Links with Icons */}
          <div className="flex flex-col gap-2 py-4 flex-1 justify-center">
            {NAV_ITEMS.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                    isActive
                      ? "bg-white text-[#0071E3] font-bold shadow-sm border border-black/5"
                      : "text-[#171717] hover:bg-black/5 font-semibold text-lg"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl ${
                        isActive ? "bg-blue-50 text-[#0071E3]" : "bg-black/5 text-[#6E6E73]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#0071E3]" : "text-[#86868B]"}`} />
                </Link>
              );
            })}
          </div>

          {/* Footer Quick Actions in Mobile Drawer */}
          <div className="space-y-3 pt-4 border-t border-[#E5E5E3]">
            <a
              href="/documents/CV_VinSambrathna.pdf"
              download="CV_VinSambrathna.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white bg-[#171717] hover:bg-black active:scale-95 transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
            <div className="flex justify-between items-center text-xs text-[#6E6E73] px-2 pt-1">
              <span>CamTech &bull; Phnom Penh</span>
              <a
                href="https://github.com/VinSambrathna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#171717] hover:text-[#0071E3]"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
