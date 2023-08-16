const User = require("../models/usersModel");
const createToken = require("../utils/createToken");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const signup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    contactNumber,
    postalCode,
    DOB,
  } = req.body;
  try {
    const user = await User.signup(
      firstName,
      lastName,
      email,
      password,
      contactNumber,
      postalCode,
      DOB
    );
    const token = createToken(user._id);

    res.status(200).json({
      firstName,
      lastName,
      email,
      password,
      contactNumber,
      postalCode,
      DOB,
      _id: user._id,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ firstName: user.firstName, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const keysecret = process.env.SECRET;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "powerinfinitypow@gmail.com",
    pass: "wrxlpjxjagamugdb",
  },
});

const SendEmail = async (req, res) => {
  // console.log("ssssssssssss");
  const { email } = req.body;
  try {
    const user = await User.forget(email);

    const userfind = await User.findOne({ email: email, user });
    const token = jwt.sign({ _id: userfind._id }, keysecret, {
      expiresIn: "1d",
    });
    const setusertoken = await User.findByIdAndUpdate(
      { _id: userfind._id },
      { verifytoken: token },
      { new: true }
    );
    if (true) {
      const mailOptions = {
        from: "powerinfinitypow@gmail.com",
        to: email,
        subject: "Sending Email for verification",
        text: `This link is valid for 2 minutes `,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error", error);
          res.status(500).json({ status: 500, message: "Email not send" });
        } else {
          console.log("Email sent", info.response);
          res
            .status(201)
            .json({ status: 201, message: "Email sent succsfully" });
        }
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Check the user token

module.exports = {
  signup,
  login,

  SendEmail,
};
