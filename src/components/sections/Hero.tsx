import React from 'react';
import Link from 'next/link';
import { Reveal } from '../ui/Reveal';
import { Placeholder } from '../ui/Placeholder';
import { Icons as I } from '../ui/Icons';

export function Hero() {
  return (
    <section className="relative w-full mt-5">
      {/* Full-bleed plum hero panel */}
      <div className="relative w-full overflow-hidden" style={{ background: 'var(--ink)' }}>
        {/* Coral diagonal accent band */}
        <div className="absolute top-10 -right-20 w-[520px] h-[110px] rotate-[-8deg] pointer-events-none" style={{ background: 'var(--coral)' }}>
          <div className="h-full flex items-center justify-center gap-12 font-mono text-[11px] tracking-[0.3em] uppercase text-white">
            <span>· New In</span><span>· Free Refills</span><span>· €60+ Ship Free</span><span>· New In</span>
          </div>
        </div>

        {/* Faded display word */}
        <div className="absolute inset-x-0 top-[14%] flex justify-center pointer-events-none select-none">
          <div className="font-display leading-none tracking-tighter" style={{ fontSize: '28vw', color: 'rgba(255,255,255,0.05)' }}>vior</div>
        </div>

        <div className="relative grid grid-cols-12 gap-0 min-h-[88vh]">
          {/* Left content */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-between px-6 md:px-12 lg:px-16 py-14 md:py-20 text-white">
            <div>
              <Reveal>
                <span className="chip" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}>
                  <span className="dot" style={{ background: 'var(--coral)', opacity: 1 }}/>
                  Autumn Edit ’26 · Bestseller
                </span>
              </Reveal>

              <Reveal delay={1} className="mt-10">
                <h1 className="font-display text-[16vw] md:text-[8.5vw] leading-[0.92] tracking-tight">
                  Enhance<br/>
                  <span className="italic font-light opacity-90">your</span> <span style={{ color: 'var(--coral)' }}>Beauty.</span>
                </h1>
              </Reveal>

              <Reveal delay={2} className="mt-8 max-w-md text-[15px] leading-relaxed text-white/75">
                A quiet ritual of botanically-rich serums, balms and waters —
                formulated in small batches to leave skin luminous, calm and
                unmistakably yours.
              </Reveal>

              <Reveal delay={3} className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/order" className="btn-pill text-white pl-6 pr-2 py-2 rounded-full inline-flex items-center gap-3" style={{ background: 'var(--coral)' }}>
                  <span className="text-sm font-medium">Order Inquiries</span>
                  <span className="bg-white/20 rounded-full p-2"><I.arrow className="w-4 h-4"/></span>
                </Link>
                <Link href="/#ritual" className="text-sm text-white/85 inline-flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full border border-white/30 inline-flex items-center justify-center">
                    <I.play className="w-3 h-3 translate-x-[1px]"/>
                  </span>
                  Watch the ritual · 2:14
                </Link>
              </Reveal>
            </div>

            {/* Tiny stats row */}
            <Reveal delay={4} className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="font-display text-3xl">12k+</div>
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/55 mt-1">5★ Reviews</div>
              </div>
              <div>
                <div className="font-display text-3xl">98<span style={{ color: 'var(--coral)' }}>%</span></div>
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/55 mt-1">Natural Origin</div>
              </div>
              <div>
                <div className="font-display text-3xl flex items-baseline gap-1">0
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: 'var(--green)' }}>cruelty</span>
                </div>
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/55 mt-1">Vegan Certified</div>
              </div>
            </Reveal>
          </div>

          {/* Right hero image — full-bleed to edges */}
          <div className="col-span-12 md:col-span-6 relative min-h-[480px] md:min-h-[88vh]">
            <Reveal className="absolute inset-0">
              <Placeholder
                tone="plum"
                label="Hero photograph"
                sub="woman applying serum, soft morning light"
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 pointer-events-none"/>

                {/* floating tag pill */}
                <div className="absolute top-6 left-6 chip" style={{ background: 'rgba(255,255,255,0.92)', color: 'var(--ink)', borderColor: 'transparent' }}>
                  <span className="dot" style={{ background: 'var(--coral)', opacity: 1 }}/> Bestseller · Aura Serum
                </div>

                {/* floating glass card */}
                <div className="absolute bottom-6 right-6 rounded-2xl p-4 w-[240px]" style={{ background: '#fff', boxShadow: '0 18px 40px -16px rgba(74,35,90,0.45)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--plum-soft)', color: 'var(--ink)' }}>
                      <I.sparkle className="w-4 h-4"/>
                    </div>
                    <div>
                      <div className="text-[13px] font-medium leading-tight" style={{ color: 'var(--ink)' }}>Aura Glow Serum</div>
                      <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[color:var(--ink-soft)]">2% Niacinamide · 30 ml</div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="font-display text-lg" style={{ color: 'var(--ink)' }}>$48</div>
                    <Link href="/order" className="btn-pill text-xs text-white rounded-full px-3 py-1.5" style={{ background: 'var(--coral)' }}>Order</Link>
                  </div>
                </div>

                {/* corner ornament — SPF-style badge in clinical green */}
                <div className="absolute top-6 right-6 rounded-full w-14 h-14 flex flex-col items-center justify-center text-white" style={{ background: 'var(--green)' }}>
                  <div className="font-display text-lg leading-none">SPF</div>
                  <div className="font-display text-xl leading-none">40</div>
                </div>
              </Placeholder>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Press strip — full bleed */}
      <Reveal className="w-full px-6 md:px-12 lg:px-16 py-6 flex flex-wrap items-center justify-between gap-y-4 gap-x-10" style={{ background: 'var(--surface)' }}>
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--ink-soft)]">As Featured In</span>
        <span className="font-display text-xl" style={{ color: 'var(--ink)' }}>Vogue</span>
        <span className="font-display italic text-xl" style={{ color: 'var(--ink)' }}>Cereal</span>
        <span className="font-display text-xl tracking-widest" style={{ color: 'var(--ink)' }}>ELLE</span>
        <span className="font-display text-xl" style={{ color: 'var(--ink)' }}>Kinfolk</span>
        <span className="font-display text-xl" style={{ color: 'var(--ink)' }}>The Cut</span>
        <span className="font-display text-xl" style={{ color: 'var(--ink)' }}>Goop</span>
      </Reveal>
    </section>
  );
}
