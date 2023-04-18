const router = require("express").Router();

router.post("/", (_req,res)=>{
  res.json("success")
});

module.exports = router;
