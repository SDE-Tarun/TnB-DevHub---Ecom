const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.models");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email }); //checking via email, can be changed according to need later
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET); //need to add session expiring option as per need
    // no need to add token expiration here for now!
    if (token) {
      const currentTime = new Date();
      console.log(
        `Token generated for new user signup process at :-  ${currentTime.getHours()}Hr: ${currentTime.getMinutes()}Min:  ${currentTime.getSeconds()}Sec`
      );
    }
    res.status(201).json({ message: "Signup successful", token, newUser });
  } catch (error) {
    res.status(500).json({ message: "Error during signup", error });
  }
};

module.exports = { signupUser };

// {
//     expiresIn: process.env.JWT_EXPIRES,
//   }
