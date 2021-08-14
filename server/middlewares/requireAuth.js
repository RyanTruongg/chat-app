const admin = require("../firebase/firebaseAdmin");

async function requireAuth(req, res, next) {
  const jwt = req.get("Authorization")?.split(" ")[1];
  if (!jwt) {
    res.status(401).send("Unauthorized");
    next("Unauthorized");
  } else
    admin
      .auth()
      .verifyIdToken(jwt)
      .then((decodedToken) => {
        req.decodedToken = decodedToken;
        next();
      })
      .catch((error) => {
        console.log(error);
        res.status(401).send("Unauthorized");
        next(error);
      });
}

module.exports = requireAuth;
