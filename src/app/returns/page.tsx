import React from "react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";

export default function ReturnsPage() {
  return (
    <div className="relative bg-[var(--bg)] min-h-screen">
      <Nav />
      <main className="pt-40 pb-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
            / RETURNS POLICY
          </div>
          <h1 className="font-display text-5xl font-bold text-ink mb-6">Our 30-Day Guarantee</h1>
        </div>

        <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-border">
          <div className="space-y-8">
            <p className="text-lg text-ink-soft leading-relaxed">
              We want you to love your VioR skincare. If you're not completely satisfied with your purchase, we accept returns on gently used items within 30 days of the delivery date.
            </p>
            
            <div>
              <h3 className="font-bold text-xl text-ink mb-3">How to Start a Return</h3>
              <p className="text-ink-soft leading-relaxed mb-4">
                To initiate a return, please visit our Contact page and select "Returns" as your subject. Provide your order number and the reason for your return. Our customer service team will respond within 24 hours with a prepaid return shipping label.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-ink mb-3">Refunds</h3>
              <p className="text-ink-soft leading-relaxed">
                Once we receive and inspect your return, we will process your refund to the original method of payment. Please allow 5-7 business days for the refund to reflect in your account. Please note that original shipping costs are non-refundable.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
