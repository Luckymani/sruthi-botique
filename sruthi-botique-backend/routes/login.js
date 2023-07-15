const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const userdata = require("../models/userdata");

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	res.status(200).send({ username, password });
});

module.exports = router;
