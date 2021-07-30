const Message = require("../model/Message");
const User = require('../model/User');

async function updateContacts(u1, u2, { from, content, timestamp }) {
  let contact = {
    seen: u1 === from,
    contactID: u2,
    lastMsg: {
      from: from,
      content: content,
      timestamp: timestamp,
    }
  }

  let user = await User.findOne({ uid: u1 }).exec();
  let contacts = user.contacts;

  if (contacts.some(element => element.contactID === u2)) {
    let options = {
      arrayFilters: [
        { "receivingUser.contactID": u2 }
      ]
    }
    return User.findOneAndUpdate(
      { uid: u1 },
      { $set: { "contacts.$[receivingUser]": contact } },
      options)
      .exec();

  } else {
    return User.findOneAndUpdate(
      { uid: u1 },
      { $push: { contacts: contact } })
      .exec();
  }
}

module.exports = (io) => {
  const createMsg = function (payload, fn) {
    const socket = this;
    const { from, to, content } = payload;
    const UTC = Date.now();
    let doc = new Message({
      from: from,
      to: to,
      content: content,
      timestamp: UTC
    })

    doc.save(async (err, doc) => {
      if (err) return () => {
        console.log(err)
      }

      let sender = await updateContacts(from, to, doc).catch(e => console.log(e));
      let receiver = await updateContacts(to, from, doc).catch(e => console.log(e));

      let senderUpdatedContact = {
        contactID: receiver.uid,
        displayName: receiver.displayName,
        photoURL: receiver.photoURL,
        seen: true,
        lastMsg: {
          from: from,
          content: content,
          timestamp: UTC,
        }
      }
      fn({ doc: doc, contact: senderUpdatedContact }) //callback from sender

      let receiverUpdatedContact = {
        contactID: sender.uid,
        displayName: sender.displayName,
        photoURL: sender.photoURL,
        seen: false,
        lastMsg: {
          from: from,
          content: content,
          timestamp: UTC,
        }
      }
      socket.to(doc.to).emit("private msg", { doc: doc, contact: receiverUpdatedContact }); // emit to receiver
    });
  }

  return {
    createMsg
  }
}