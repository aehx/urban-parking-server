<<<<<<< HEAD
const router = require("express").Router();
const apiRoute = require("./api");
const authRoute = require("./auth");
const userRoutes = require("./users");

router.use("/api", apiRoute);
router.use("/auth", authRoute);
router.use("/users", userRoutes);
router.get("/", (req, res) => res.json("Hello world"));
=======
const router = require('express').Router();
const apiRoute = require("./api")
const authRoute = require("./auth")
const helloRoute = require("./hello")
const userRoutes = require("./users")

router.use("/api", apiRoute)
router.use("/auth", authRoute)
router.use("/hello", helloRoute)
router.use("/users",userRoutes)
>>>>>>> 57b6178961028cdf08d47257e37b5bd20d1adcdd

module.exports = router;
