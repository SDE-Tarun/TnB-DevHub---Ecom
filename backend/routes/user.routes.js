const express = require("express");
const router = express.Router();
const { signupUser } = require("../controllers/auth/signup.controller");
const { loginUser } = require("../controllers/auth/login.controller");

// user signup process API
router.post("/signup", signupUser);

// user login process API
router.post("/login", loginUser);

module.exports = router;

// add data validation module also --later
