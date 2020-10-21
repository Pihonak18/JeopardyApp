const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  username: { type: String, required: true, unique: true },
  score: { type: Number },
});

const Players = mongoose.model("Players", playerSchema);

module.exports = Players;
