const router = require('express').Router();
const admin = require('../firebase/firebaseAdmin')

router.get("/:userID", (req, res) => {
  const { userID } = req.params;
  admin.auth().getUser(userID)
    .then(userRecord => {
      res.json(userRecord);
    })
    .catch(e => {
      res.status(404);
    })

})

module.exports = router;
