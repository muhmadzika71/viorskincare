import React from 'react';
import Link from 'next/link';

export function Footer() {
  const cols = [
    { title: 'Shop',     items: [{l:'Serums',h:'/shop/serums'}, {l:'Moisturisers',h:'/shop/moisturisers'}, {l:'Cleansers',h:'/shop/cleansers'}, {l:'SPF',h:'/shop/spf'}, {l:'Gift Sets',h:'/shop/gift-sets'}, {l:'Refills',h:'/shop/refills'}] },
    { title: 'Care',     items: [{l:'Skin Quiz',h:'/care/skin-quiz'}, {l:'Ritual Guide',h:'/care/ritual-guide'}, {l:'Ingredient Index',h:'/care/ingredient-index'}, {l:'Journal',h:'/journal'}] },
    { title: 'Studio',   items: [{l:'Our Story',h:'/studio/our-story'}, {l:'Sustainability',h:'/studio/sustainability'}, {l:'Stockists',h:'/studio/stockists'}, {l:'Press',h:'/studio/press'}, {l:'Careers',h:'/studio/careers'}] },
    { title: 'Support',  items: [{l:'Contact',h:'/support/contact'}, {l:'Shipping',h:'/support/shipping'}, {l:'Returns',h:'/support/returns'}, {l:'FAQ',h:'/support/faq'}] },
  ];
  return (
    <footer className="mt-32 md:mt-44 pt-16 border-t border-[color:var(--border)] relative overflow-hidden">
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 pb-12">
          {/* Logo / Newsletter */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 pr-4">
            <a href="#" className="font-display text-3xl tracking-tight flex items-center gap-2">
              <span className="inline-block w-3 h-3 rotate-45" style={{ background: 'var(--coral)' }}/>
              Vior Skincare
            </a>
            <p className="mt-4 text-[14px] text-[color:var(--ink-soft)] leading-relaxed max-w-sm">
              Botanically-rich skincare for the quiet rituals of your day. Formulated to leave skin luminous and unmistakably yours.
            </p>
            <div className="mt-8">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] mb-3">Join our letters</div>
              <div className="flex bg-[color:var(--bg-soft)] rounded-full overflow-hidden max-w-sm focus-within:ring-2 focus-within:ring-[color:var(--ink)] transition-shadow">
                <input type="email" placeholder="Email address" className="bg-transparent flex-1 px-5 py-3 text-sm outline-none w-full" />
                <button className="px-5 text-sm font-medium hover:bg-[color:var(--ink)] hover:text-white transition-colors">Submit</button>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-1 lg:col-span-2 hidden lg:block"/>

          {/* Links */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map(c => (
              <div key={c.title}>
                <h4 className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] mb-5">{c.title}</h4>
                <ul className="space-y-3 text-[14px]">
                  {c.items.map(i => (
                    <li key={i.l}><Link href={i.h} className="hover:text-[color:var(--coral)] transition-colors">{i.l}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-6 border-t border-[color:var(--border)] flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[color:var(--ink-soft)]">
          <div>© {new Date().getFullYear()} Vior Skincare. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[color:var(--ink)]">Privacy</Link>
            <Link href="/terms" className="hover:text-[color:var(--ink)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
