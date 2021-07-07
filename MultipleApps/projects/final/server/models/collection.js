//Collection Model//

const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
  id: { type: String },
  console: { type: String, required: true },
  name: { type: String, required: true },
  rareness: { type: String, required: true },
  price: { type: String, required: true },
  release: { type: String, required: true },
  genre: { type: String, required: true },
});

module.exports = mongoose.model("Collection", collectionSchema);