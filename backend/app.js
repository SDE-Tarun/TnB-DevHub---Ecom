const express = require("express");

const cors = require('cors');

const app = express();
const connectToDatabase = require('./db/db')

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());

connectToDatabase();

app.get("/", (req, res) => {
  res.send("This is the homepage route 101");
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoute = require('./routes/user.routes')
app.use('/api/auth', userRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is up at \n http://localhost:${port}`);
});
