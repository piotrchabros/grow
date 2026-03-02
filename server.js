const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = process.env.DIST_DIR || 'dist';

const distPath = path.resolve(DIST_DIR);
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(distPath)) {
  console.error(`ERROR: dist directory not found at ${distPath}`);
  process.exit(1);
}

if (!fs.existsSync(indexPath)) {
  console.error(`ERROR: index.html not found at ${indexPath}`);
  console.error('Contents of dist:', fs.readdirSync(distPath));
  process.exit(1);
}

app.use(express.static(distPath));

app.get('*', (_req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serving ${distPath} on port ${PORT}`);
});
