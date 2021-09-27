const User = require("../models/user.model")

const jwt = require("jsonwebtoken")

const { validationResult } = require("express-validator")

const newToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY)
}

const register = async (req, res) => {
    // checking if the email is already exists in the database
    // console.log("ram");
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    let user;
    try {
        user = await User.findOne({ email: req.body.email }).exec()

        // if user is present then throw an exception error with status code of 400 
        if (user) {
            return res.status(400).send({
                status: "failed",
                message: "Please try with a different eamil and password"
            })
        }

        /// if no then create a  user with the information provided by the user in the request body
        console.log("user", req.body);
        user = await User.create(req.body)
        if (!user) {
            return res.status(400)
                .send({ status: "Failed", message: "Please try again later with valid inputs" })
        }
        const token = newToken(user);
        return res.status(201).json({ token })

    }
    catch (err) {
        return res.status(500).send({ status: "failed", message: "Something went wring please try again" })
    }
    // we will return the response with the user and token

}

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        let user = await User.findOne({ email: req.body.email }).exec();
        if (!user)
            return res
                .status(400)
                .send({ status: "failed", message: "Please try again later" })

        const match = user.checkPassword(req.body.password);

        if (!match) {
            return res
                .status(400)
                .send({ status: "failsed", message: "Please try again later" })
        }
        const token = newToken(user);
        return res.status(201).json({ token: token });
    }
    catch (e) {
        return res
            .status(500)
            .send({ status: "failed", message: "Please try again later" })
    }
}
module.exports = { register, login }