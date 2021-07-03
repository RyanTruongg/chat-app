const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const options = {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://messenger-clone.online",
      "https://messenger-clone-ryannt.netlify.app"
    ]
  }
}
const io = require("socket.io")(httpServer, options);
require('./db/mongoDB');

httpServer.listen(process.env.PORT || 3001);

// Socket event handlers
const { createMsg } = require("./socket_event_handlers/msgHandler")(io);

// router
const apiUserRouter = require('./route/apiUser');
const apiMessageRouter = require('./route/apiMessage');
const apiPmListRouter = require('./route/apiPmList');

app.use("/api/user/", apiUserRouter);
app.use("/api/message/", apiMessageRouter);
app.use("/api/pm-list/", apiPmListRouter);

io.use((socket, next) => {
  const user = socket.handshake.auth.user;
  if (!user) {
    return next(new Error("invalid user"));
  }
  socket.user = user;
  next();
});

io.on("connection", (socket) => {
  console.log(socket.user.uid, "- connected");
  socket.join(socket.user.uid)

  socket.on("msg:create", createMsg)
  // socket.emit("msg:create")
  // socket.emit("private msg")

  socket.onAny((eventName) => {
    console.log(eventName);
  })

});




