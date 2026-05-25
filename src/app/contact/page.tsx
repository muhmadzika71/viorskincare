"use client";
import React, { useState, useEffect } from "react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (productParam) {
      setFormData(prev => ({
        ...prev,
        subject: `Purchase Inquiry: ${productParam}`
      }));
    }
  }, [productParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="relative bg-[var(--bg)] min-h-screen">
      <Nav />
      <main className="pt-40 pb-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
            / GET IN TOUCH
          </div>
          <h1 className="font-display text-5xl font-bold text-ink mb-6">Contact Us</h1>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            Ready to place an order or have a question about our products? Fill out the form below and our dedicated concierge team will get back to you within 24 hours to assist with your purchase.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 className="font-display text-3xl font-bold text-ink mb-4">Thank you for reaching out!</h3>
            <p className="text-ink-soft mb-8">Your inquiry has been successfully received. A member of our team will be in touch shortly via email to complete your request.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn-primary"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-ink mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-var(--bg-soft) border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ink transition-shadow"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-ink mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-var(--bg-soft) border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ink transition-shadow"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="subject" className="block text-sm font-bold text-ink mb-2">Subject</label>
              <select 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-var(--bg-soft) border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ink transition-shadow appearance-none"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Purchase Inquiry: CICA CREAM PRO B5">Purchase Inquiry: CICA CREAM PRO B5</option>
                <option value="Purchase Inquiry: HYALURONIC MICELLAR H2O Ultra">Purchase Inquiry: HYALURONIC MICELLAR H2O Ultra</option>
                <option value="Purchase Inquiry: MOISTURIZING CREAM 24H">Purchase Inquiry: MOISTURIZING CREAM 24H</option>
                <option value="Purchase Inquiry: DERMASHIELD LX SUNSCREEN">Purchase Inquiry: DERMASHIELD LX SUNSCREEN</option>
                <option value="Purchase Inquiry: BALANCING TONER">Purchase Inquiry: BALANCING TONER</option>
                <option value="Wholesale">Wholesale & Partnerships</option>
                <option value="Press">Press & Media</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-bold text-ink mb-2">Message (Include shipping address if purchasing)</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-var(--bg-soft) border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ink transition-shadow resize-none"
                placeholder="How can we help you today?"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full justify-center py-4 text-lg">
              Send Inquiry
            </button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}
