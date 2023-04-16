const { verifyToken } = require("../config/jwt.config");
const { signout } = require("../controllers/user.controller");
const router = require("express").Router();

router.post("/signout", verifyToken, signout);

module.exports = router;
