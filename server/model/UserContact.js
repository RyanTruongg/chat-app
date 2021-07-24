const mongoose = require('mongoose');
const { Schema } = mongoose;

const userContactSchema = new Schema({
  uid: String,
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

const UserContact = mongoose.model('UserContact', userContactSchema);

module.exports = UserContact;