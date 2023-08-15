const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;
const createError = require("../utils/createError");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (
  firstName,
  lastName,
  email,
  password,
  contactNumber,
  postalCode,
  DOB
) {
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !contactNumber ||
    !postalCode ||
    !DOB
  ) {
    console.log("plase");
    throw Error("All fields must be provided");
  }
  if (!validator.isEmail(email)) {
    return createError(400, "Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    return createError(400, "Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    return createError(409, "Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({
    firstName,
    lastName,
    email,
    password: hash,
    contactNumber,
    postalCode,
    DOB,
  });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    return createError(400, "All fields must be filled");
  } else if (!password) {
    return createError(400, "Password must be filled");
  } else if (!email) {
    return createError(400, "Email must be filled");
  }
  const user = await this.findOne({ email });
  if (!user) {
    return createError(400, "User not registered");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return createError(400, "Incorrect password");
  }
  if (password && !validator.isLength(password, { min: 8 })) {
    return createError(400, "Password must be at least 6 characters long");
  }

  return user;
};
module.exports = mongoose.model("User", userSchema);
