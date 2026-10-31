import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import imageRoutes from './routes/images.js';

const required = ['MONGODB_URI', 'JWT_SECRET'];
const missing = required.filter((key) => !process.env[key]);
if (missing.length) throw new Error(`Missing environment variables: ${missing.join(', ')}`);

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '1mb' }));
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/images', imageRoutes);
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong.' });
});

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(port, () => console.log(`API running at http://localhost:${port}`)))
  .catch((error) => { console.error('MongoDB connection failed:', error.message); process.exit(1); });
