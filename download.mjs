import fs from 'fs';
import https from 'https';
import path from 'path';

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if ([301, 302, 303, 307, 308].includes(response.statusCode)) {
        download(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err.message);
    });
  });
}

// Ensure public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

download("https://drive.google.com/uc?export=download&id=10lrx8OVicC0Jr-lOQd6esyhhwCNHRMOK", "public/profile.jpg")
  .then(() => console.log("Download success"))
  .catch(console.error);
