"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Reveal } from '../ui/Reveal';
import { Placeholder } from '../ui/Placeholder';
import { Icons as I } from '../ui/Icons';

const REVIEWS = [
  { name: 'Amélie R.',  city: 'Paris',   rating: 5, text: 'I bought the Aura Serum on a whim. Six weeks later three friends have asked what I’ve done differently. It’s this — just this.', dur: '0:42', tone: 'blush' },
  { name: 'Yui T.',     city: 'Kyoto',   rating: 5, text: 'The Velvet Cloud cream feels like cashmere on the face. My skin barrier hasn’t felt this calm in years.', dur: '1:08', tone: 'lav' },
  { name: 'Noor K.',    city: 'Dubai',   rating: 5, text: 'Beautiful packaging, but more importantly — it actually works. Texture has refined, redness gone.', dur: '0:55', tone: 'cream' },
  { name: 'Sofía M.',   city: 'Madrid',  rating: 5, text: 'I love that everything is refillable. Same routine, a fraction of the waste.', dur: '0:33', tone: 'sage' },
];

function ReviewCard({ name, city, rating, text, dur, tone, active }: any) {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const total = useMemo(() => {
    const [m, s] = dur.split(':').map(Number);
    return m * 60 + s;
  }, [dur]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setT(prev => {
        if (prev >= total) { setPlaying(false); return 0; }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [playing, total]);

  const pct = (t / total) * 100;
  const mm = String(Math.floor(t / 60)).padStart(1, '0');
  const ss = String(t % 60).padStart(2, '0');

  // generate stable-ish bar heights
  const bars = useMemo(() => Array.from({length: 48}, (_, i) =>
    8 + Math.round(Math.abs(Math.sin(i * 1.3 + name.charCodeAt(0)) * 18))
  ), [name]);

  return (
    <div className={`rounded-[28px] bg-white float-card p-6 md:p-8 grid grid-cols-12 gap-5 ${active ? '' : 'cursor-pointer'}`}>
      {/* avatar */}
      <div className="col-span-12 sm:col-span-3">
        <Placeholder tone={tone} label="Portrait" sub={name} className="rounded-2xl aspect-square w-full"/>
      </div>

      {/* content */}
      <div className="col-span-12 sm:col-span-9 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-display text-xl leading-tight">{name}</div>
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--ink-soft)] mt-1">Verified · {city}</div>
            </div>
            <div className="flex items-center gap-0.5 text-[color:var(--blush-dk)]">
              {Array.from({length: rating}).map((_, i) => <I.star key={i} className="star"/>)}
            </div>
          </div>

          <p className="font-display text-[20px] md:text-[22px] leading-snug mt-4 text-pretty">
            “{text}”
          </p>
        </div>

        {/* audio UI */}
        <div className="mt-6 flex items-center gap-4 bg-[color:var(--bg)] rounded-full pl-2 pr-5 py-2">
          <button
            onClick={(e) => { e.stopPropagation(); setPlaying(p => !p); }}
            className="w-10 h-10 rounded-full bg-[color:var(--ink)] text-white flex items-center justify-center"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <I.pause className="w-4 h-4"/> : <I.play className="w-4 h-4 translate-x-[1px]"/>}
          </button>

          {/* waveform */}
          <div className="flex-1 flex items-center gap-[2px] h-8 text-[color:var(--ink)]">
            {bars.map((h, i) => {
              const filled = (i / bars.length) * 100 <= pct;
              return (
                <span
                  key={i}
                  className="bar"
                  style={{
                    height: `${h}px`,
                    opacity: filled ? 0.95 : 0.22,
                  }}
                />
              );
            })}
          </div>

          <div className="font-mono text-[11px] tabular-nums text-[color:var(--ink-soft)]">
            {mm}:{ss} <span className="opacity-50">/ {dur}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  return (
    <section id="reviews" className="px-6 md:px-10 mt-32 md:mt-44">
      <div className="grid grid-cols-12 gap-6 items-start">
        <Reveal className="col-span-12 md:col-span-5">
          <span className="chip"><span className="dot"/>Letters · Reviews</span>
          <h2 className="font-display text-[10vw] md:text-[5.2vw] leading-[0.96] mt-4">
            Heard in <span className="italic">whispers,</span> not slogans.
          </h2>
          <p className="text-[15px] text-[color:var(--ink-soft)] leading-relaxed mt-5 max-w-md">
            12,000+ five-star reviews from a community we deeply, deeply love. Below — a few voice notes our readers left after their first 30 days.
          </p>

          {/* Rating summary */}
          <div className="mt-8 inline-flex items-center gap-4 glass rounded-2xl px-5 py-4">
            <div>
              <div className="font-display text-3xl leading-none">4.9</div>
              <div className="flex items-center gap-0.5 mt-1 text-[color:var(--blush-dk)]">
                {[0,1,2,3,4].map(i => <I.star key={i} className="star"/>)}
              </div>
            </div>
            <div className="h-10 w-px bg-[color:var(--border)]"/>
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] leading-relaxed">
              12,438<br/>verified reviews
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {REVIEWS.map((r, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Review ${i+1}`}
                className={`h-1.5 rounded-full transition-all ${active === i ? 'w-8 bg-[color:var(--ink)]' : 'w-3 bg-[color:var(--ink)]/15'}`}/>
            ))}
          </div>
        </Reveal>

        {/* Stacked cards */}
        <div className="col-span-12 md:col-span-7 relative">
          <Reveal className="relative h-[460px] md:h-[520px]">
            {REVIEWS.map((r, i) => {
              const offset = (i - active + REVIEWS.length) % REVIEWS.length;
              const isTop  = offset === 0;
              const z     = REVIEWS.length - offset;
              const translateY = offset * 22;
              const translateX = offset * 14;
              const scale = 1 - offset * 0.04;
              const opacity = offset > 2 ? 0 : 1 - offset * 0.15;
              return (
                <div
                  key={r.name}
                  className="absolute inset-x-0 top-0 transition-all duration-500 ease-out"
                  style={{
                    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                    zIndex: z,
                    opacity,
                    pointerEvents: isTop ? 'auto' : 'none',
                  }}
                  onClick={() => setActive((active + 1) % REVIEWS.length)}
                >
                  <ReviewCard {...r} active={isTop}/>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
