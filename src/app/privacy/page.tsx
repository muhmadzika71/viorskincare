import React from 'react';
import { GenericPageLayout } from '@/components/GenericPageLayout';

export default function PrivacyPage() {
  return (
    <GenericPageLayout 
      title="Privacy Policy" 
      description="Last updated: May 17, 2026. This Privacy Policy describes how Vior Skincare collects, uses, and protects your personal information."
    >
      <div className="space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-display text-[color:var(--ink)] mb-4">1. Information We Collect</h2>
          <p>
            When you submit an order inquiry, we collect your name, email address, phone number, and shipping address. This information is used exclusively to process your inquiry, fulfill your order, and provide customer support.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-display text-[color:var(--ink)] mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to communicate with you about your order, to arrange for shipping and delivery, and to send you updates regarding your inquiry status. We do not sell or share your personal information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-[color:var(--ink)] mb-4">3. Data Security</h2>
          <p>
            We take reasonable precautions to protect your personal information and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
          </p>
        </section>
      </div>
    </GenericPageLayout>
  );
}
