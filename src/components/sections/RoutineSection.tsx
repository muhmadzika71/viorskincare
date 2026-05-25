import React from "react";
import Image from "next/image";
import Link from "next/link";

export function RoutineSection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="bg-lavender/30 rounded-[2.5rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 z-10">
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight text-ink mb-4">
            Build your perfect<br/>skincare routine
          </h2>
          <p className="text-lg text-ink-soft mb-8 max-w-md">
            Personalized care for your unique skin needs.
          </p>
          
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-ink text-white flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <span className="font-medium text-ink">Personalized for you</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-ink text-white flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <span className="font-medium text-ink">Dermatologist-approved</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-ink text-white flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <span className="font-medium text-ink">Backed by science</span>
            </li>
          </ul>

          <Link href="/quiz" className="btn-primary">
            Take Skin Quiz
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* Image / Graphic */}
        <div className="w-full lg:w-1/2 relative h-[400px] flex justify-center items-center">
           {/* Abstract backdrop for products */}
           <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl opacity-50 transform -translate-y-12"></div>
           
           <div className="relative w-full h-full flex items-end justify-center gap-4 z-10 pb-4">
              <div className="w-24 h-40 relative rounded-xl overflow-hidden shadow-2xl transform translate-y-4">
                <Image src="/vior_micellar_water.png" alt="Product" fill className="object-cover" />
              </div>
              <div className="w-28 h-48 relative rounded-xl overflow-hidden shadow-2xl z-20">
                <Image src="/vior_moisturizer.png" alt="Product" fill className="object-cover" />
              </div>
              <div className="w-24 h-32 relative rounded-xl overflow-hidden shadow-2xl transform translate-y-8">
                <Image src="/vior_cica_cream.png" alt="Product" fill className="object-cover" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
