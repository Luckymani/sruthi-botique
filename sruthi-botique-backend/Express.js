const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const db = require("./configurations/mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/user", require("./routes/login.js"));
app.post("/user", require("./reutes/register.js"));

app.listen(port, (err) => {
	console.log("succesfully running on port:", port);
});
