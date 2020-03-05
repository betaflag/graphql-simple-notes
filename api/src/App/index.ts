import { ApolloServer } from "apollo-server";
import { GraphQLDateTime } from "graphql-iso-date";
import typeDefs from "./typeDefs";
import Context from "./Context";
import resolvers from "./resolvers";
import Database from "./Database";

export default class App {
  static async start() {
    const db = await Database.db();

    db.collection("notes").createIndex({ title: "text", content: "text" });

    const server = new ApolloServer({
      typeDefs,
      resolvers: [resolvers, { DateTime: GraphQLDateTime }],
      context: async () => ({ db })
    });

    return await server.listen();
  }
}

export { Context };
