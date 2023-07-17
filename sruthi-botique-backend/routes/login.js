const express = require("express");
const router = express.Router();
const tempdata = require("../models/tempdata.js");
const jwt = require("jwt-token");
router.post("/", async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await tempdata.findOne({ email, password });
		console.log(email, password);
		console.log(user);
		if (user) {
			const jwtToken = jwt.sign({ email: jwt.email, id: user._id });
			res.status(200).send({ type: "success", message: "user without google auth", info: { jwtToken } });
		} else {
			res.status(401).send({ type: "warning", message: "invalid credentials" });
		}
	} catch (err) {
		res.status(500).send({ type: "error", message: err.message });
	}
});

module.exports = router;
