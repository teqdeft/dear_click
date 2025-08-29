const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/userController");
const uploadFile = require("../middlewares/imageUploadMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// all user authentication route
router.get("/test", authMiddleware, authController.test);
router.post("/send-otp", authController.sendOtp);
router.post("/verify-email", authController.verifyEmail);
router.post(
  "/complete-profile",
  uploadFile.single("profilePic"),
  authController.createProfile
);
router.post("/set-password", authController.setPassword);

module.exports = router;
