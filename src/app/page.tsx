import React from "react";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { AboutSection } from "../components/sections/AboutSection";
import { FeaturedCollection } from "../components/sections/FeaturedCollection";
import { RoutineSection } from "../components/sections/RoutineSection";
import { TreatmentSection } from "../components/sections/TreatmentSection";
import { IngredientsSection } from "../components/sections/IngredientsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FaqSection } from "../components/sections/FaqSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[var(--bg)] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <AboutSection />
        <FeaturedCollection />
        <RoutineSection />
        <TreatmentSection />

        <IngredientsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
