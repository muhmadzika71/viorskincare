import React from 'react';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { OrderForm } from '@/components/forms/OrderForm';

export default function OrderPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-12 pb-32 px-6 md:px-10 bg-[color:var(--bg)]">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <span className="chip mb-6"><span className="dot" style={{ background: 'var(--coral)', opacity: 1 }}/> Vior Concierge</span>
          <h1 className="font-display text-4xl md:text-5xl text-[color:var(--ink)] tracking-tight mb-4">
            Begin Your Ritual
          </h1>
          <p className="text-[color:var(--ink-soft)] text-lg max-w-lg mx-auto">
            Submit your order inquiry below. Our concierge team will prepare your small-batch formulations and contact you to arrange delivery.
          </p>
        </div>
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
