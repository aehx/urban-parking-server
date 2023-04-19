const router = require("express").Router();
const authRoute = require("./auth.routes");
const userRoutes = require("./users.routes");
const parkingRoutes = require("./parking.routes");


router.use("/auth", authRoute);
router.use("/users", userRoutes);
router.use("/parking",parkingRoutes)

module.exports = router;
