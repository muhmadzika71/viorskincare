"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import { Placeholder } from '../ui/Placeholder';
import { Icons as I } from '../ui/Icons';

const PRODUCTS = [
  { 
    name: 'Hyaluronic Micellar H20 Ultra', 
    note: 'Antiox-Hydrate™ · All Skin Types', 
    size: '200 ml', price: 36, 
    bg: '#ffffff', 
    imageClass: '',
    tag: 'Ultra', image: '/products/micellar-water.png' 
  },
];

function ProductCard({ name, note, size, price, bg, imageClass, tag, image }: any) {
  return (
    <article className="relative w-[270px] md:w-[300px] rounded-[28px] overflow-hidden bg-white float-card group">
      <div 
        className="aspect-[4/5] relative overflow-hidden"
        style={{ background: bg }}
      >
        {/* Soft highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none mix-blend-overlay" />
        
        {tag && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-[9px] font-mono tracking-[0.16em] uppercase shadow-sm" style={{ color: 'var(--ink)' }}>
            <span className="opacity-50 mr-1.5">•</span>{tag}
          </div>
        )}
        
        {/* Actual Image */}
        <div className="absolute inset-0 flex items-center justify-center p-6 z-0 perspective-[1000px]">
          {image ? (
            <div className={`relative w-full h-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-0 group-hover:-translate-y-2 ${imageClass}`}>
              <Image src={image} alt={name} fill className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 270px, 300px" />
            </div>
          ) : (
            <div className="w-20 h-44 bg-white/55 rounded-[14px] border border-white/70 backdrop-blur-sm shadow-md flex items-center justify-center mt-8">
              <div className="font-display text-[11px] tracking-[0.18em] uppercase text-[color:var(--ink-soft)] rotate-[-90deg]">Vior</div>
            </div>
          )}
        </div>

        {/* hover ATC */}
        <div className="atc absolute inset-x-3 bottom-3 z-10">
          <Link href={`/order?product=${encodeURIComponent(name)}`} className="w-full btn-pill bg-[color:var(--ink)] text-white rounded-full py-3 text-sm inline-flex items-center justify-center gap-2">
            <I.tag className="w-4 h-4"/> Order Inquiry
          </Link>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[18px] leading-snug">{name}</h3>
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[color:var(--ink-soft)] mt-1">{note} · {size}</div>
          </div>
          <div className="font-display text-lg">${price}</div>
        </div>
      </div>
    </article>
  );
}

export function ProductLine() {
  const railRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dx: number) => railRef.current && railRef.current.scrollBy({ left: dx, behavior: 'smooth' });

  return (
    <section id="shop" className="mt-28 md:mt-40">
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 items-end">
          <Reveal className="col-span-12 md:col-span-8">
            <span className="chip"><span className="dot"/>The Range · 06</span>
            <h2 className="font-display text-[9vw] md:text-[5vw] leading-[0.96] mt-4">
              Various products. <span className="italic">One</span> standard.
            </h2>
          </Reveal>
          <Reveal delay={1} className="col-span-12 md:col-span-4 md:text-right">
            <div className="inline-flex items-center gap-2">
              <button onClick={() => scrollBy(-380)} aria-label="Previous" className="btn-pill w-11 h-11 rounded-full border border-[color:var(--border)] bg-white hover:bg-[color:var(--bg-soft)] inline-flex items-center justify-center">
                <I.arrow className="w-4 h-4 rotate-180"/>
              </button>
              <button onClick={() => scrollBy(380)} aria-label="Next" className="btn-pill w-11 h-11 rounded-full bg-[color:var(--ink)] text-white inline-flex items-center justify-center">
                <I.arrow className="w-4 h-4"/>
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={2} className="mt-10">
        <div
          ref={railRef}
          className="no-scrollbar overflow-x-auto scroll-smooth pl-6 md:pl-10 pr-6 md:pr-10 pb-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <ul className="flex gap-5 min-w-max">
            {PRODUCTS.map((p) => (
              <li key={p.name} className="product-card" style={{ scrollSnapAlign: 'start' }}>
                <ProductCard {...p} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
