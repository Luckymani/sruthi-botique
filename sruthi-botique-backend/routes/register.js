const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const tempdata = require("../models/tempdata");

router.post("/", async (req, res) => {
	try{
	const { username, email, password } = req.body;

	const user = await tempdata.findOne({ email: email });
 	if (!user) {
		tempdata.create({
			username: username,
			email: email,
			password: password,
			googleAuth: false,
			OTP: Math.floor(100000 + Math.random() * 900000),
		});
		return res.status(201).send({type:'success',message:'check your mail for activation link'})
	} else {
		if (user.googleAuth) {
			//send to create password
		} else {
			return res.status(203).send({type:'success',message:'already have an Account'})
		}
	}
	return res.status(200).send('')
	}
	catch (err) {
		console.log(err.message)
		return res.status(500).send({ type: "error", message: err.message });
	}
	
});

module.exports = router;
