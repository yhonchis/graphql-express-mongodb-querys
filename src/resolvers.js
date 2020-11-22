import { tasks } from "./sample";
import User from "./models/User";
export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World with GraphQL";
    },
    greet: (root, { name }) => {
      return `Hello ${name}`;
    },
    tasks: () => {
      return tasks;
    },
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createTask: (_, { input }) => {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    createUser: async (_, { input }) => {
      const user = new User(input);
      await user.save();
      return user;
    },
    deleteUser: async (_, { _id }) => {
      const user = await User.findByIdAndDelete(_id);
      return `The user ${user.firstname} is delected.`;
    },

    updateUser: async (_, { _id, input }) => {
      const user = await User.findByIdAndUpdate(_id, input);
      return `The user ${user.firstname} is updated.`;
    },
  },
};
