// const UserModel = require("../../models/user.models");
const { findUserByUsername } = require("../../utils/User.Db.Operations");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const { generateToken, decodeToken } = require("../../utils/jwt.operations");
const { hashedPassword } = require("../../utils/bcrypt.operations");

const forgetPassword = async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ message: "Please provide username" });
    }
    const checkUser = await findUserByUsername(username);
    if (!checkUser) {
      return res
        .status(404)
        .json({ message: "User not found, please register" });
    }
    const token = generateToken(checkUser._id, checkUser.email);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.MY_GMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const reciever = {
      from: "ComfyHeaven",
      to: checkUser.email,
      subject: "Password Reset Request",
      text: `Click on this link to generate your new password \n ${process.env.FRONTEND_USER_URI}/reset-password/${token}`,
    };
    // i do not have to send this backend user uri instead of this i have to send them the frontend uri, so that when the user form their mail clicks on this link
    // they are redirected towards the frontend and then on the frontend have a function that handles the reset password page functionality and upon saving the new password
    // this frontend reset password should redirect the user towards the backend and then from the backend the backend will verify the token and create a new password and save it to the database
    // this will conclude the procedure of password resetting completely and efficiently

    // the frontend function should first show the user a password reset page and from there the frontend mechanism should fetch the token from the params of the link on the mail
    // upon submitting the new password, the frontend should then request the backend with the token and the new password

    // need to work on this functionality post the sprint 1 delivery

    await transporter.sendMail(reciever);

    return res.status(200).json({
      message: "Password reset link successfully sent on your email account",
    });
  } catch (error) {
    console.log("Error in catch block", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    if (!password) {
      return res
        .status(404)
        .json({ message: "New password not found, process termination" });
    }
    const decode = decodeToken(token);
    if (!decode) {
      return res.status(401).json({ message: "Unauthorized token" });
    }
    const user = await findUserByEmail(decode.email);

    const newHashedPassword = await hashedPassword(password);
    user.password = newHashedPassword;
    await user.save();

    return res.status(201).json({ message: "Password reset successful" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { forgetPassword, resetPassword };
