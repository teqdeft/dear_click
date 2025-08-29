const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/userController");
const uploadFile = require("../middlewares/imageUploadMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// user authentication routes
router.get("/test", authController.test);
router.post("/send-otp", authController.sendOtp);
router.post("/verify-email", authController.verifyEmail);
router.post(
  "/complete-profile",
  uploadFile.single("profilePic"),
  authController.createProfile
);
router.post("/set-password", authController.setPassword);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.verifyAndResetPassword);
router.put("/change-password", authMiddleware, authController.changePassword);

module.exports = router;
