import React from "react";
import Image from "next/image";
import Link from "next/link";

export function TreatmentSection() {
  const treatments = [
    {
      id: "acne",
      title: "Acne Care",
      desc: "Clear and calm your skin.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
      )
    },
    {
      id: "anti-aging",
      title: "Anti-Aging",
      desc: "Reduce fine lines and wrinkles.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      )
    },
    {
      id: "brightening",
      title: "Brightening",
      desc: "Boost radiance and even tone.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      )
    },
    {
      id: "hydration",
      title: "Hydration",
      desc: "Deep moisture for all day glow.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
      )
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border mt-12 flex flex-col lg:flex-row gap-16">
      {/* Left */}
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
          / FIND YOUR SKIN
        </div>
        <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight text-ink mb-8 max-w-md">
          Find Your Treatment that's right for you.
        </h2>
        
        <Link href="/quiz" className="btn-primary mb-12">
          Discovery Quiz
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {treatments.map((t) => (
            <Link href={`/treatment/${t.id}`} key={t.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow group">
               <div className="w-12 h-12 bg-lavender/50 rounded-full flex items-center justify-center text-purple-btn shrink-0 group-hover:bg-lavender transition-colors">
                  {t.icon}
               </div>
               <div>
                  <h4 className="font-bold text-ink text-sm mb-1">{t.title}</h4>
                  <p className="text-xs text-ink-soft leading-tight">{t.desc}</p>
               </div>
               <div className="ml-auto text-ink-soft">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
               </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/2 relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl">
        <Image 
          src="/vior_treatment_model.png" 
          alt="Applying Treatment" 
          fill 
          className="object-cover"
        />
      </div>
    </section>
  );
}
