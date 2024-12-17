const UserModel = require("../models/user.models");

const findUserByEmail = async (email) => {
  return await UserModel.findOne({ email });
};

const findUserByUsername = async (username) => {
  return await UserModel.findOne({ username }).select("+password");
};

const createUser = async (username, email, password) => {
  return await UserModel.create({ username, email, password });
};

module.exports = { findUserByEmail, createUser, findUserByUsername };
