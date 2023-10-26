import data from "../data.js";

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
    review() {},
  },
};

export default resolvers;
