import fs from 'fs';
import path from 'path';

export function getImages(folderName:string) {
  const imagesDir = path.join(process.cwd(), `public/images/${folderName}`);
  const imageFiles = fs.readdirSync(imagesDir);
  return imageFiles.map(file => `/images/${file}`);
}