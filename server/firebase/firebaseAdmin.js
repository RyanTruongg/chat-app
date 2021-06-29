const admin = require("firebase-admin");

const serviceAccount = require("./config");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;