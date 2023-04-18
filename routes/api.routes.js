const { test } = require("../controllers/test.controller.js");

const router = require("express").Router();

router.post("/", (req,res)=>{
  res.json("success")
});

module.exports = router;
