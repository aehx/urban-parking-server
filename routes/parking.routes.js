const { getParkings } = require("../controllers/parking.controller.js");
const router = require("express").Router();

router.get("/", getParkings);

module.exports = router;
