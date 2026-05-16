import React from 'react';
import { GenericPageLayout } from '@/components/GenericPageLayout';

export default function TermsPage() {
  return (
    <GenericPageLayout 
      title="Terms of Service" 
      description="Last updated: May 17, 2026. Please read these Terms of Service carefully before using the Vior Skincare website or submitting an order inquiry."
    >
      <div className="space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-display text-[color:var(--ink)] mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-display text-[color:var(--ink)] mb-4">2. Order Inquiries</h2>
          <p>
            Submitting an order inquiry through our website does not constitute a legally binding contract of sale. All orders are subject to availability and confirmation of the order price. We reserve the right to refuse any inquiry you place with us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-[color:var(--ink)] mb-4">3. Product Information</h2>
          <p>
            We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate. All descriptions of products or product pricing are subject to change at anytime without notice.
          </p>
        </section>
      </div>
    </GenericPageLayout>
  );
}
