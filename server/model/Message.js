const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  senderID: String,
  receiverID: String,
  content: String,
  timestamp: Number,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
