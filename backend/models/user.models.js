const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      sparse: true,
    },
    profilePic: {
      type: String,
      trim: true,
      sparse: true,
    },
    email: {
      type: String,
      sparse: true,
      trim: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    }, //email will be option for googleAuth and OTP Verification approaches
    password: {
      type: String,
      trim: true,
      minlength: 8,
      select: false, // This is to stop the password field from getting as an answer in the search query
    }, //password is only for the basic login process (Email, password and unsername one)
    mobile: {
      type: String,
      unique: true,
      sparse: true,
    }, //for mobile signup
    googleId: {
      type: String,
      unique:true,
      sparse: true,
    },
    authMethod: {
      type: String,
      enum: ["form", "google", "mobile"],
    }, //for Google OAuth
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
