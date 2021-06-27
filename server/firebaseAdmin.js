const admin = require("firebase-admin");

const serviceAccount = require("./fbcf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;