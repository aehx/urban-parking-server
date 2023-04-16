const {
  findUserPerEmail,
  createUser,
  updateUserToken,
} = require("../queries/user.queries");
const { createJwtToken } = require("../config/jwt.config");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await findUserPerEmail(email);
    if (!user) {
      res.json({ error: "user not found", user: user });
    }
    const match = await user.comparePassword(password);
    if (match) {
      const token = await createJwtToken(user._id);
      await updateUserToken(user._id, token);
      const returnedUser = {
        username: user.username,
        favorites: user.favorites,
        token,
      };
      res.status(200).json(returnedUser);
    } else {
      res.status(400).json({ error: "Wrong email or password" });
    }
  } catch (e) {
    next(e);
  }
};

exports.signup = async (req, res, next) => {
  const  body  = req.body;
  try {
    const user = await findUserPerEmail(body.email);
    if (user) {
      res.json({ error: "user already exist" });
    } else {
      const newUser = await createUser(body);
      const token = await createJwtToken(newUser._id);
      await updateUserToken(newUser._id, token);
      const createdUser = {
        username: newUser.username,
        favorites: newUser.favorites,
        token,
      };
      res.status(200).json(createdUser);
    }
  } catch (e) {
    next(e);
  }
};

exports.signout = async (req, res, next) => {
  const { token } = req.body;
  const user = req.user;
  try {
    const tokens = user.tokens;
    const newToken = tokens.filter((t) => t !== token);
    await updateUserToken(user._id, newToken);
    res.status(200).json({ message: "Sign Out successfully!"});
  } catch (e) {
    next(e);
  }
};
