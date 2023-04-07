const router = require('express').Router();
const apiRoute = require("./api")
const authRoute = require("./auth")
const userRoutes = require("./users")

router.use("/api", apiRoute)
router.use("/auth", authRoute)
router.use("/users",userRoutes)

module.exports = router;