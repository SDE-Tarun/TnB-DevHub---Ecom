const bcrypt = require("bcryptjs");

const hashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};
const comparePassword = async (password, hashPassword) => {
  try {
    if (typeof password !== "string" || typeof hashPassword !== "string") {
      console.log("Invalid type of passwords");
      return false;
    }
    return await bcrypt.compare(password, hashPassword);
  } catch (error) {
    console.log("Error in password comparing!", error.message);
    return false;
  }
};

module.exports = { hashedPassword, comparePassword };
