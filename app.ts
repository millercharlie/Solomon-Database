import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import Routes from './src/routes.ts';

const app = express();
app.use(express.json());

Routes(app);

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Invalid MONGODB_URI');
}

mongoose
  .connect(uri)
  .then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch((e) => console.error('MongoDB connection failed', e));
