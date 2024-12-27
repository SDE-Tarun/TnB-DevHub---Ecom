const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("The database is connected successfully");
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
}

module.exports = connectToDatabase;
