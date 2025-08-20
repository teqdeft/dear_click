const express = require("express");
router = express.Router();
const authController = require("../controllers/auth/userController");

router.get("/test", authController.test);

module.exports = router;
