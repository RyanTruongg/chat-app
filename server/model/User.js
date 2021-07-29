const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  uid: String,
  displayName: String,
  photoURL: String,
  contacts: [{
    contactID: String,
    seen: Boolean,
    lastMsg: {
      from: String,
      content: String,
      timestamp: Number
    }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;