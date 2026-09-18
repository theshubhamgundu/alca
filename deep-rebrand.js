import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = __dirname;

const replacements = [
  { match: /ALCA/gi, replace: 'ALCA' },
  { match: /ALCA/gi, replace: 'ALCA' },
  { match: /ALCA/gi, replace: 'ALCA' },
  { match: /ALCAproductsandservices\.in/gi, replace: 'alca.in' },
  { match: /ALCAproducts\.in/gi, replace: 'alca.in' },
  { match: /ALCA_products/gi, replace: 'alca_platform' },
  { match: /product batch/gi, replace: 'product batch' },
  { match: /product/gi, replace: 'product' },
  { match: /products/gi, replace: 'Products' },
  { match: /product/gi, replace: 'Product' },
  { match: /products/gi, replace: 'products' },
  { match: /services/gi, replace: 'services' },
  { match: /service/gi, replace: 'service' },
  { match: /services/gi, replace: 'Services' },
  { match: /premium/gi, replace: 'premium' },
  { match: /premium/gi, replace: 'Premium' },
  { match: /high-quality/gi, replace: 'high-quality' },
  { match: /high-quality/gi, replace: 'High-Quality' },
  { match: /exclusive/gi, replace: 'exclusive' },
  { match: /exclusive/gi, replace: 'Exclusive' },
  { match: /hand-crafted/gi, replace: 'hand-crafted' },
  { match: /hand-crafted/gi, replace: 'Hand-crafted' },
  { match: /https:\/\/res\.cloudinary\.com\/[a-zA-Z0-9_-]+\/image\/upload\/v[0-9]+\/[a-zA-Z0-9_/-]+\.(png|jpg|jpeg|webp)/g, replace: 'https://placehold.co/600x600/185e33/FFF?text=ALCA+Product' }
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.git')) {
        results = results.concat(walkDir(filePath));
      }
    } else {
      if (
        filePath.endsWith('.tsx') || 
        filePath.endsWith('.ts') || 
        filePath.endsWith('.html') || 
        filePath.endsWith('.js') || 
        filePath.endsWith('.json') ||
        filePath.endsWith('.css') ||
        filePath.endsWith('.xml') ||
        filePath.endsWith('.txt') ||
        filePath.endsWith('.sql')
      ) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walkDir(directory);
let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  replacements.forEach(r => {
    content = content.replace(r.match, r.replace);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`\nDeep rebranded ${updatedCount} files across the WHOLE workspace successfully to ALCA!`);
