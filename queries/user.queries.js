const User = require("../database/models/user.model");

exports.findUserPerEmail = (email) => {
   return User.findOne({ "local.email": email });
};
exports.findUserPerId = (id) => {
  return User.findById({ _id : id  });
};

exports.createUser = async (user) => {
  try {
    // const password = await User.hashPassword(user.password);
    const password = "await User.hashPassword(user.password)";
    const newUser = new User({
      username: user.username,
      local: { email: user.email, password: password },
      favorites: [],
      tokens:[]
    });
    return newUser.save();
  } catch (e) {
    throw e;
  }
};

exports.updateUserToken = (id,tokens) => {
    return User.findByIdAndUpdate(id,{tokens})
}