import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema({
  displayName: String,
  adminID: String,
  photoURL: String,
  members: [{ type: String, ref: "User" }],
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
