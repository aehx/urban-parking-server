const { test } = require("../controllers/test.controller.js");

const router = require("express").Router();

router.post("/", test);
// router.post("/", (req, res) => {
//   res.json(req.body);
// });

module.exports = router;
