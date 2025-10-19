const express = require('express');
const path = require('path');
const app = express();

// Serve static files from project root
app.use(express.static(path.join(__dirname)));

// Serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Disable any API endpoints (return 404)
app.get('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoints removed' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Static server running on http://localhost:${PORT}`));