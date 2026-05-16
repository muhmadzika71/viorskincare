import React from 'react';
import { Nav } from './layout/Nav';
import { Footer } from './layout/Footer';

export function GenericPageLayout({ title, description, children }: { title: string, description?: string, children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="min-h-[60vh] pt-20 pb-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16">
            <h1 className="font-display text-5xl md:text-6xl text-[color:var(--ink)] tracking-tight leading-tight mb-6">
              {title}
            </h1>
            {description && (
              <p className="text-[color:var(--ink-soft)] text-lg leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
            <div className="w-24 h-px bg-[color:var(--coral)] mt-8" />
          </header>
          <div className="prose prose-lg max-w-none text-[color:var(--ink-soft)]">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
