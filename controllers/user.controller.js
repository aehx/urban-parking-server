const {
  findUserPerEmail,
  createUser,
  updateUserToken,
} = require("../queries/user.queries");
const { createJwtToken } = require("../config/jwt.config");

exports.login = (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  res.json(email, password);
  // try {
  //   const user = await findUserPerEmail(email);
  //   if (!user) {
  //     res.json({ error: "user not found" });
  //   }
  //   const match = await user.comparePassword(password);
  //   if (match) {
  //     const token = await createJwtToken(user._id);
  //     await updateUserToken(user._id, token);
  //     const returnedUser = {
  //       username: user.username,
  //       favorites: user.favorites,
  //       token,
  //     };
  //     res.status(200).json(returnedUser);
  //   } else {
  //     res.status(400).json({ error: "Wrong email or password" });
  //   }
  //   next();
  // } catch (e) {
  //   next(e);
  // }
};

exports.signup = async (req, res, next) => {
  const body = req.body;
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
    next();
  } catch (e) {
    next(e);
  }
};

exports.signout = async (req, res, next) => {
  const authHeaders = req.headers && req.headers.authorization;
  try {
    if (authHeaders) {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .json({ result: false, error: "Authorization fail" });
      } else {
        const tokens = req.user.tokens;
        const newToken = tokens.filter((t) => t !== token);
        await updateUserToken(req.user._id, newToken);
        res.status(200).json({ message: "Sign Out successfully!" });
      }
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};
