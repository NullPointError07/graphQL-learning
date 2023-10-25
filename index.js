import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import typeDefs from "./schema.js";

import data from "./data.js";

const resolvers = {
  Query: {
    games() {
      return data.games;
    },
    authors() {
      return data.authors;
    },
    reviews() {
      return data.reviews;
    },
    review(_, args) {
      return data.reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    review() {
      
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3001 },
});

console.log("server running at port", 3001);
