const router = require("express").Router();
const User = require("../model/User");
const admin = require("../firebase/firebaseAdmin");
const requireAuth = require("../middlewares/requireAuth");

router.get("/:userID", (req, res) => {
  const { userID } = req.params;
  admin
    .auth()
    .getUser(userID)
    .then((userRecord) => {
      res.json(userRecord);
    })
    .catch((e) => {
      // console.log(e)
      res.sendStatus(404);
    });
});

router.use("/", requireAuth);
router.post("/", (req, res) => {
  const { name, picture, uid } = req.decodedToken;
  const doc = new User({
    _id: uid,
    displayName: name,
    photoURL: picture,
    privateConversations: [],
    roomConversations: [],
  });
  doc.save((err, doc) => {
    if (err) return res.sendStatus(501).end();
    console.log("User created");
    res.sendStatus(200).end();
  });
});

module.exports = router;
