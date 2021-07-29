const mongoose = require('mongoose');
require("dotenv").config();

const MONGO_CONNECT_LINK = process.env.MONGO_CONNECT_LINK;
// console.log(MONGO_CONNECT_LINK)

mongoose.connect(MONGO_CONNECT_LINK, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("db connected");
});