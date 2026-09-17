import 'dotenv/config';
import mongoose from 'mongoose';
import { MiscLinks, Resources } from './models/Resources.ts';
import resources from './data/resources.js';
import miscLinks from './data/miscLinks.js';

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
  await MiscLinks.deleteMany({});

  // Insert all resources
  await Resources.insertMany(resources);
  await MiscLinks.insertMany(miscLinks);
  await mongoose.disconnect();
};

seed().catch((e) => {
  console.error('Seed Failed:', e);
  process.exit(1);
});
