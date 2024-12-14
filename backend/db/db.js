const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("The database is connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = connectToDatabase;