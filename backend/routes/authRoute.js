const express = require("express");
router = express.Router();
const authController = require("../controllers/auth/userController");
const uploadProfileImage = require("../middlewares/authMiddleware");

router.post("/send-otp", authController.userOtp);
router.post("/resend-otp", authController.resendOtp);
router.post("/verify-otp", authController.verifyOtp);
router.post("/set-profile", uploadProfileImage.single("profile_image"), authController.userProfile);
router.post("/set-password", authController.userPassword);
router.post("/interest", authController.userInterest);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
router.post("/change-password", authController.changePassword);

module.exports = router;
