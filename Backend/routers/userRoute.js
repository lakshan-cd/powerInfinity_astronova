const express = require("express");
const {
  signup,
  login,

  SendEmail,
} = require("../controllers/userController");
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/verifyEmail", SendEmail);

module.exports = router;
