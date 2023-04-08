const { hello } = require("../controllers/hello.controller");
const router = require("express").Router();

router.get("/", hello)

module.exports = router;