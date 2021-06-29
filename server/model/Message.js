const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  content: String,
  from: String,
  to: String,
  to_room: Boolean,
  timestamp: Number,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;