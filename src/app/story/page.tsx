import React from "react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";
import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="relative bg-[var(--bg)] min-h-screen">
      <Nav />
      <main className="pt-40 pb-24 px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
            / OUR STORY
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mb-6">Crafted To Glow</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
           <div className="w-full md:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
             <Image src="/vior_about_products_v2.png" alt="Vior Story" fill className="object-cover" />
           </div>
           <div className="w-full md:w-1/2 space-y-6">
             <h2 className="font-display text-3xl font-bold text-ink">It started with a simple belief.</h2>
             <p className="text-lg text-ink-soft leading-relaxed">
               At VioR, we believe that skincare shouldn't be complicated. Our journey began when our founders, frustrated by an industry saturated with harsh chemicals and empty promises, decided to create something different.
             </p>
             <p className="text-lg text-ink-soft leading-relaxed">
               We wanted to develop formulas that are not only clinically effective but also incredibly gentle. Our signature Antiox-Hydrate™ Molecule Technology was born out of years of research, combining the best of nature with cutting-edge science.
             </p>
           </div>
        </div>

        <div className="bg-white p-12 md:p-20 rounded-[3rem] border border-border text-center shadow-sm">
           <h3 className="font-display text-3xl font-bold text-ink mb-6">Science in every drop.</h3>
           <p className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
             Every product in our line—from our CICA Cream Pro B5 to our Hyaluronic Micellar H2O—is meticulously formulated and dermatologist tested. We source only the highest quality ingredients to ensure that when you use VioR, you're giving your skin exactly what it needs to heal, hydrate, and reveal its natural radiance.
           </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
