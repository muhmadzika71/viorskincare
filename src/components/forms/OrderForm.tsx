"use client";

import React, { useState } from 'react';

export function OrderForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission delay
    setTimeout(() => setStatus('success'), 1200);
  };

  if (status === 'success') {
    return (
      <div className="bg-[color:var(--green-soft)] p-8 rounded-3xl text-center max-w-lg mx-auto">
        <h3 className="font-display text-2xl text-[color:var(--ink)] mb-3">Inquiry Received</h3>
        <p className="text-[color:var(--ink-soft)] text-sm">
          Thank you for choosing Vior Skincare. Our team will review your order details and contact you shortly to confirm shipping and payment.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 btn-pill bg-[color:var(--ink)] text-white px-6 py-2 rounded-full text-sm"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl float-card max-w-2xl mx-auto border border-[color:var(--border)]">
      <h3 className="font-display text-3xl mb-2 text-[color:var(--ink)]">Order Inquiry</h3>
      <p className="text-sm text-[color:var(--ink-soft)] mb-8">
        Please fill out the form below to request an order. We process orders manually to ensure personalized care and freshness of our small-batch formulas.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)]">First Name *</label>
            <input required type="text" id="firstName" className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 transition-all text-sm" />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)]">Last Name *</label>
            <input required type="text" id="lastName" className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 transition-all text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)]">Email Address *</label>
            <input required type="email" id="email" className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 transition-all text-sm" />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)]">Phone Number</label>
            <input type="tel" id="phone" className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 transition-all text-sm" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)]">Shipping Address *</label>
          <input required type="text" id="address" placeholder="Street Address" className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 transition-all text-sm mb-3" />
          <div className="grid grid-cols-2 gap-3">
            <input required type="text" placeholder="City" className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 transition-all text-sm" />
            <input required type="text" placeholder="Postal Code" className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 transition-all text-sm" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="products" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)]">Products Requested *</label>
          <textarea required id="products" rows={3} placeholder="E.g., 2x Aura Glow Serum (30ml), 1x Velvet Cloud Cream" className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 transition-all text-sm resize-none"></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)]">Additional Notes</label>
          <textarea id="notes" rows={2} className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 transition-all text-sm resize-none"></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full btn-pill bg-[color:var(--ink)] text-white py-4 rounded-full text-sm font-medium disabled:opacity-70 transition-opacity"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Order Inquiry'}
        </button>
      </form>
    </div>
  );
}
