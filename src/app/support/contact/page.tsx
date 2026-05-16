import React from 'react';
import { GenericPageLayout } from '@/components/GenericPageLayout';

export default function ContactPage() {
  return (
    <GenericPageLayout 
      title="Contact Us" 
      description="We'd love to hear from you. Whether you have a question about our formulas, need assistance with your ritual, or want to inquire about an order."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div>
          <h3 className="font-display text-2xl text-[color:var(--ink)] mb-4">Get in Touch</h3>
          <p className="mb-8">
            Our concierge team is available Monday through Friday, 9am to 6pm GMT. We aim to respond to all inquiries within 24 hours.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] mb-1">Email</h4>
              <a href="mailto:hello@viorskincare.com" className="text-lg hover:text-[color:var(--coral)] transition-colors">hello@viorskincare.com</a>
            </div>
            <div>
              <h4 className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] mb-1">Press & Partnerships</h4>
              <a href="mailto:press@viorskincare.com" className="text-lg hover:text-[color:var(--coral)] transition-colors">press@viorskincare.com</a>
            </div>
            <div>
              <h4 className="font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] mb-1">Studio Address</h4>
              <p className="text-lg">
                Vior Skincare<br/>
                124 Botanical Way<br/>
                London, W1D 3XY
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-3xl float-card border border-[color:var(--border)]">
          <h3 className="font-display text-2xl text-[color:var(--ink)] mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] mb-2">Name</label>
              <input type="text" className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 text-sm" />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] mb-2">Email</label>
              <input type="email" className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 text-sm" />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[color:var(--ink-soft)] mb-2">Message</label>
              <textarea rows={4} className="w-full bg-[color:var(--bg-soft)] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--ink)]/20 text-sm resize-none"></textarea>
            </div>
            <button type="button" className="w-full btn-pill bg-[color:var(--ink)] text-white py-3 rounded-full text-sm font-medium mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </GenericPageLayout>
  );
}
