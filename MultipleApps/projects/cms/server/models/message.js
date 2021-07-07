const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  id: { type: String },
  subject: { type: String },
  msgText: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.String, ref: "Contact" },
});

module.exports = mongoose.model("Message", messageSchema);
