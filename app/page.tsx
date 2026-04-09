"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { MotivationSection } from "@/components/motivation-section";
import { ConceptNoteSection } from "@/components/concept-note-section";
import { CVSection } from "@/components/cv-section";
import { ImpactSection } from "@/components/impact-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <HeroSection />
      <MotivationSection />
      <ConceptNoteSection />
      <CVSection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
