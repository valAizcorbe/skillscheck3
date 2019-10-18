require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const ctrl = require("./controller");
const port = SERVER_PORT;
const app = express();
app.use(express.json());

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    app.listen(port, () => {
      console.log("Server listening on", { port });
      console.log("db connected");
    });
  })
  .catch(err => console.log(err));

app.get("/api/houses", ctrl.getHouses);
app.post("/api/house", ctrl.addHouse);
app.delete("/api/house/:id", ctrl.deleteHouse);
