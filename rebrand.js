import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(__dirname, 'client');

const replacements = [
  { match: /ALCA/g, replace: 'ALCA' },
  { match: /ALCA/g, replace: 'ALCA' },
  { match: /ALCA/g, replace: 'ALCA' },
  { match: /ALCAproductsandservices\.in/g, replace: 'alca.in' },
  { match: /ALCAproducts\.in/g, replace: 'alca.in' },
  { match: /ALCA_products/g, replace: 'alca_platform' } // Will fix cloudinary separately if needed
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
        filePath.endsWith('.css')
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

  // Restore cloudinary URLs that might have been broken
  content = content.replace(/alca_platform\/products/g, 'ALCA_products/products');
  content = content.replace(/alca_platform\/avatars/g, 'ALCA_products/avatars');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`\nRebranded ${updatedCount} files successfully to ALCA!`);
