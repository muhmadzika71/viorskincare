import React from 'react';
import Link from 'next/link';
import { Icons as I } from '../ui/Icons';

export function Nav() {
  return (
    <header className="sticky top-0 z-40">
      <div className="px-6 md:px-10 pt-5">
        <div className="glass rounded-full flex items-center justify-between pl-6 pr-2 py-2">
          <Link href="/" className="font-display text-2xl tracking-tight flex items-center gap-2">
            <span className="inline-block w-3 h-3 rotate-45" style={{ background: 'var(--coral)' }}/>
            Vior Skincare
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[color:var(--ink-soft)]">
            <Link className="hover:text-[color:var(--ink)]" href="/#shop">Shop</Link>
            <Link className="hover:text-[color:var(--ink)]" href="/#ritual">Ritual</Link>
            <Link className="hover:text-[color:var(--ink)]" href="/journal">Journal</Link>
            <Link className="hover:text-[color:var(--ink)]" href="/studio/our-story">About</Link>
          </nav>
          <div className="flex items-center gap-1">
            <button aria-label="Search" className="p-2.5 rounded-full hover:bg-[color:var(--ink)]/5 text-[color:var(--ink)]"><I.search className="w-4 h-4"/></button>
            <button aria-label="Account" className="p-2.5 rounded-full hover:bg-[color:var(--ink)]/5 text-[color:var(--ink)]"><I.user className="w-4 h-4"/></button>
            <Link href="/order" className="btn-pill bg-[color:var(--ink)] text-white text-sm pl-4 pr-5 py-2.5 rounded-full inline-flex items-center gap-2">
              <I.tag className="w-4 h-4"/> Order Form
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
