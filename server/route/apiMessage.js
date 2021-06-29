const Message = require('../model/Message');

const router = require('express').Router();


router.get("/", async (req, res) => {
  const { from, to } = req.query;
  const a = await Message.find({ from: from, to: to }).exec();
  const b = await Message.find({ from: to, to: from }).exec();
  res.json([...a, ...b]);
})

module.exports = router;