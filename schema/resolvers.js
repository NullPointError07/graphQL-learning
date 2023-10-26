import data from "../data.js";

const resolvers = {
  Query: {
    users() {
      return data.UserList;
    },
    user(_, args) {
      const user = data.UserList.find((user) => user.id === parseInt(args.id));

      if (!user) {
        throw new Error(`User with id ${parseInt(args.id)} not found`);
      }

      return user;
    },
    movies() {
      return data.MovieList;
    },
    movie(_, args) {
      const movie = data.MovieList.find((movie) => movie.name === args.name);

      if (!movie) {
        throw new Error(`Movie with name ${parseInt(args.name)} not found`);
      }

      return movie;
    },
  },
};

export default resolvers;
