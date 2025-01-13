const express = require("express");
const router = express.Router();
const { signupUser } = require("../controllers/auth/signup.controller");
const { loginUser } = require("../controllers/auth/login.controller");
const {
  forgetPassword,
  resetPassword,
} = require("../controllers/auth/password.operations");

// user signup process API
router.post("/signup", signupUser);

// user login process API
router.post("/login", loginUser);

router.post("/forget-password", forgetPassword); // only send the email of the user
router.post("/reset-password/:token", resetPassword); // token is already provided in the params, just send the password down to backend

// reset password is initialized via the mail, when the user clicks on the provided link
// it redirects the user on the reset-password controller

module.exports = router;
