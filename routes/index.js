const router = require("express").Router();
const apiRoute = require("./api.routes");
const authRoute = require("./auth.routes");
const userRoutes = require("./users.routes");
const parkingRoutes = require("./parking.routes");

router.use("/api", apiRoute);
router.use("/auth", authRoute);
router.use("/users", userRoutes);
router.use("/parking",parkingRoutes)

module.exports = router;
