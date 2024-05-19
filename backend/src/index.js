const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;

dotenv.config();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("and Connect DB SuccessFully"))
  .catch("and Cant connect with DB");

app.listen(port, () => {
  console.log(`Server is Start on Port ${port}`);
});
