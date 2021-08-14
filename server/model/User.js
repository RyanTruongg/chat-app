const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: String,
  displayName: String,
  photoURL: String,
  privateConversations: [
    new Schema(
      {
        contactID: { type: String, ref: "User" },
        seen: Boolean,
      },
      { _id: false }
    ),
  ],
  roomConversations: [
    new Schema(
      {
        roomID: { type: String, ref: "Room" },
        seen: Boolean,
      },
      { _id: false }
    ),
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
