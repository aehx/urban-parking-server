const { test } = require("../controllers/test.controller.js");

const router = require("express").Router();

router.get("/", (req,res)=>{
  res.json("success")
});

module.exports = router;
