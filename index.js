import "dotenv/config";
import fs from "fs";
import path from "path";
import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers/index.js";
import db from "./db.js";

const logging = process.env.NODE_ENV === "development" ? console.log : false;

(async () => {
  // connects to the database
  await db.authenticate({ logging });
  // syncs the database
  await db.sync({ logging });
  // reads the graphql schema
  const typeDefs = fs.readFileSync(
    path.join(path.resolve(), "schema.graphql"),
    "utf8"
  );
  // creates an apollo server instance
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (req, res) => ({ db, req, res }),
  });

  // Starts the server
  server.listen().then(({ url }) => {
    console.log(`\n🚀 Server ready at ${url}`);
  });
})();
