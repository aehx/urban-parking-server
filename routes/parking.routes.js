// const { getParkings } = require("../controllers/parking.controller.js");
const router = require("express").Router();

router.get("/", (req,res)=>{
  res.json("ok")
});

module.exports = router;
