const { authValidation, otpValidation } = require("../../helpers/authVlidators");
const { success, error, validation } = require("../../helpers/response");
const { checkSchema, validationResult } = require("express-validator");
const db = require("../../db/db.js");
const { mailer } = require("../../nodeMailer/nodemailer.js");
const { generateOTP, getUserIdFromToken } = require("../../common/common.js");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { forgotPasswordTemplate } = require("../../nodeMailer/emailtamplates/forgotPasswordTemplate.js");
const { otpEmailTemplate } = require("../../nodeMailer/emailtamplates/emailtamplate.js");
const moment = require("moment")
const crypto = require("crypto")


const userOtp = [
  checkSchema(otpValidation),
  async (req, res) => {
    try {

      let validateError = validationResult(req);
      if (!validateError.isEmpty()) {
        return validation(res, validateError.array());
      }

      const { contact, email } = req.body

      let existEmail = await db("users").where({ email }).first()
      if (existEmail) {
        return error(res, "email alredy exist", 400)
      }

      let userData = ""
      let { otp, expiresAt } = generateOTP();
      const formatted = moment(expiresAt).format("D-M-YYYY HH:mm:ss");

      if (email) {

        await db("users").insert({ email, otp, otp_expires_at: expiresAt })

        userData = await db("users").select("users.id", "users.email", "users.otp_expires_at").where({ email }).first()

        await mailer({ to: email, subject: "Dear Click: Registration", html: otpEmailTemplate({ email: email, otp: otp, expiry: formatted }), });

      }

      // contact logic pending here 

      return success(res, userData, 200, "otp send on your email, please check your email");
    } catch (err) {
      return error(res, err.message);
    }
  }
]

const resendOtp = [
  checkSchema(otpValidation),
  async (req, res) => {
    try {

      let validateError = validationResult(req);
      if (!validateError.isEmpty()) {
        return validation(res, validateError.array());
      }

      const { contact, email } = req.body

      if (!email && !contact) {
        return error(res, "required fileds are missing ")
      }

      let userData = ""
      let { otp, expiresAt } = generateOTP();
      const formatted = moment(expiresAt).format("D-M-YYYY HH:mm:ss");

      if (email) {

        let existUser = await db("users").where({ email }).first()

        if (!existUser) {
          return error(res, "user not found", 400)
        }

        if (existUser.email_verify) {
          return error(res, "Email already verified.");
        }

        await db("users").where({ email }).update({ email, otp, otp_expires_at: expiresAt })

        userData = await db("users").select("users.id", "users.email", "users.otp_expires_at").where({ email }).first()

        await mailer({ to: email, subject: "Dear Click: Registration", html: otpEmailTemplate({ email: email, otp: otp, expiry: formatted }), });

      }
      // contact logic pending here 
      return success(res, userData, 200, "otp send on your email, please check your email");

    } catch (err) {
      return error(res, err.message);
    }
  }
]

const verifyOtp = [
  async (req, res) => {
    try {

      const { otp, email } = req.body

      if (!otp) {
        error(res, "otp is required", 400)
      }

      const user = await db("users")
        .select("id", "email", "otp", "otp_expires_at")
        .where({ email })
        .first();

      if (!user) {
        return error(res, "user not found", 400)
      }

      if (user.otp !== otp) {
        return error(res, "Invalid OTP", 400)
      }

      const expiresAt = moment(user.otp_expires_at, "YYYY-MM-DD HH:mm:ss");
      if (moment().isAfter(expiresAt)) {
        return error(res, "OTP expired, please try again", 400);
      }

      await db("users").where({ email }).update({ email_verify: 1 })
      let userData = await db("users").select("users.id", "users.email", "users.otp_expires_at").where({ email }).first()

      return success(res, userData, 200, "OTP has been verified successfully");

    } catch (err) {
      return error(res, err.message);
    }
  }
]

const userProfile = [
  async (req, res) => {
    try {
      const { name, username, email } = req.body;

      if (!name || !username) {
        return error(res, "name and username are required", 400);
      }

      const existUser = await db("users").where({ email }).first();
      if (!existUser) {
        return error(res, "User not found", 404);
      }

      let profile_image = req.file.filename

      await db("users")
        .where({ email })
        .update({ name, username, profile_image });

      const userData = await db("users")
        .select("id", "email", "otp_expires_at", "name", "username", "profile_image")
        .where({ email })
        .first();

      return success(res, userData, 200, "Personal details have been added successfully");
    } catch (err) {
      console.error("userProfile error:", err);
      return error(res, err.message, 500);
    }
  }
];

const userPassword = [
  checkSchema(authValidation),
  async (req, res) => {
    try {

      let validateError = validationResult(req);
      if (!validateError.isEmpty()) {
        return validation(res, validateError.array());
      }

      const { password, email } = req.body

      // if (!password) {
      //   return error(res, "password is required")
      // }

      const existUser = await db("users").where({ email }).first();
      if (!existUser) {
        return error(res, "User not found", 404);
      }

      let hashPassword = await bcrypt.hash(password, 10)
      await db("users").where({ email }).update({ password: hashPassword, status: 1 })

      const userData = await db("users")
        .select("id", "email", "otp_expires_at", "name", "username", "profile_image")
        .where({ email })
        .first();

      return success(res, userData, 200, "password added successfully");
    } catch (err) {
      return error(res, err.message, 500);
    }

  }
]

const userInterest = [
  async (req, res) => {
    try {

      const { interest, email } = req.body

      if (!interest) {
        return error(res, "please select some interest")
      }

      const existUser = await db("users").where({ email }).first();
      if (!existUser) {
        return error(res, "User not found", 404);
      }

      await db("users").where({ email }).update({ interest_id: interest })

      return success(res, null, 200, "User registered successfully");

    } catch (err) {
      return error(res, err.message, 500);
    }

  }
]

const login = [
  checkSchema(authValidation),
  async (req, res) => {
    try {

      let validateError = validationResult(req);
      if (!validateError.isEmpty()) {
        return validation(res, validateError.array());
      }

      const { username, password } = req.body

      let user = await db('users').where({ username }).first()

      if (!user) {
        return error(res, "user not found", 400)
      }

      let comparePassword = await bcrypt.compare(password, user.password)

      if (!comparePassword) { return error(res, "invailed credatinal", 400) }

      delete user["password"]

      const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);
      return success(res, { user, token }, 200, "User Login successfully");

    } catch (err) {
      return error(res, err.message, 500);
    }

  }
]

const forgotPassword = [
  async (req, res) => {
    try {
      const { username } = req.body;

      if (!username) {
        return error(res, "username is required", 500)
      }

      const user = await db("users").where({ username }).first();
      if (!user) error(res, "User not found", 500)

      const token = crypto.randomBytes(48).toString("hex")

      await db("password_resets").insert({
        user_id: user.id,
        token,
        expires_at: moment().add(20, "minutes").toDate()
      });

      const resetPasswordLink = process.env.REACT_APP_FRONT_URL + "/reset-password/" + token

      await mailer({
        to: user.email,
        subject: "Dear Click: Reset Password",
        html: forgotPasswordTemplate({ name: user.name, link: resetPasswordLink }),
      });

      return success(res, " ", 201, "Reset password link generated successfully !Check you Email.")

    } catch (err) {
      return error(res, err.message, 500);
    }
  }
]

const resetPassword = [
  checkSchema(authValidation),
  async (req, res) => {
    try {
      const { token, new_password } = req.body;

      if (!token || !new_password) {
        return error(res, "Token and new password are required", 400);
      }

      const resetEntry = await db("password_resets").where({ token }).first();
      if (!resetEntry) {
        return error(res, "Invalid token", 400);
      }

      const expiresAt = moment(resetEntry.expires_at, "YYYY-MM-DD HH:mm:ss");
      if (moment().isAfter(expiresAt)) {
        return error(res, "This token has expired", 400);
      }

      const hashedPassword = await bcrypt.hash(new_password, 10);
      await db("users").where({ id: resetEntry.user_id }).update({
        password: hashedPassword,
      });

      return success(res, "Password has been reset successfully");
    } catch (err) {
      console.error(err);
      return error(res, err.message, 500);
    }
  }
];

const changePassword = [
  checkSchema(authValidation),
  async (req, res) => {
    try {
      const { old_password, password } = req.body;

      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        return error(res, "Authorization token is required", 401);
      }

      let userId = getUserIdFromToken(token)

      if (!userId) {
        return error(res, "Invalid or expired token", 401);
      }

      let user = await db("uers").where({ id: userId }).first()

      if (!user) {
        return error(res, "user not found", 401)
      }

      let comparePassword = await bcrypt.compare(old_password, user.password)
      if (!comparePassword) { return error(res, "The current password you entered is incorrect. Please try again", 404) }

      const hashedPassword = await bcrypt.hash(password, 10);

      const updated = await db("users")
        .where({ id: userId })
        .update({ password: hashedPassword });

      return success(res, "Your password has been changed successfully");

    } catch (err) {
      return error(res, "Internal Server Error", 500);
    }
  },
];


module.exports = { userOtp, resendOtp, verifyOtp, userProfile, userPassword, userInterest, login, forgotPassword, resetPassword, changePassword };
