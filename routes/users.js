const router = require("express").Router();
const { login, signup } = require("../controllers/user.controller.js");
const {
  checkSignupField,
  checkLoginField,
  validationResult,
} = require("../middleware/login.middleware.js");

router.post("/login", checkLoginField, validationResult, login);
router.post("/signup", checkSignupField, validationResult, signup);

module.exports = router;
