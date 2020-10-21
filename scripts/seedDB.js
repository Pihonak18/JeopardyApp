const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/scores");
const playersSeed = [
  {
    username: "AP",
    score: 450,
  },
  {
    username: "JC",
    score: 800,
  },
  {
    username: "TD",
    score: 50,
  },
  {
    username: "LM",
    score: 200,
  },
];
db.Players.remove({})
  .then(() => db.Players.collection.insertMany(playersSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
