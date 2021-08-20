const User = require("../model/User");

module.exports = (io) => {
  const searchUser = async function (text, cb) {
    const socket = this;
    const query = text
      ? {
          $and: [
            { displayName: { $regex: text, $options: "i" } },
            { _id: { $ne: socket.user.uid } },
          ],
        }
      : { _id: { $ne: socket.user.uid } };

    const users = await User.find(query, {
      displayName: 1,
      photoURL: 1,
    }).exec();
    cb(users);
  };

  return { searchUser };
};
