const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer, {
  cors: { origin: "http://localhost:3000" }
});
const admin = require('./firebaseAdmin');

io.use((socket, next) => {
  const user = socket.handshake.auth.user;
  if (!user) {
    return next(new Error("invalid user"));
  }
  socket.user = user;
  next();
});

io.on("connection", (socket) => {
  console.log(socket.user.displayName, "- connected")

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
  // ...
  socket.join(socket.user.uid)

  socket.on("private msg", (msg) => {
    socket.to(msg.to).emit("private msg", msg);
  });

  // socket.on("abc", async (roomId)=> {
  //   console.log(roomId)
  //   try {
  //     const user = await admin.auth().getUser(roomId);
  //     socket.emit("set roomID info", user.providerData[0])
  //   } catch(e) {
  //     console.log(e);
  //   }

  // })
});



httpServer.listen(3001);

