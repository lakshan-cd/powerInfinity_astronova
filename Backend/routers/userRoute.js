const express = require("express");
const {
  signup,
  login,
  forgotpassword,
  reset,
  SendEmail,
} = require("../controllers/userController");
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/verifyEmail", SendEmail);
router.get("/forgotPassword/:id/:token", forgotpassword);
router.post("/reset/:id/:token", reset);
module.exports = router;
