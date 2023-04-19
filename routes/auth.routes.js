const { verifyToken } = require("../config/jwt.config");
const { signout,removeToken, updateFavorites } = require("../controllers/user.controller");
const router = require("express").Router();

router.post("/signout", verifyToken, signout);
router.put("/removeToken",removeToken);
router.put("/favorites",verifyToken, updateFavorites);

module.exports = router;
