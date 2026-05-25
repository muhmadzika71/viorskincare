import React from "react";
import Link from "next/link";

export function IngredientsSection() {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto border-t border-border mt-12">
      <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-8">
        / OUR INGREDIENTS
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 bg-lavender/20 p-12 rounded-[2rem]">
        <div className="max-w-md">
          <h2 className="font-display text-3xl font-bold leading-tight text-ink mb-6">
            Effective skincare with clean, natural ingredients.
          </h2>
          <Link href="/ingredients" className="btn-primary bg-ink hover:bg-purple-btn">
            Our Ingredients
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
        
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-3 text-coral">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/></svg>
            </div>
            <span className="text-sm font-medium text-ink">Paraben Free</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-3 text-coral">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/></svg>
            </div>
            <span className="text-sm font-medium text-ink">Sulfate Free</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-3 text-coral">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/></svg>
            </div>
            <span className="text-sm font-medium text-ink">Silicone Free</span>
          </div>
        </div>
      </div>
    </section>
  );
}
