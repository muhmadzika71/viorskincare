import React from 'react';
import { GenericPageLayout } from '@/components/GenericPageLayout';

export default function Page() {
  return (
    <GenericPageLayout 
      title="Serums" 
      description="Content for Serums is being updated. Check back soon for the latest from Vior Skincare."
    >
      <div className="p-8 bg-[color:var(--bg-soft)] rounded-3xl mt-8">
        <p>This is a placeholder page for Serums. Our team is currently preparing the full content for this section.</p>
      </div>
    </GenericPageLayout>
  );
}
