const { validateLoginData } = require("../../utils/validateAuthData");
const { findUserByUsername } = require("../../utils/User.Db.Operations");
const { comparePassword } = require("../../utils/bcrypt.operations");
const { generateToken } = require("../../utils/tokenGenerator");

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const { valid, message } = validateLoginData(username, password);
    if (!valid) {
      return res.status(400).json({ message });
    }
    const user = await findUserByUsername(username);
    if (!user) {
      console.log(user);
      return res.status(404).json({ message: "User not found" });
    }
    console.log(user);
    if (!user.password) {
      console.log("Undefined user password", user.password);
      return res.status(500).json({ message: "Invalid user data" });
    }
    // console.log(user.password);
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Credentials do not match" });
    }
    const token = generateToken(user._id);

    res.status(200).json({
      message: "User logged in successfully",
      token,
      user: { userId: user._id, username: user.username },
    });
  } catch (error) {
    console.log("Error in login, catch block speaking", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

module.exports = { loginUser };
