import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildResolvers } from './resolvers';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { expressMiddleware } from '@as-integrations/express5';
import express from 'express';
import mongoose from 'mongoose';
import DataRoutes from './routes';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const main = async () => {
  const uri = process.env.MONGODB_URI;
  console.log(uri);
  if (!uri) {
    console.error('Invalid MongoDB connection string');
    process.exit(1);
  }
  await mongoose.connect(uri);

  const app = express();
  DataRoutes(app);

  const typeDefs = readFileSync(join(__dirname, 'schema/schema.gql'), 'utf-8');
  const resolvers = buildResolvers();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use('/graphql', express.json(), expressMiddleware(server));

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
  });
};

main().catch((e) => {
  console.error(`Server failed to start: ${e}`);
  process.exit(1);
});
