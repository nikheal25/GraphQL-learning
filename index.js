const express = require("express");
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

const root = {
  friend: () => {
    return {
      id: 123,
      firstName: "Nick",
      lastName: "Lloyd",
      email: "nick@gmail.com",
    };
  },
};

app.use(
  "/graphql",
  graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
