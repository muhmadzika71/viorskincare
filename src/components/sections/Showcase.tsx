"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Reveal } from '../ui/Reveal';
import { Icons as I } from '../ui/Icons';

export function Showcase() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('200 ml');
  return (
    <section id="featured" className="relative w-full mt-32 md:mt-44 overflow-hidden" style={{ background: 'var(--plum-dark)' }}>
      {/* Massive faded backdrop word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="font-display leading-none tracking-tighter" style={{ fontSize: '34vw', color: 'rgba(255,255,255,0.05)' }}>
          vior
        </div>
      </div>

      {/* Coral diagonal "BESTSELLER" band */}
      <div className="absolute top-16 -left-20 w-[460px] h-[64px] rotate-[-6deg] pointer-events-none flex items-center justify-center gap-10 font-mono text-[11px] tracking-[0.3em] uppercase text-white" style={{ background: 'var(--coral)' }}>
        <span>· Bestseller</span><span>· No. 02</span><span>· Bestseller</span>
      </div>

      <div className="relative px-6 md:px-12 lg:px-16 py-20 md:py-28 grid grid-cols-12 gap-8 items-center text-white">
        {/* Left — description */}
        <div className="col-span-12 md:col-span-3 order-2 md:order-1">
          <Reveal>
            <span className="chip" style={{ background: 'rgba(255,255,255,0.10)', borderColor: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.85)' }}>
              <span className="dot" style={{ background: 'var(--coral)', opacity: 1 }}/> Featured
            </span>
            <h3 className="font-display text-4xl md:text-5xl leading-tight mt-4">
              Cleaning <span className="italic" style={{ color: 'var(--coral)' }}>Water</span>
            </h3>
            <p className="text-[14px] text-white/70 leading-relaxed mt-4">
              A gentle micellar water blending Aloe Vera, Green Tea extract 
              and Panthenol to effortlessly lift impurities and calm skin — 
              leaving it refreshed and hydrated.
            </p>

            <ul className="mt-6 space-y-2.5 text-[13.5px] text-white/85">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full inline-flex items-center justify-center" style={{ background: 'var(--green)' }}>
                  <I.sparkle className="w-3.5 h-3.5"/>
                </span>
                Brightens in 14 days
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full inline-flex items-center justify-center" style={{ background: 'var(--green)' }}>
                  <I.leaf className="w-3.5 h-3.5"/>
                </span>
                100% vegan, 92% organic
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full inline-flex items-center justify-center" style={{ background: 'var(--green)' }}>
                  <I.shield className="w-3.5 h-3.5"/>
                </span>
                Dermatologist-tested
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Middle — bottle */}
        <div className="col-span-12 md:col-span-6 order-1 md:order-2">
          <Reveal delay={1} className="relative">
            <div className="relative aspect-[5/6] w-full max-w-[560px] mx-auto flex items-center justify-center">
              {/* radial glow */}
              <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(240,101,96,0.35), transparent 70%)' }}/>

              {/* Real product image */}
              <div className="relative">
                <img src="/products/cleaning-water-2.webp" alt="Cleaning Water" className="w-48 md:w-60 object-contain drop-shadow-2xl z-10 relative" />
                {/* shadow */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-44 h-3 rounded-full bg-black/40 blur-md"/>
              </div>

              {/* floating chip annotations */}
              <div className="absolute top-6 left-2 md:left-6 rounded-2xl px-3 py-2 text-[11px]" style={{ background: '#fff', color: 'var(--ink)' }}>
                <div className="font-mono tracking-[0.16em] uppercase text-[color:var(--ink-soft)] text-[9px]">Active</div>
                <div className="font-display">Micellar</div>
              </div>
              <div className="absolute bottom-12 right-2 md:right-6 rounded-2xl px-3 py-2 text-[11px]" style={{ background: 'var(--coral)', color: '#fff' }}>
                <div className="font-mono tracking-[0.16em] uppercase opacity-80 text-[9px]">Botanical</div>
                <div className="font-display">Aloe Vera</div>
              </div>
              {/* green badge */}
              <div className="absolute top-10 right-4 md:right-8 w-16 h-16 rounded-full flex flex-col items-center justify-center text-white font-display" style={{ background: 'var(--green)' }}>
                <div className="text-[10px] font-mono tracking-[0.18em] uppercase opacity-80">Matte</div>
                <div className="text-sm leading-none mt-0.5">Finish</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — actions */}
        <div className="col-span-12 md:col-span-3 order-3">
          <Reveal delay={2} className="md:text-right">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/55">From</div>
            <div className="font-display text-5xl md:text-6xl mt-1 flex md:justify-end items-baseline gap-1">
              <span>$32</span>
              <span className="text-base font-mono tracking-[0.18em] uppercase" style={{ color: 'var(--coral)' }}>/usd</span>
            </div>

            <div className="mt-6">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/55 mb-2">Size</div>
              <div className="inline-flex flex-wrap gap-2 md:justify-end">
                {['100 ml', '200 ml', '400 ml'].map(s => (
                  <button key={s} onClick={() => setSize(s)}
                    className="px-3 py-1.5 rounded-full text-[12px] border transition"
                    style={size === s
                      ? { background: 'var(--coral)', color: '#fff', borderColor: 'var(--coral)' }
                      : { background: 'rgba(255,255,255,0.06)', color: '#fff', borderColor: 'rgba(255,255,255,0.18)' }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/55 mb-2">Quantity</div>
              <div className="inline-flex items-center rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)' }}>
                <button onClick={() => setQty(q => Math.max(1, q-1))} className="px-3 py-2 text-white hover:bg-white/10">−</button>
                <span className="px-4 text-sm tabular-nums text-white">{qty}</span>
                <button onClick={() => setQty(q => q+1)} className="px-3 py-2 text-white hover:bg-white/10">+</button>
              </div>
            </div>

            <div className="mt-8 flex md:flex-col md:items-end gap-3">
              <Link href="/order?product=Cleaning+Water" className="btn-pill text-white rounded-full px-6 py-3 text-sm inline-flex items-center gap-2" style={{ background: 'var(--coral)' }}>
                <I.tag className="w-4 h-4"/> Order Inquiry
              </Link>
              <Link href="/order" className="btn-pill rounded-full px-6 py-3 text-sm inline-flex items-center gap-2 text-white border" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                View Full Form <I.arrow className="w-4 h-4"/>
              </Link>
            </div>

            <div className="mt-6 font-mono text-[10px] tracking-[0.18em] uppercase text-white/55">
              Free shipping · over $60 · 60-night returns
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
