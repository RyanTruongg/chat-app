import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema({
  name: String,
  adminID: String,
  roomPhotoURL: String,
  members: [
    {
      memberID: String,
      displayName: String,
      photoURL: String,
    },
  ],
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
