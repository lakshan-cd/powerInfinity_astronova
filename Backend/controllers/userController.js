const User = require("../models/usersModel");
const createToken = require("../utils/createToken");
const createError = require("../utils/createError");

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
    res.status(200).json({ Name: user.Name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  signup,
  login,
};
