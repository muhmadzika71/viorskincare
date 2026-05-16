"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { Reveal } from '../ui/Reveal';
import { Placeholder } from '../ui/Placeholder';
import { Icons as I } from '../ui/Icons';

const PRODUCTS = [
  { name: 'Aura Glow Serum',   note: 'Niacinamide · Squalane',  size: '30 ml', price: 48, tone: 'blush', tag: 'Bestseller' },
  { name: 'Velvet Cloud Cream',note: 'Ceramide · Oat',          size: '50 ml', price: 62, tone: 'cream', tag: 'New' },
  { name: 'Petal Toning Mist', note: 'Damask Rose · PHA',       size: '100 ml',price: 34, tone: 'lav',   tag: '' },
  { name: 'Quiet Cleansing Balm', note: 'Camellia · Jojoba',    size: '80 ml', price: 38, tone: 'sage',  tag: '' },
  { name: 'Lumière Eye Oil',   note: 'Bakuchiol · Sea Fennel',  size: '15 ml', price: 56, tone: 'blush', tag: 'Limited' },
  { name: 'Soft Sun Veil SPF40', note: 'Mineral · Hyaluronic',  size: '50 ml', price: 44, tone: 'cream', tag: '' },
];

function ProductCard({ name, note, size, price, tone, tag }: any) {
  return (
    <article className="relative w-[270px] md:w-[300px] rounded-[28px] overflow-hidden bg-white float-card">
      <Placeholder
        tone={tone}
        label="Product"
        sub={name}
        className="aspect-[4/5]"
      >
        {tag && (
          <div className="absolute top-3 left-3 chip bg-white/85 text-[color:var(--ink)]">
            <span className="dot"/> {tag}
          </div>
        )}
        {/* faux bottle silhouette */}
        <div className="absolute inset-0 flex items-end justify-center pb-10 pointer-events-none">
          <div className="w-20 h-44 bg-white/55 rounded-[14px] border border-white/70 backdrop-blur-sm shadow-md flex items-center justify-center">
            <div className="font-display text-[11px] tracking-[0.18em] uppercase text-[color:var(--ink-soft)] rotate-[-90deg]">Vior</div>
          </div>
        </div>
        {/* hover ATC */}
        <div className="atc absolute inset-x-3 bottom-3">
          <Link href={`/order?product=${encodeURIComponent(name)}`} className="w-full btn-pill bg-[color:var(--ink)] text-white rounded-full py-3 text-sm inline-flex items-center justify-center gap-2">
            <I.tag className="w-4 h-4"/> Order Inquiry
          </Link>
        </div>
      </Placeholder>

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
            {PRODUCTS.map((p, i) => (
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
