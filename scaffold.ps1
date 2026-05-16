$pages = @(
  "shop/serums", "shop/moisturisers", "shop/cleansers", "shop/spf", "shop/gift-sets", "shop/refills",
  "care/skin-quiz", "care/ritual-guide", "care/ingredient-index", "journal",
  "studio/our-story", "studio/sustainability", "studio/stockists", "studio/press", "studio/careers",
  "support/shipping", "support/returns", "support/faq"
)

foreach ($p in $pages) {
  $dir = "src/app/$p"
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  $name = ($p -split '/')[-1]
  $title = (Get-Culture).TextInfo.ToTitleCase($name.Replace('-', ' '))
  
  $content = @"
import React from 'react';
import { GenericPageLayout } from '@/components/GenericPageLayout';

export default function Page() {
  return (
    <GenericPageLayout 
      title="$title" 
      description="Content for $title is being updated. Check back soon for the latest from Vior Skincare."
    >
      <div className="p-8 bg-[color:var(--bg-soft)] rounded-3xl mt-8">
        <p>This is a placeholder page for $title. Our team is currently preparing the full content for this section.</p>
      </div>
    </GenericPageLayout>
  );
}
"@
  Set-Content -Path "$dir/page.tsx" -Value $content
}
