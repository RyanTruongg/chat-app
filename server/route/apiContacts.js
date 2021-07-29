const User = require('../model/User');

const router = require('express').Router();

const requireAuth = require('../middlewares/requireAuth')

router.put('/update-seen', (req, res) => {
  const { userID, contactID } = req.body;
  let options = {
    arrayFilters: [
      { "contact.contactID": contactID }
    ]
  }
  User.findOneAndUpdate({ uid: userID }, { $set: { "contacts.$[contact].seen": true } }, options).exec()
    .then(result => res.sendStatus(200))
    .catch(e => console.log(e));
})

router.use('/:userID', requireAuth);
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