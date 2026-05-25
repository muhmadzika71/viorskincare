import React from "react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";

export default function ShippingPage() {
  return (
    <div className="relative bg-[var(--bg)] min-h-screen">
      <Nav />
      <main className="pt-40 pb-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
            / SHIPPING POLICY
          </div>
          <h1 className="font-display text-5xl font-bold text-ink mb-6">Delivery Information</h1>
        </div>

        <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-border">
          <div className="space-y-12">
            <div>
              <h3 className="font-bold text-xl text-ink mb-3">Processing Times</h3>
              <p className="text-ink-soft leading-relaxed">
                All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl text-ink mb-3">Domestic Shipping Rates</h3>
              <ul className="space-y-4 text-ink-soft">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Standard (3-5 business days)</span>
                  <span>$5.99</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Express (2 business days)</span>
                  <span>$12.99</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2 font-medium text-ink">
                  <span>Orders over $50</span>
                  <span>FREE Standard Shipping</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-ink mb-3">International Shipping</h3>
              <p className="text-ink-soft leading-relaxed">
                We currently offer international shipping to select countries. Shipping charges for your order will be calculated and displayed at checkout. Please note that international orders may be subject to import duties and taxes, which are incurred once a shipment reaches your destination country.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
