const Message = require("../model/Message");

module.exports = (io) => {
  const createMsg = function (payload) {
    const socket = this;
    const { from, to, content, timestamp } = payload;
    let doc = new Message({
      from: from,
      to: to,
      content: content,
      timestamp: timestamp
    })

    doc.save((err, doc) => {
      if (err) return () => {
        console.log(err)
        socket.emit("msg:create", { success: false, ...payload });
      }
      socket.emit("msg:create", { success: true, ...doc });
      socket.to(doc.to).emit("private msg", doc);
    });
  }

  return {
    createMsg
  }
}