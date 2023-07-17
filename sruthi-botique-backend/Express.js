const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./configurations/mongoose");
const mongoose = require("mongoose");
const port = require("dotenv").config();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user/login", require("./routes/login.js"));
app.use("/user/register", require("./routes/register.js"));

app.listen(process.env.PORT, (err) => {
	console.log("succesfully running on port:", process.env.PORT);
});
