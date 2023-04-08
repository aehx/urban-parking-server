const router = require('express').Router();
const apiRoute = require("./api")
const authRoute = require("./auth")
const helloRoute = require("./hello")
const userRoutes = require("./users")

router.use("/api", apiRoute)
router.use("/auth", authRoute)
router.use("/hello", helloRoute)
router.use("/users",userRoutes)

module.exports = router;