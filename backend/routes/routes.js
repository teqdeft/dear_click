const express = require("express");
const router = express.Router();
const authRoutes = require("../routes/authRoute");
const interestRoutes = require("../routes/interestRoute");

router.use("/auth", authRoutes);
router.use("/interest", interestRoutes);

module.exports = router;
