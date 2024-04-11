//import
import express from "express";
import cors from "cors";

//instantiate
const app = express();

app.use(express.json());
app.use(cors());

//connect to our database.db file, normally we would connect to one hosted elsewhere
import Database from "better-sqlite3";
const db = new Database("database.db"); //get the existing db file

app.get("/", function (request, response) {
  response.json("Are my root routes showing?");
});

app.get("/games", function (request, response) {
  //use .all instead of .run because we aren't INSERTing, but selecting. So we want to see ALL the results.
  const games = db.prepare("SELECT * FROM games").all();
  response.json(games);
});

app.listen(8080, function () {
  console.log("Servahhhh is running on port 8080");
});
