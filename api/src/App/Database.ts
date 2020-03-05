import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI || "mongodb://root:dev@localhost:27017";
const MONGO_DB = process.env.MONGO_DB || "graphql-notes";

class Database {
  static async db() {
    const mongoClient = await MongoClient.connect(MONGO_URI, {
      useUnifiedTopology: true
    });

    return mongoClient.db(MONGO_DB);
  }
}

export default Database;
