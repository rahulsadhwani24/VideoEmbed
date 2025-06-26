// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import tmdbScrape from './vidsrc.js';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());

// app.get('/vidsrc', async (req: Request, res: Response) => {
//   const { id, type, season, episode } = req.query;

//   if (!id || !type) {
//     return res.status(400).json({ error: "Missing required query params: id and type" });
//   }

//   try {
//     const results = await tmdbScrape(
//       id.toString(),
//       type.toString() as 'movie' | 'tv',
//       season ? season.toString() : "",
//       episode ? episode.toString() : ""
//     );

//     return res.json(results);
//   } catch (err) {
//     if (err instanceof Error) {
//       return res.status(500).json({ error: 'Failed', details: err.message });
//     } else {
//       return res.status(500).json({ error: 'Unknown error', details: String(err) });
//     }
//   }
// });

// app.listen(PORT, () => {
//   console.log(`✅ API running on http://localhost:${PORT}`);
// });





