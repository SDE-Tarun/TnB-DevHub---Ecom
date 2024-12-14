const express = require("express");
const router = express.Router();
const { signupUser } = require("../controllers/user.controller");
// user signup process api
router.post("/signup", signupUser);

module.exports = router;

// add data validation module also
