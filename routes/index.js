const router = require("express").Router();
const parkingRoute = require("./parking.routes");
const authRoute = require("./auth.routes");
const userRoutes = require("./users.routes");

router.use("/parking", parkingRoute);
router.use("/auth", authRoute);
router.use("/users", userRoutes);

module.exports = router;
