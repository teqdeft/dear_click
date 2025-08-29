const express = require("express");
const router = express.Router();
const interestController = require("../controllers/interest/interest");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/get-interest", interestController.getInterests);
router.post(
  "/post-interest/:id",
  authMiddleware,
  interestController.createUserInterests
);
module.exports = router;
