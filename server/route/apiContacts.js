const Message = require('../model/Message');
const User = require('../model/User');

const router = require('express').Router();
const admin = require('../firebase/firebaseAdmin');

const requireAuth = require('../middlewares/requireAuth')

router.use('/*', requireAuth);

router.get("/:userID", async (req, res) => {
  const { userID } = req.params;
  const decodedToken = req.decodedToken;

  if (decodedToken.uid !== userID) res.status(401).send('Unauthorized');

  try {
    let user = await User.findOne({ uid: userID }).exec();
    let contacts = user.contacts;

    let json = contacts.map(async (contact) => {
      let { displayName, photoURL } = await User.findOne({ uid: contact.contactID }).exec()
      let { seen, contactID, lastMsg } = contact;
      return { seen, contactID, lastMsg, displayName, photoURL }
    })
    Promise.all(json).then(contacts => res.json(contacts))
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
})

module.exports = router;