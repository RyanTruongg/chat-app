const Message = require("../model/Message");

module.exports = (io) => {
  const createMsg = function (payload) {
    const socket = this;
    const { from, to, content } = payload;
    const UTC = Date.now();
    let doc = new Message({
      from: from,
      to: to,
      content: content,
      timestamp: UTC
    })

    doc.save((err, doc) => {
      if (err) return () => {
        console.log(err)
        socket.emit("msg:create", { success: false, ...payload });
      }
      socket.emit("msg:create", { success: true, doc: doc });
      socket.to(doc.to).emit("private msg", { success: true, doc: doc });
    });
  }

  return {
    createMsg
  }
}