const Message = require('../model/Message');

const router = require('express').Router();

const requireAuth = require('../middlewares/requireAuth')

router.use('/*', requireAuth);

router.get("/", async (req, res) => {
  const { from, to } = req.query;
  if (req.decodedToken.uid !== from) res.sendStatus(401);
  const a = await Message.find({ from: from, to: to }).exec();
  const b = await Message.find({ from: to, to: from }).exec();
  res.json([...a, ...b]);
})

module.exports = router;