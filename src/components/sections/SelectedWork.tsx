import React from "react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function SelectedWork() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 md:py-28">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
            Verified Projects &amp; Architectures
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171717]">
            Crafted with rigor. Rooted in evidence.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            Every project listed below is backed by public source repositories, explicit technical trade-offs, and verified authorship. No fabricated users, fake production claims, or inflated metrics.
          </p>
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-10">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} priority={idx === 0} />
          ))}
        </div>

        {/* Additional Verified Projects (Veriqo) */}
        {otherProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E5E5E3]">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#171717] tracking-tight">
                Additional Verified Engineering Work
              </h3>
              <p className="text-sm text-[#6E6E73] mt-1">
                Full-stack mobile repositories and schemas verified on GitHub.
              </p>
            </div>
            <div className="space-y-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
