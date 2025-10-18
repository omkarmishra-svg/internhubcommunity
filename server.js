const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_KEY = process.env.OPENAI_API_KEY || '';

app.get('/', (req, res) => {
  res.send('proxy ok');
});

app.post('/api/ai-chat', async (req, res) => {
  try {
    // quick dev fallback response if API key not set
    if (!OPENAI_KEY) {
      return res.json({ reply: 'Proxy received request but OPENAI_API_KEY not set on server. Set .env and restart.' });
    }

    const body = {
      model: 'gpt-4o-mini',
      messages: req.body.messages || [],
      max_tokens: 800,
      temperature: 0.2
    };

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_KEY}`
      },
      body: JSON.stringify(body)
    });

    const data = await r.json();
    res.status(r.status).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: String(err) });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API proxy running on http://localhost:${PORT}`));