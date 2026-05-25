"use client";
import React, { useState } from "react";
import Image from "next/image";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Are your products suitable for sensitive skin?",
      a: "Yes, our products are dermatologist-tested and formulated to be gentle on all skin types, including sensitive and reactive skin. We use soothing ingredients like Centella Asiatica, Aloe, and Chamomile to calm irritation."
    },
    {
      q: "Are your products cruelty-free?",
      a: "Absolutely. VioR is proudly cruelty-free. We never test our products or ingredients on animals, and we ensure our suppliers adhere to the same strict standards."
    },
    {
      q: "How long will it take to see results?",
      a: "While individual results vary based on your unique skin profile, our clinically proven formulas deliver noticeable improvements in hydration and smoothness within the first few days. Significant improvements in radiance and even tone are typically seen after 4 weeks of consistent use."
    },
    {
      q: "Where are your products made?",
      a: "All VioR products are thoughtfully formulated and manufactured in state-of-the-art facilities using globally sourced, clean, and sustainable ingredients to ensure the highest quality and safety standards."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border mt-12 flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-2/3">
        <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
          / FAQ
        </div>
        <h2 className="font-display text-4xl font-bold text-ink mb-8">
          Everything You Need to Know
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <div 
                className="flex justify-between items-center py-4 cursor-pointer hover:text-coral transition-colors"
                onClick={() => toggleFaq(i)}
              >
                <span className="font-medium text-ink pr-8">{faq.q}</span>
                <svg 
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  className={`text-ink-soft transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-ink-soft text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full lg:w-1/3 flex justify-center items-center">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-lavender/30 flex justify-center items-center p-8">
          <div className="relative w-full h-full">
             <Image src="/vior_toner.png" alt="FAQ products" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
