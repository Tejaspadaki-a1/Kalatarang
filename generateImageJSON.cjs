const fs = require('fs');
const path = require('path');

const photosBasePath = path.join(__dirname, 'public/');
const outputPath = path.join(__dirname, 'src/components/portfolio');

// Make sure output directory exists
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

fs.readdirSync(photosBasePath).forEach((folderName) => {
  const folderPath = path.join(photosBasePath, folderName);

  // Skip if not a folder
  if (!fs.statSync(folderPath).isDirectory()) return;

  const images = fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map((file, index) => ({
      id: index + 1,
      imgSrc: `/${folderName}/${file}`,
      imgTitle: file,
      imgData: '',
    }));

  const fileName = folderName.replace(/\s+/g, '_').toLowerCase() + '_images.json';
  const filePath = path.join(outputPath, fileName);

  fs.writeFileSync(filePath, JSON.stringify(images, null, 2));
  console.log(`✅ Created ${fileName}`);
});
