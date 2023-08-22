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
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
      // required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    verifytoken: {
      type: String,
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
  country,
  state,
  DOB
) {
  
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !contactNumber ||
    !postalCode ||
    !country||
    !state
    
  ) {
    console.log("plase");
    throw createError(400, "All fields must be provided");
  }
  if (!validator.isEmail(email)) {
    throw createError(400, "Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw createError(400, "Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw createError(409, "Email already in use");
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
    country,
    state,
    DOB,
  });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw createError(400, "All fields must be filled");
  } else if (!password) {
    throw createError(400, "Password must be filled");
  } else if (!email) {
    throw createError(400, "Email must be filled");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw createError(400, "User not registered");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw createError(400, "Incorrect password");
  }
  if (password && !validator.isLength(password, { min: 8 })) {
    throw createError(400, "Password must be at least 8 characters long");
  }

  return user;
};

userSchema.statics.forget = async function (email) {
  if (!email) {
    throw createError("Email must be filled");
  }

  if (!validator.isEmail(email)) {
    throw createError("Email not valid");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw createError("Incorrect email");
  }
  console.log(user);
  return user;
};

userSchema.statics.reset = async function (password) {
  if (!password) {
    throw createError("password is required");
  }

  if (!validator.isStrongPassword(password)) {
    throw createError("Password not strong enough");
  }

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
  return user;
};
module.exports = mongoose.model("User", userSchema);
