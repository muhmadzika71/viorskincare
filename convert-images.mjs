import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'products');
const outputDir = path.join(process.cwd(), 'public', 'products');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

const imageMap = {
  '6- cica cream -  60 ml  vior copy.jpg.jpeg': 'cica-cream-1.webp',
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
      console.log(`Converting ${file} to ${imageMap[file]}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .resize({ width: 800, withoutEnlargement: true }) // ensure reasonable size
        .toFile(outputPath);
    }
  }
  console.log('Conversion complete.');
}

processImages().catch(console.error);
