const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const tempdata = require("../models/tempdata");

router.post("/login", async (req, res) => {
	const { username, email, password } = req.body;

	const user = await tempdata.findOne({ email: email });

	// if () {
	// 	return console.log(err);
	// } else if (!user) {
	// 	tempdata.create({
	// 		username: username,
	// 		email: email,
	// 		password: password,
	// 		googleAuth: false,
	// 		OTP: Math.floor(100000 + Math.random() * 900000),
	// 	});
	// } else {
	// 	if (user.googleAuth) {
	// 		//send to create password
	// 	} else {
	// 		return res.redirect("/");
	// 	}
	// }
});

module.exports = router;
