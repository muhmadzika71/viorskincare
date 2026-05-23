import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const files = [
  { in: 'Gemini_Generated_Image_6brvwe6brvwe6brv (1).png', out: 'public/products/hero-image.webp' },
  { in: 'Gemini_Generated_Image_wpct2twpct2twpct (1).png', out: 'public/products/lifestyle-image.webp' },
  { in: 'Gemini_Generated_Image_v4kzhv4kzhv4kzhv.png', out: 'public/products/macro-shot.webp' },
  { in: 'products/8- Cleaning water vior.jpg.png', out: 'public/products/cleaning-water.webp' }
];

async function run() {
  for (const f of files) {
    console.log('Processing', f.in);
    try {
        await sharp(f.in)
          .webp({ quality: 90 })
          .toFile(f.out);
        console.log('Done', f.out);
    } catch (e) {
        console.error('Failed', f.in, e);
    }
  }
}
run();
