const express = require("express");
const router = express.Router();

const { loginPage, callback } = require("../controllers/googleAuth");

// route for redirecting to google login page
router.get("/login", loginPage);

// route for handling google auth callback
router.get("/callback", callback);

module.exports = router;
