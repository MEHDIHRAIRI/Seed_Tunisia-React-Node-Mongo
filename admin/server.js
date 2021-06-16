require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const ContactRoute = require("./Routes/Contact");

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/ContactUs", ContactRoute);
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
app.use(express.json());
app.listen(process.env.PORT || 5000, () => console.log("Server Started on Port 5000 !"));

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database !"));