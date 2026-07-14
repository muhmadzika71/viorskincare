import React from 'react';
import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import { Placeholder } from '../ui/Placeholder';
import { Icons as I } from '../ui/Icons';

function BentoCard({ icon, title, text, tone }: any) {
  return (
    <div className="float-card rounded-3xl bg-white p-6 h-full min-h-[200px] flex flex-col justify-between">
      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ph-${tone === 'cream' ? 'cream' : tone === 'lav' ? 'lav' : tone === 'sage' ? 'sage' : 'blush'}`}>
        {icon}
      </div>
      <div className="mt-6">
        <h3 className="font-display text-2xl leading-tight">{title}</h3>
        <p className="text-[13.5px] text-[color:var(--ink-soft)] leading-relaxed mt-2">{text}</p>
      </div>
    </div>
  );
}

export function Bento() {
  const cards = [
    { icon: <I.tag className="w-5 h-5"/>,    title: 'Best Price',    text: 'Honest, transparent pricing — no markups, no middlemen.', tone: 'cream' },
    { icon: <I.shield className="w-5 h-5"/>, title: 'Guaranteed',    text: '60-night skin guarantee. Return it, no questions asked.', tone: 'lav' },
    { icon: <I.sparkle className="w-5 h-5"/>,title: 'High Quality',  text: 'Clinically-tested actives blended with cold-pressed botanicals.', tone: 'blush' },
    { icon: <I.leaf className="w-5 h-5"/>,   title: 'Eco-Friendly',  text: 'Refillable glass, paper labels, carbon-neutral delivery.', tone: 'sage' },
  ];

  return (
    <section id="ritual" className="px-6 md:px-10 mt-28 md:mt-40">
      <div className="grid grid-cols-12 gap-4 md:gap-6 items-end mb-8">
        <Reveal className="col-span-12 md:col-span-7">
          <span className="chip"><span className="dot"/>Why Vior</span>
          <h2 className="font-display text-[10vw] md:text-[5.4vw] leading-[0.96] mt-4">
            A quieter <span className="italic">kind</span> of luxury.
          </h2>
        </Reveal>
        <Reveal delay={1} className="col-span-12 md:col-span-5 text-[15px] text-[color:var(--ink-soft)] leading-relaxed pb-2">
          We started Vior Skincare to prove that effective skincare doesn’t have to shout.
          Every formula is small-batch, every ingredient earns its place — and
          everything we make is made to be used, finished, and refilled.
        </Reveal>
      </div>

      {/* Bento grid — staggered */}
      <div className="grid grid-cols-12 gap-4 md:gap-5">
        {/* Card 1 — Best Price */}
        <Reveal className="col-span-12 sm:col-span-6 lg:col-span-3" delay={1}>
          <BentoCard {...cards[0]} />
        </Reveal>

        {/* Lifestyle image — offset down */}
        <Reveal className="col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-2" delay={2}>
          <div className="float-card rounded-3xl w-full h-full min-h-[280px] lg:min-h-[460px] relative overflow-hidden bg-white">
            <Image src="/vior_new_product.webp" alt="VioR New Product" fill className="object-cover object-center" sizes="(max-width: 1024px) 50vw, 25vw" />
          </div>
        </Reveal>

        {/* Card 2 — Guaranteed */}
        <Reveal className="col-span-12 sm:col-span-6 lg:col-span-3" delay={3}>
          <BentoCard {...cards[1]} />
        </Reveal>

        {/* Product Lifestyle Image 2 */}
        <Reveal className="col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-2" delay={4}>
          <div className="float-card rounded-3xl w-full h-full min-h-[280px] lg:min-h-[460px] relative overflow-hidden bg-white group">
            <Image src="/vior_bento_lifestyle_new.webp" alt="VioR Lifestyle" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
          </div>
        </Reveal>

        {/* Card 3 — High Quality */}
        <Reveal className="col-span-12 sm:col-span-6 lg:col-span-3" delay={1}>
          <BentoCard {...cards[2]} />
        </Reveal>

        {/* Card 4 — Eco-Friendly */}
        <Reveal className="col-span-12 sm:col-span-6 lg:col-span-3" delay={2}>
          <BentoCard {...cards[3]} />
        </Reveal>
      </div>
    </section>
  );
}
