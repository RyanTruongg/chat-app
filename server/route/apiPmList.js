const Message = require('../model/Message');

const router = require('express').Router();
const admin = require('../firebase/firebaseAdmin');

// pm-list
//5vfbDfuC4GdInk6UqVyNjtdTPYn2
router.get("/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    const a = await Message.find({ from: userID }).distinct('to').exec();
    const b = await Message.find({ to: userID }).distinct('from').exec();

    const unique = [...new Set([...a, ...b])];
    const usersID = unique.map(uid => { return { uid: uid } });
    let data = await admin.auth().getUsers(usersID);
    const promise = data.users.map(
      async (user) => {
        const a = await Message.findOne({ from: user.uid, to: userID }).sort({ timestamp: -1 });
        const b = await Message.findOne({ from: userID, to: user.uid }).sort({ timestamp: -1 });

        let lastMsg = {};
        if (a && b) {
          lastMsg = a?.timestamp >= b?.timestamp ? a : b;
        } else {
          lastMsg = a ? a : b;
        }
        return { ...user, msg: lastMsg }
      }
    )
    Promise.all(promise).then(value => {
      res.json({ users: value })
    });
  } catch (e) {
    console.log(e);
    res.status(404)
  }
})

module.exports = router;