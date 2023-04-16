const router = require("express").Router();
const { verifyToken } = require("../config/jwt.config");
const {
  getParking,
  updatefavorites,
} = require("../controllers/parking.controller");

router.get("/", getParking);
router.put("/favorites",verifyToken, updatefavorites);

module.exports = router;
