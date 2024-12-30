const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");
dotenv.config();

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
  try {
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture, sub } = payload;

    // check or create user
    let user = await UserModel.findOne({ email });
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
    res.json({ token: jwtToken });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "true", message: "Internal server error" });
  }
};

module.exports = {
  loginPage,
  callback,
};
