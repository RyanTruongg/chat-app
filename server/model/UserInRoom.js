import mongoose from 'mongoose';
const { Schema } = mongoose;

const userInRoomSchema = new Schema({
  userID: String,
  roomID: String,
});

const UserInRoom = mongoose.model('Room', userInRoomSchema);

export default UserInRoom;