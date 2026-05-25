import React from "react";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-[500px] h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
          <Image 
            src="/vior_about_products_v2.png" 
            alt="VioR Products" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
            / ABOUT US
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight text-ink mb-6">
            Skincare that loves your skin and the planet.
          </h2>
          <p className="text-lg text-ink-soft mb-8">
            We create clean, effective, and sustainable skincare that delivers visible results — without compromise.
          </p>
          <Link href="/story" className="btn-secondary bg-lavender/30 border-none">
            Our Story 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      {/* Features Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border border-border rounded-3xl p-8 bg-white shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center mb-4 text-purple-btn">
            {/* Simple Leaf Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
          </div>
          <h4 className="font-bold text-ink mb-1">Clean Ingredients</h4>
          <p className="text-sm text-ink-soft">Safe, science & dermatologist tested.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center mb-4 text-purple-btn">
            {/* Bunny Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 16a3 3 0 0 1 2.24 5"/><path d="M18 12h.01"/><path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/><path d="M20 8.54V4a2 2 0 1 0-4 0v3"/><path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"/></svg>
          </div>
          <h4 className="font-bold text-ink mb-1">Cruelty Free</h4>
          <p className="text-sm text-ink-soft">Kind to animals, always.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center mb-4 text-purple-btn">
            {/* Eco Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          </div>
          <h4 className="font-bold text-ink mb-1">Sustainable</h4>
          <p className="text-sm text-ink-soft">Eco-conscious packaging.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center mb-4 text-purple-btn">
            {/* Drop Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </div>
          <h4 className="font-bold text-ink mb-1">For All Skin Types</h4>
          <p className="text-sm text-ink-soft">Gentle care for every skin.</p>
        </div>
      </div>
    </section>
  );
}
