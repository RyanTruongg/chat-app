const Message = require("../model/Message");

module.exports = (io) => {
  const createMsg = function (payload) {
    const socket = this;
    const { from, to, content } = payload;
    const UTC = Date.now() + new Date().getTimezoneOffset() * 60 * 1000;
    const timestampGMT7 = UTC + 7 * 60 * 60 * 1000;
    let doc = new Message({
      from: from,
      to: to,
      content: content,
      timestamp: timestampGMT7
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