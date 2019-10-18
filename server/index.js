require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { CONNECTION_STRING } = process.env;
const ctrl = require("./controller");
const port = 5555;
const app = express();

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(express.json());

app.listen(port, () => {
  console.log("Server listening on", { port });
});
