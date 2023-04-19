const router = require("express").Router();
const { verifyToken } = require("../config/jwt.config");
const {
  getParking,
  updatefavorites,
  getUserFavorites
} = require("../controllers/parking.controller");

router.get("/", getParking);
router.get("/userFavorites/:email",getUserFavorites);
router.put("/favorites",verifyToken, updatefavorites);

module.exports = router;
