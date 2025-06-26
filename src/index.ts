import express from 'express';
import cors from 'cors';
import tmdbScrape from './vidsrc.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/vidsrc', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id, type, season, episode } = req.query;

  if (!id || !type) {
    return res.status(400).json({ error: "Missing required query params: id and type" });
  }

  try {
    const results = await tmdbScrape(
      id.toString(),
      type.toString() as 'movie' | 'tv',
      season ? parseInt(season.toString()) : undefined,
      episode ? parseInt(episode.toString()) : undefined
    );

    return res.json(results);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ error: 'Failed', details: err.message });
    } else {
      return res.status(500).json({ error: 'Unknown error', details: String(err) });
    }
  }
});

app.listen(PORT, () => {
  console.log(`✅ API running on port ${PORT}`);
});