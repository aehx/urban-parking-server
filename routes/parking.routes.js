const router = require("express").Router();
const { getParking } = require("../controllers/parking.controller");

router.get("/",getParking);

module.exports = router;