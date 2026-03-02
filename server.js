const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = process.env.DIST_DIR || 'dist';

const distPath = path.resolve(DIST_DIR);

app.use(express.static(distPath));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serving ${distPath} on port ${PORT}`);
});
