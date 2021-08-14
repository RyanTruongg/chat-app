const Message = require("../model/Message");

const router = require("express").Router();

const requireAuth = require("../middlewares/requireAuth");

router.use("/*", requireAuth);

router.get("/", async (req, res) => {
  const { uid, conversationID } = req.query;
  if (req.decodedToken.uid !== uid) res.sendStatus(401);
  const messages = await Message.find({
    $or: [
      { senderID: uid, receiverID: conversationID },
      { senderID: conversationID, receiverID: uid },
    ],
  })
    .lean()
    .exec();
  return res.json(messages);
});

module.exports = router;
