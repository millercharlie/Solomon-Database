import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildResolvers } from './resolvers';

import db from '../data/allData';

/**
 * Schema
 */
const typeDefs = `
  enum ResourceType {
    SCHOLAR
    CREATOR
    MINISTRY
    BOOK
    TOPIC
    QUESTION
  }

  type ResourceLink {
    id: ID!
    platform: String!
    link: String!
    displayText: String!
    icon: String
    priority: Boolean
  }

  type Content {
    _id: ID!
    title: String!
    desc: String
    thumbnail: String!
    badges: [String]
    link: String!
  }

  type Resource {
    _id: ID!
    name: String!
    image: String
    links: [ResourceLink]
    doubleWidth: String
    shortDesc: String
    longDesc: String
    recentContent: [Content]
    recommendedContent: [Content]
    favorite: Boolean
    badges: [String]
    ministry: String
    primLink: String
    type: ResourceType
    rating: Int
  }

  type Query {
      apologists: [Resource],
      commentaries: [Resource],
  }
`;

// Resolvers
const resolvers = buildResolvers(db);
const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server running at ${url}`);
