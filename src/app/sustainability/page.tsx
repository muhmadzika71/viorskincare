import React from "react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";

export default function SustainabilityPage() {
  return (
    <div className="relative bg-[var(--bg)] min-h-screen">
      <Nav />
      <main className="pt-40 pb-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
            / SUSTAINABILITY
          </div>
          <h1 className="font-display text-5xl font-bold text-ink mb-6">Kind to Your Skin, Kind to the Planet</h1>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            At VioR, we believe that true beauty shouldn't cost the earth. We are committed to minimizing our environmental footprint while maximizing the efficacy of our skincare.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-lavender/30 rounded-[3rem] p-12 md:p-16 border border-border">
            <h2 className="font-display text-3xl font-bold text-ink mb-4">Eco-Conscious Packaging</h2>
            <p className="text-lg text-ink-soft leading-relaxed mb-6">
              We are actively transitioning all our packaging to 100% recyclable materials. Our cosmetic tubes and bottles are designed with minimal plastic, prioritizing easily recyclable glass and post-consumer recycled (PCR) plastics where possible. We've eliminated unnecessary outer packaging to reduce waste.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-border shadow-sm">
            <h2 className="font-display text-3xl font-bold text-ink mb-4">Clean & Ethical Sourcing</h2>
            <p className="text-lg text-ink-soft leading-relaxed mb-6">
              We source our ingredients from suppliers who share our commitment to environmental responsibility and ethical labor practices. Whether it's our Thermal Spring Water or our sustainably harvested Centella Asiatica, we ensure every element is obtained responsibly without harming local ecosystems.
            </p>
          </div>

          <div className="bg-[#f0e3db] rounded-[3rem] p-12 md:p-16 border border-border text-center">
            <h2 className="font-display text-3xl font-bold text-ink mb-4">100% Cruelty Free</h2>
            <p className="text-lg text-ink-soft leading-relaxed mb-0">
              VioR has never, and will never, test on animals. We are completely cruelty-free and demand the same standard from every partner in our supply chain. Skincare should be a source of care, not harm.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
