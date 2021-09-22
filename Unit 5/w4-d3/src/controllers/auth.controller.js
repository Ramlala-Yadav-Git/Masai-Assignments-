const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const newToken = (user) => {
	return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
	// check if the email provided already exists in the database
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	let user;
	try {
		user = await User.findOne({ email: req.body.email }).lean().exec();

		// if yes throw an exception with status code of 400
		if (user)
			return res.status(400).send({
				status: "failed",
				message: "Please try with a different email and password",
			});

		// if no then create a user with the information provided in the request body

		user = await User.create(req.body);
		if (!user) {
			return res
				.status(400)
				.send({ status: "failed", message: "Please try again later 28" });
		}
		// hash the password and save the user

		//create a token for that user
		const token = newToken(user);
		console.log(token);
		return res.status(201).json({ token });
	} catch (e) {
		return res
			.status(500)
			.send({ status: "failed", message: "Please try again later 39" });
	}

	// we will return the respone with the user and token
};

const login = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		let user = await User.findOne({ email: req.body.email }).exec();
		if (!user)
			return res
				.status(400)
				.send({ status: "failed", message: "Please try again later" });

		const match = user.checkPassword(req.body.password);

		if (!match)
			return res
				.status(400)
				.send({ status: "failed", message: "Please try again later" });

		const token = newToken(user);
		return res.status(201).json({ token: token });
	} catch (e) {
		return res
			.status(500)
			.send({ status: "failed", message: "Please try again later" });
	}
};

module.exports = { register, login };
