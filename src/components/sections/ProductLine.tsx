"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import { Placeholder } from '../ui/Placeholder';
import { Icons as I } from '../ui/Icons';

const PRODUCTS = [
  { 
    name: 'VioR Cica Cream', 
    note: 'PRO B5 Intensive · All Skin Types', 
    size: '60 ml', price: 42, 
    bg: 'var(--plum-soft)', 
    imageClass: '',
    tag: 'Repair', image: '/vior_cica_cream.png' 
  },
  { 
    name: 'Hyaluronic Micellar H20 Ultra', 
    note: 'Antiox-Hydrate™ · All Skin Types', 
    size: '200 ml', price: 36, 
    bg: 'var(--green-soft)', 
    imageClass: '',
    tag: 'Ultra', image: '/vior_micellar_water.png' 
  },
  { 
    name: 'VioR Rich Moisture Cream', 
    note: 'Deep Hydration · Dry Skin', 
    description: 'A high-performance, lipid-rich cream engineered with the Antiox-Hydrate™ Molecule\nOur *Barrier Cream* is a rich, velvety moisturizer that acts like a "security guard" for your skin.\nWhile life, weather, and pollution try to strip your moisture away, this cream locks it back in.\nit’s a daily care that repairs your skin barrier from the inside out,\nleaving your Skin feeling soft, bouncy, and perfectly hydrated—never greasy.',
    size: '50 ml', price: 48, 
    bg: '#ffffff', 
    imageClass: '',
    tag: 'Hydrate', image: '/vior_rich_moisture_cream_new.webp' 
  },
  { 
    name: 'VioR Daily Sunscreen', 
    note: 'SPF 60+ · Broad Spectrum', 
    description: 'Revive Your Skin With SPF 60+ SUNSCREEN.\nUVA/UVB Invisible Protection.\nInvisible Shield Technology: A completely light finish leaves zero weight on any skin tone.\nOxidative Stress Protection: Neutralizes environmental pollutants.\nHigh Water-Resistance for the gym, the beach, and everywhere in between.\nHelps reduce dark spots, and stay radiant.\nVelvet Matte Finish: Oil-free and mattifying for a clean, shine-free look that lasts all day.',
    size: '50 ml', price: 38, 
    bg: 'var(--bg-soft)', 
    imageClass: '',
    tag: 'Protect', image: '/vior_sunscreen_new.webp' 
  },
  { 
    name: 'VioR Hydrating Toner', 
    note: 'Rosewater & Aloe · Sensitive Skin', 
    size: '150 ml', price: 32, 
    bg: 'var(--lavender)', 
    imageClass: '',
    tag: 'Tone', image: '/vior_toner.png' 
  }
];

function ProductCard({ name, note, description, size, price, bg, imageClass, tag, image }: any) {
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
          <Link href={`/contact?product=${encodeURIComponent(name)}`} className="w-full btn-pill bg-[color:var(--ink)] text-white rounded-full py-3 text-sm inline-flex items-center justify-center gap-2">
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
        {description && (
          <div className="mt-3 text-[11px] leading-relaxed text-[color:var(--ink-soft)] whitespace-pre-line">
            {description}
          </div>
        )}
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
