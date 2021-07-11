//Collection Model//

const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
  id: { type: String },
  console: { type: String},
  name: { type: String},
  rareness: { type: String},
  price: { type: String},
  release: { type: String},
  genre: { type: String},
});

module.exports = mongoose.model("Collection", collectionSchema);