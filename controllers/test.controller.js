const {
  findUserPerEmail,
  createUser,
  updateUserToken,
} = require("../queries/user.queries");
const { createJwtToken } = require("../config/jwt.config");

exports.test = async (req, res, next) => {
  const {email,password} = req.body;
  try {
    const user = await findUserPerEmail({email});
      res.json({user});
  } catch (err) {
    res.json("notnot");
    // next(err);
  }
};
