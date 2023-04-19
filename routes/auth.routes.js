const { verifyToken } = require("../config/jwt.config");
const { signout,removeToken } = require("../controllers/user.controller");
const router = require("express").Router();

router.post("/signout", verifyToken, signout);
router.put("/removeToken",removeToken);

module.exports = router;
