const router = require("express").Router();
const {
  getParking,
  getUserFavorites
} = require("../controllers/parking.controller");

router.get("/", getParking);
router.get("/userFavorites/:email",getUserFavorites);


module.exports = router;