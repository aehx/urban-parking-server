const { test } = require("../controllers/test.controller");

const router = require("express").Router();

router.post("/", test);

module.exports = router;
