const router = require('express').Router();
const User = require('../model/User');
const admin = require('../firebase/firebaseAdmin');
const requireAuth = require('../middlewares/requireAuth');

router.get("/:userID", (req, res) => {
  const { userID } = req.params;
  admin.auth().getUser(userID)
    .then(userRecord => {
      res.json(userRecord);
    })
    .catch(e => {
      // console.log(e)
      res.sendStatus(404);
    })
})

router.use('/', requireAuth)
router.post('/', (req, res) => {
  const { name, picture } = req.decodedToken;
  const doc = new User({
    uid: req.body.uid,
    displayName: name,
    photoURL: picture,
    contacts: []
  });
  doc.save((err, doc) => {
    if (err) res.sendStatus(501);
    console.log('User created')
    res.sendStatus(200);
  });
});

module.exports = router;
