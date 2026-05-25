import React from "react";
import Link from "next/link";

export function Nav() {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center absolute top-0 z-50">
      <Link href="/">
        <div className="flex flex-col">
          <span className="text-3xl font-display text-coral font-bold tracking-wider uppercase">VIOR</span>
          <span className="text-xs text-ink-soft italic font-display tracking-widest uppercase">Crafted To Glow</span>
        </div>
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-ink-soft">
        <Link href="/" className="hover:text-ink transition-colors">Home</Link>
        <Link href="/shop" className="hover:text-ink transition-colors flex items-center gap-1">
          Shop
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <Link href="/story" className="hover:text-ink transition-colors">Our Story</Link>
        <Link href="/ingredients" className="hover:text-ink transition-colors">Ingredients</Link>
        <Link href="/quiz" className="hover:text-ink transition-colors">Quiz</Link>
        <Link href="/contact" className="hover:text-ink transition-colors">Contact</Link>
      </div>

      <Link href="/shop" className="btn-primary">
        Shop Now 
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </nav>
  );
}
