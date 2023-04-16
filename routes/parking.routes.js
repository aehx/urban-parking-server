const router = require("express").Router();
const {
  getParking,
  updatefavorites,
} = require("../controllers/parking.controller");

router.get("/", getParking);
router.put("/favorites", updatefavorites);

module.exports = router;
