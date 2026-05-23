import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'products');
const outputDir = path.join(process.cwd(), 'public', 'products');

const files = [
  '6- cica cream -  60 ml  vior.png',
  '8- Cleaning water vior.jpg.jpeg',
  'Mousturizer vior  copy.png',
  'sunscreen vior.png',
  'toner pack front mOCK UP.png'
];

const imageMap = {
  '6- cica cream -  60 ml  vior.png': 'cica-cream-2.webp',
  '8- Cleaning water vior.jpg.jpeg': 'cleaning-water.webp',
  'Mousturizer vior  copy.png': 'moisturizer.webp',
  'sunscreen vior.png': 'sunscreen.webp',
  'toner pack front mOCK UP.png': 'toner-pack.webp'
};

async function processImages() {
  for (const file of files) {
    if (imageMap[file]) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, imageMap[file]);
      console.log(`Processing ${file}...`);
      
      try {
        const fileUrl = `file://${inputPath.replace(/\\/g, '/')}`;
        const blob = await removeBackground(fileUrl);
        const buffer = Buffer.from(await blob.arrayBuffer());
        
        await sharp(buffer)
          .webp({ quality: 90 })
          .resize({ width: 600, withoutEnlargement: true })
          .toFile(outputPath);
          
        console.log(`Saved transparent image to ${outputPath}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

processImages().catch(console.error);
