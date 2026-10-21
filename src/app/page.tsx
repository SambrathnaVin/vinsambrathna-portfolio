import React from "react";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { EngineeringApproach } from "@/components/sections/EngineeringApproach";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <SelectedWork />
      <EngineeringApproach />
      <Experience />
      <Skills />
      <Education />
      <About />
      <Contact />
    </main>
  );
}
