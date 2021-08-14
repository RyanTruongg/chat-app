const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const options = {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://messenger-clone.online",
      "https://messenger-clone-ryannt.netlify.app",
    ],
  },
};
const io = require("socket.io")(httpServer, options);
require("./db/mongoDB");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

httpServer.listen(process.env.PORT || 3001);

// Socket event handlers
const { createMsg } = require("./socketio/msgHandler")(io);

// router
const apiUserRouter = require("./route/apiUser");
const apiMessageRouter = require("./route/apiMessage");
const apiConversationsRouter = require("./route/apiConversations");

app.use("/api/user/", apiUserRouter);
app.use("/api/message/", apiMessageRouter);
app.use("/api/conversations/", apiConversationsRouter);

const admin = require("./firebase/firebaseAdmin");

io.use((socket, next) => {
  const idToken = socket.handshake.auth.idToken;

  if (!idToken) {
    return next(new Error("invalid user"));
  } else {
    admin
      .auth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        socket.user = decodedToken;
        next();
      })
      .catch((error) => {
        console.log(error);
        next(error);
      });
  }
});

io.on("connection", (socket) => {
  console.log(socket.user.uid, "- connected");
  socket.join(socket.user.uid);

  socket.on("msg:create", createMsg);

  socket.onAny((eventName) => {
    console.log(eventName);
  });
});

io.on("disconnect", (socket) => {
  console.log(socket.user?.uid);
});
