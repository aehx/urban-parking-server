const router = require("express").Router();

router.get("/",(req, res) => {
  res.json("api")
})

module.exports = router;