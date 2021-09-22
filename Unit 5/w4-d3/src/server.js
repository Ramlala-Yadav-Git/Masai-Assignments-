const express = require("express");

require("dotenv").config();

const { body } = require("express-validator");

const connect = require("./config/db");

const { register, login } = require("./controllers/auth.controller");

const app = express();
app.use(express.json());

const postController = require("./controllers/posts.controller");
const userController = require("./controllers/user.controller");

app.use("/posts", postController);
app.use("/users", userController);

app.post(
	"/signup",
	body("name").isLength({ min: 1 }).withMessage("Enter name"),
	body("password")
		.isLength({ min: 8 })
		.withMessage("Enter password with min 8 characters"),
	body("email")
		.isLength({ min: 1 })
		.withMessage("Enter email address")
		.isEmail()
		.withMessage("Invalid email address"),
	register
);
app.post(
	"/signin",
	body("password")
		.isLength({ min: 8 })
		.withMessage("Enter password with min 8 characters"),
	body("email")
		.isLength({ min: 1 })
		.withMessage("Enter email address")
		.isEmail()
		.withMessage("Invalid email address"),
	login
);

const start = async () => {
	await connect();
	app.listen(process.env.SERVER_PORT, () => {
		console.log("Hurray! listening to port no", process.env.SERVER_PORT);
	});
};

module.exports = start;
