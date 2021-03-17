const express = require("express");
const userRoutes = require("./user");
const apiRoutes = require("./apiRoutes");
const bookingRoutes = require("./booking")

const router = express.Router();

router.use("/users", userRoutes);
router.use("/api", apiRoutes);
router.use("/bookings", bookingRoutes);

module.exports = router;
