const UserModel = require("../models/user.models");

const findUserByEmail = async (email) => {
  return await UserModel.findOne({ email });
};

const createUser = async (username, email, password) => {
  return await UserModel.create({ username, email, password });
};

module.exports = { findUserByEmail, createUser };
