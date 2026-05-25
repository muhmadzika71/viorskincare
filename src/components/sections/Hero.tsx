import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-8 flex flex-col lg:flex-row items-center max-w-7xl mx-auto gap-12">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-coral text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
          Clean. Effective. Radiant.
        </div>
        
        <h1 className="font-display text-6xl lg:text-7xl font-bold leading-tight text-ink mb-6">
          Healthy Skin<br/>Starts Here.
        </h1>
        
        <p className="text-lg text-ink-soft mb-8 max-w-md">
          Science-backed skincare solutions designed to reveal your natural glow and boost your confidence.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-10">
          <Link href="/shop" className="btn-primary">
            Shop Bestsellers
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link href="/quiz" className="btn-secondary">
            Take Skin Quiz
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
               <img src="https://i.pravatar.cc/100?img=1" alt="Customer" className="w-full h-full object-cover"/>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
               <img src="https://i.pravatar.cc/100?img=2" alt="Customer" className="w-full h-full object-cover"/>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
               <img src="https://i.pravatar.cc/100?img=3" alt="Customer" className="w-full h-full object-cover"/>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
               <img src="https://i.pravatar.cc/100?img=4" alt="Customer" className="w-full h-full object-cover"/>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-ink">Trusted by 25K+ customers</div>
            <div className="flex items-center gap-1 text-xs text-ink-soft mt-0.5">
              <div className="flex text-coral">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <span className="font-bold ml-1">4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image area */}
      <div className="w-full lg:w-1/2 relative min-h-[600px] flex justify-center items-center">
        {/* Main Model Image */}
        <div className="relative w-[450px] h-[600px] rounded-t-full overflow-hidden shadow-2xl">
          <Image 
            src="/vior_hero_model.png"
            alt="Glowing Skin Model"
            fill
            className="object-cover"
          />
        </div>

        {/* Floating Results Card */}
        <div className="absolute top-1/3 -right-4 lg:-right-12 glass p-6 rounded-2xl w-64 shadow-xl z-20 bg-white/80 border border-white/50 backdrop-blur-md">
          <h3 className="font-display font-semibold text-lg mb-4 text-ink">Clinically Proven<br/>Results</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-ink-soft">Hydration</span>
              <span className="font-bold text-ink">+92%</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-ink-soft">Smoothness</span>
              <span className="font-bold text-ink">+88%</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-ink-soft">Radiance</span>
              <span className="font-bold text-ink">+85%</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-ink-soft">Even Tone</span>
              <span className="font-bold text-ink">+80%</span>
            </div>
          </div>
          <p className="text-[10px] text-ink-soft italic mt-2">* Based on 4 weeks of use.</p>
        </div>

        {/* Products overlay */}
        <div className="absolute -bottom-10 left-10 flex gap-4 z-30">
          <div className="w-24 h-40 relative rounded-xl overflow-hidden shadow-lg border border-white">
            <Image src="/vior_micellar_water.png" alt="Micellar Water" fill className="object-cover" />
          </div>
          <div className="w-20 h-32 relative rounded-xl overflow-hidden shadow-lg border border-white mt-8">
            <Image src="/vior_toner.png" alt="Toner" fill className="object-cover" />
          </div>
          <div className="w-20 h-32 relative rounded-xl overflow-hidden shadow-lg border border-white">
            <Image src="/vior_cica_cream.png" alt="Cica Cream" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
