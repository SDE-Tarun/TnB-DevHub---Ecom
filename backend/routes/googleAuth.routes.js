const express = require("express");
const router = express.Router();

const {
  loginPage,
  callback,
} = require("../controllers/googleAuth/googleAuth.controller");

// route for redirecting to google login page
router.get("/login", loginPage);
// very important for integration
// need to handle the callback url from developer.google.console website
// change details form the Oauth credentials part

// route for handling google auth callback
router.get("/callback", callback);

module.exports = router;
