const User = require("../model/User");
const Message = require("../model/Message");

const router = require("express").Router();

const requireAuth = require("../middlewares/requireAuth");

router.put("/update-seen", (req, res) => {
  const { uid, conversationID } = req.body;
  let options = {
    arrayFilters: [{ "ele.contactID": conversationID }],
  };
  User.findOneAndUpdate(
    { _id: uid },
    { $set: { "privateConversations.$[ele].seen": true } },
    options
  )
    .exec()
    .then((result) => res.json(result).end())
    .catch((e) => console.log(e));
});

router.use("/:userID", requireAuth);
router.get("/:userID", async (req, res) => {
  const { userID } = req.params;
  const decodedToken = req.decodedToken;

  if (decodedToken.uid !== userID) return res.status(403);

  try {
    const user = await User.findById(userID)
      .populate("privateConversations.contactID", "displayName photoURL")
      .lean();
    const privateConversations = await Promise.all(
      user.privateConversations.map(async ({ contactID, seen }) => {
        const query = {
          $or: [
            { senderID: userID, receiverID: contactID },
            { senderID: contactID, receiverID: userID },
          ],
        };
        const lastMsg = await Message.findOne(query)
          .sort({ timestamp: -1 })
          .lean();
        return { info: { ...contactID }, seen, lastMsg };
      })
    );
    return res.json(privateConversations);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(404);
  }
});

module.exports = router;
