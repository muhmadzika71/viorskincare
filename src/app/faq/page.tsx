import React from "react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";
import { FaqSection } from "../../components/sections/FaqSection";

export default function FaqPage() {
  return (
    <div className="relative bg-[var(--bg)] min-h-screen">
      <Nav />
      <main className="pt-24 pb-24">
        {/* We use the FaqSection component since it already contains exactly what we need */}
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
