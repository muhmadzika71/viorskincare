import React from "react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="relative bg-[var(--bg)] min-h-screen">
      <Nav />
      <main className="pt-40 pb-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
            / CAREERS
          </div>
          <h1 className="font-display text-5xl font-bold text-ink mb-6">Join the VioR Team</h1>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            We're a passionate team of skincare enthusiasts, scientists, and creatives dedicated to redefining clean beauty. If you share our vision, we'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-12 text-center border border-border shadow-sm mb-12">
           <div className="w-16 h-16 bg-lavender text-coral rounded-full flex items-center justify-center mx-auto mb-6">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
           </div>
           <h2 className="font-display text-3xl font-bold text-ink mb-4">Current Openings</h2>
           <p className="text-ink-soft mb-8">
             We do not have any open roles at this exact moment, but we are always on the lookout for incredible talent.
           </p>
           <Link href="/contact?subject=Careers" className="btn-primary">
             Send Us Your Resume
           </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
