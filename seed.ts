import 'dotenv/config';
import mongoose from 'mongoose';
import { Resources } from './models/Resource.js';
import resources from './data/resources.js';

/**
 * Seed function to restart MongoDB
 */
const seed = async () => {
  const uri = process.env.MONGODB_URI;
  console.log(uri);
  if (!uri) {
    console.error('Invalid MongoDB connection string provided');
    process.exit(1);
  }

  await mongoose.connect(uri);
  await Resources.deleteMany({});

  // Insert all resources
  await Resources.insertMany(resources);
  await mongoose.disconnect();
};

seed().catch((e) => {
  console.error('Seed Failed:', e);
  process.exit(1);
});
