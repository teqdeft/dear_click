const crypto = require("crypto");
const moment = require("moment/moment");
const jwt = require("jsonwebtoken")
require("dotenv");

const generateOTP = () => {
    const otp = crypto.randomBytes(3).readUIntBE(0, 3) % 1000000;
    const otpString = otp.toString().padStart(6, "0");

    return {
        otp: otpString,
        expiresAt: moment().add(5, "minutes").format("YYYY-MM-DD HH:mm:ss")
    };
};

const getUserIdFromToken = (token) => {
    try {
        if (!token) return null;
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return decoded.user?.id || null;
    } catch (error) {
        console.error("JWT Verify Error:", error.message);
        return null;
    }
};

module.exports = { generateOTP, getUserIdFromToken }

