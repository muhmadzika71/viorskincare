"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export function Footer() {
  const cols = [
    { title: 'Shop',     items: [{l:'All Products',h:'/shop'}, {l:'Skincare Quiz',h:'/quiz'}] },
    { title: 'Company',  items: [{l:'Our Story',h:'/story'}, {l:'Ingredients',h:'/ingredients'}, {l:'Sustainability',h:'/sustainability'}, {l:'Careers',h:'/careers'}] },
    { title: 'Support',  items: [{l:'Contact',h:'/contact'}, {l:'Shipping',h:'/shipping'}, {l:'Returns',h:'/returns'}, {l:'FAQ',h:'/faq'}] },
  ];

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setMessage("Thank you! You've successfully subscribed.");
    setEmail("");
    
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <footer className="mt-32 md:mt-44 pt-16 border-t border-[color:var(--border)] relative overflow-hidden text-[color:var(--ink)]">
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 pb-12">
          {/* Logo / Newsletter */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 pr-4">
            <Link href="/" className="font-display text-3xl tracking-tight flex items-center gap-2 text-[color:var(--ink)]">
              <span className="inline-block w-3 h-3 rotate-45" style={{ background: 'var(--coral)' }}/>
              Vior Skincare
            </Link>
            <p className="mt-4 text-[14px] text-[color:var(--ink-soft)] leading-relaxed max-w-sm">
              Botanically-rich skincare for the quiet rituals of your day. Formulated to leave skin luminous and unmistakably yours.
            </p>
            <div className="mt-8 relative">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] mb-3">Join our letters</div>
              <form onSubmit={handleSubscribe}>
                <div className="flex bg-[color:var(--bg-soft)] rounded-full overflow-hidden max-w-sm focus-within:ring-2 focus-within:ring-[color:var(--ink)] transition-shadow">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    className="bg-transparent flex-1 px-5 py-3 text-sm outline-none w-full text-[color:var(--ink)]" 
                  />
                  <button type="submit" className="px-5 text-sm font-medium hover:bg-[color:var(--ink)] hover:text-white transition-colors text-[color:var(--ink)]">Submit</button>
                </div>
              </form>
              {status !== "idle" && (
                <div className={`absolute top-full left-0 mt-2 text-xs ${status === "success" ? "text-[color:var(--green)] font-medium" : "text-red-500"}`}>
                  {message}
                </div>
              )}
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-1 lg:col-span-3 hidden lg:block"/>

          {/* Links */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {cols.map(c => (
              <div key={c.title}>
                <h4 className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] mb-5">{c.title}</h4>
                <ul className="space-y-3 text-[14px]">
                  {c.items.map(i => (
                    <li key={i.l}><Link href={i.h} className="hover:text-[color:var(--coral)] transition-colors text-[color:var(--ink-soft)]">{i.l}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-6 border-t border-[color:var(--border)] flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[color:var(--ink-soft)]">
          <div>© {new Date().getFullYear()} Vior Skincare. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[color:var(--ink)]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[color:var(--ink)]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
