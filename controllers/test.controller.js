const {
  findUserPerEmail,
  createUser,
  updateUserToken,
} = require("../queries/user.queries");
const { createJwtToken } = require("../config/jwt.config");
exports.test = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    res.json({email,password});
    // const user = await findUserPerEmail(email);
    // if (!user) {
    //   res.json({ error: "user not found", user: user });
    // }else{
    //   res.json(user)
    // }
    // const match = await user.comparePassword(password);
    // if (match) {
    //   const token = await createJwtToken(user._id);
    //   await updateUserToken(user._id, token);
    //   const returnedUser = {
    //     username: user.username,
    //     favorites: user.favorites,
    //     token,
    //   };
    //   res.status(200).json(returnedUser);
    // } else {
    //   res.status(400).json({ error: "Wrong email or password" });
    // }
    // res.json(body);
  } catch (err) {
    next(err);
  }
};

