const Message = require("../model/Message");
const User = require("../model/User");
const mongoose = require("mongoose");

module.exports = (io) => {
  const createMsg = function (payload, callbackFromClient) {
    const socket = this;
    const { senderID, receiverID, content } = payload;
    const UTC = Date.now();
    let doc = new Message({
      senderID: senderID,
      receiverID: receiverID,
      content: content,
      timestamp: UTC,
    });

    doc.save(async (err, msgDoc) => {
      if (err)
        return () => {
          console.log(err);
        };

      {
        User.findById(senderID, (err, sender) => {
          const conversationIndex = sender.privateConversations.findIndex(
            (e) => e.contactID == receiverID
          );
          if (conversationIndex !== -1) {
            sender.privateConversations[conversationIndex].seen = true;
          } else {
            sender.privateConversations.push({
              contactID: receiverID,
              seen: false,
            });
          }
          sender.save();
          const conversation = {
            info: ({ _id, displayName, photoURL } = sender),
            seen: false,
            lastMsg: msgDoc,
          };
          socket.to(receiverID).emit("private msg", {
            doc: msgDoc,
            conversation: conversation,
          });
        });
      }

      {
        User.findById(receiverID, (err, receiver) => {
          const conversationIndex = receiver.privateConversations.findIndex(
            (e) => e.contactID == senderID
          );
          if (conversationIndex !== -1) {
            receiver.privateConversations[conversationIndex].seen = false;
          } else {
            receiver.privateConversations.push({
              contactID: senderID,
              seen: false,
            });
          }
          receiver.save();
          const { _id, displayName, photoURL } = receiver;
          const conversation = {
            info: {
              _id,
              displayName,
              photoURL,
            },
            seen: false,
            lastMsg: msgDoc,
          };
          callbackFromClient({ doc: msgDoc, conversation: conversation });
        });
      }
    });
  };

  return {
    createMsg,
  };
};
