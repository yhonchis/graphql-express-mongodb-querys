import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { getConnection } from "./database";
const app = express();

// Settings
getConnection();
app.set("port", process.env.PORT || 4000);
app.use(express.json());

// Middlewares
app.use(
  "/",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
      messageId: "text",
    },
  })
);

// Starting the server
app.listen(app.get("port"), (err) => {
  if (err) throw new Error(err);
  console.log(`> Server on port http://localhost:${app.get("port")}`);
});
