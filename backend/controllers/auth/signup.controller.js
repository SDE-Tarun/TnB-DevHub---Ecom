const { generateToken } = require("../../utils/tokenGenerator");
const { hashedPassword } = require("../../utils/bcrypt.operations");
const {
  findUserByEmail,
  createUser,
} = require("../../utils/User.Db.Operations");
const { validateSignupData } = require("../../utils/validateAuthData");

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const { valid, message } = validateSignupData(username, email, password);
    if (!valid) {
      return res.status(400).json({ message });
    }
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await hashedPassword(password);
    const newUser = await createUser(username, email, hashPassword);
    const token = generateToken(newUser._id);
    if (token) {
      const currentTime = new Date();
      console.log(
        `Token generated for new user signup process at :-  ${currentTime.getHours()}Hr: ${currentTime.getMinutes()}Min:  ${currentTime.getSeconds()}Sec`
      );
    }
    res.status(201).json({ message: "Signup successful", token, newUser });
  } catch (error) {
    console.log("Error during the signup process", error);
    res.status(500).json({ message: "Error during signup", error });
  }
};

module.exports = { signupUser };
