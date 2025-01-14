const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");
dotenv.config();
const { generateToken } = require("../../utils/jwt.operations");

const UserModel = require("../../models/user.models");

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

const loginPage = (req, res) => {
  const authUrl = client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
  });
  res.json({ authUrl });
};

const callback = async (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.status(400).json({ message: "Invalid request" });
  }
  try {
    const { tokens } = await client.getToken(code);
    if (!tokens) {
      return res.status(404).json({ message: "Token not found" });
    }
    client.setCredentials(tokens);

    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    const payload = ticket.getPayload();
    if(!payload){
      return res.status(404).json({message:"Payload not found"})
    }
    const { email, name, picture, sub } = payload;

    // check or create user
    let user = await UserModel.findOne({ email });
    console.log("User already found", user);
    if (!user) {
      user = await UserModel.create({
        email,
        googleId: sub,
        name: name,
        profilePic: picture,
        authMethod: "google",
      });
    }

    const jwtToken = generateToken(user._id, email);
    res.status(200).json({ token: jwtToken, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "true", message: "Internal server error" });
  }
};

module.exports = {
  loginPage,
  callback,
};
