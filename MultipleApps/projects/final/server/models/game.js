const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  id: { type: String },
  console: { type: String, required: true },
  name: { type: String, required: true },
  rareness: { type: String, required: true },
  price: { type: String, required: true },
  release: { type: String, required: true },
  genre: { type: String},
});

module.exports = mongoose.model("Game", gameSchema);
