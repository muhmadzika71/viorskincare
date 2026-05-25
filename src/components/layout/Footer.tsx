"use client";
import React, { useState } from "react";
import Link from "next/link";

export function Footer() {
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
    <footer className="bg-[#f0e3db] text-ink py-16 px-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="w-full md:w-1/3">
          <Link href="/">
            <span className="text-4xl font-display text-coral font-bold tracking-wider uppercase mb-6 block">VIOR</span>
          </Link>
          <p className="text-sm text-ink-soft max-w-xs">
            Crafted To Glow. Clean, effective, and sustainable skincare.
          </p>
        </div>
        
        <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-wider uppercase">Shop</h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><Link href="/shop" className="hover:text-ink">All Products</Link></li>
              <li><Link href="/shop#bestsellers" className="hover:text-ink">Best Sellers</Link></li>
              <li><Link href="/shop#new" className="hover:text-ink">New Serums</Link></li>
              <li><Link href="/quiz" className="hover:text-ink">Skincare Quiz</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><Link href="/story" className="hover:text-ink">Our Story</Link></li>
              <li><Link href="/ingredients" className="hover:text-ink">Ingredients</Link></li>
              <li><Link href="/sustainability" className="hover:text-ink">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-ink">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-wider uppercase">Help</h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><Link href="/faq" className="hover:text-ink">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-ink">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-ink">Returns</Link></li>
              <li><Link href="/contact" className="hover:text-ink">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-wider uppercase">Newsletter</h4>
            <p className="text-sm text-ink-soft mb-4">Get 10% off your first order and exclusive access to new launches.</p>
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex items-end">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className="w-full bg-transparent border-b border-ink py-2 text-sm focus:outline-none placeholder-ink/50" 
                />
                <button type="submit" className="border-b border-ink font-bold text-sm hover:text-coral transition-colors ml-4 py-2 whitespace-nowrap">
                  Sign Up
                </button>
              </div>
              {status !== "idle" && (
                <div className={`absolute top-full left-0 mt-2 text-xs ${status === "success" ? "text-green-600 font-medium" : "text-red-500"}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-ink/20 flex flex-col md:flex-row justify-between items-center text-xs text-ink-soft">
        <p>© 2026 VIOR Skincare. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-ink">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-ink">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
