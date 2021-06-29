const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const options = {
  cors: { origin: "http://localhost:3000" }
}
const io = require("socket.io")(httpServer, options);
const path = require("path");
require('./db/mongoDB');

httpServer.listen(process.env.PORT || 3001);

// Socket event handlers
const { createMsg } = require("./socket_event_handlers/msgHandler")(io);

// router
const apiUserRouter = require('./route/apiUser');
const apiMessageRouter = require('./route/apiMessage');

app.use(express.static(path.join(__dirname, 'build')));

app.use("/api/user/", apiUserRouter);
app.use("/api/message", apiMessageRouter);

app.get('*', (req, res) => {
  const p = path.join(__dirname, 'build', 'index.html');
  res.sendFile(p);
});

io.use((socket, next) => {
  const user = socket.handshake.auth.user;
  console.log()
  if (!user) {
    return next(new Error("invalid user"));
  }
  socket.user = user;
  next();
});

io.on("connection", (socket) => {
  console.log(socket.user.uid, "- connected");
  socket.join(socket.user.uid)

  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    const {
      displayName,
      photoURL,
    } = socket.user.providerData[0];
    users.push({
      userID: socket.user.uid,
      username: displayName,
      photoURL: photoURL,
      id: id
    });
  }
  io.emit("users", users);

  // socket.emit("room:get")

  socket.on("msg:create", createMsg)
  // socket.emit("msg:create")
  // socket.emit("private msg")

  socket.onAny((eventName) => {
    console.log(eventName);
  })

});




