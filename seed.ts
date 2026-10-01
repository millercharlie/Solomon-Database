import 'dotenv/config';
import mongoose from 'mongoose';
import { MiscLinks, Resources } from './models/Resources.ts';
import { Bible, Topics } from './models/Pages.ts';
import resources from './data/resources.js';
import miscLinks from './data/miscLinks.js';
import topics from './data/topics.js';
import bible from './data/bible.js';

/**
 * Seed function to restart MongoDB
 */
const seed = async () => {
  const uri = process.env.MONGODB_URI;
  console.log(uri);
  if (!uri) {
    console.error('Invalid MongoDB connection string');
    process.exit(1);
  }

  await mongoose.connect(uri);
  await Resources.deleteMany({});
  await MiscLinks.deleteMany({});
  await Topics.deleteMany({});
  await Bible.deleteMany({});

  // Insert all resources
  await Resources.insertMany(resources);
  await MiscLinks.insertMany(miscLinks);
  await Topics.insertMany(topics);
  await Bible.insertMany(bible);
  await mongoose.disconnect();
};

seed().catch((e) => {
  console.error('Seed Failed:', e);
  process.exit(1);
});
