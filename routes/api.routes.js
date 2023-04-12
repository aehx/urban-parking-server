const { test } = require("../controllers/test.controller.js");

const router = require("express").Router();

// router.post("/", test);
router.post("/", test);

module.exports = router;
