const User = require("../models/user.model")

const register = async (req, res) => {
    // check if the email provided already exists in the database


    const user = await User.findOne({ email: req.body.email }).lean().exec()

    // if yes then throwm an exception with status code of 400

    if (user) return res.status.send({ status: "failled" })


    // if no then create a uset with the informaion provided in




    // encrypt the password and save the user (hash the password and save the user)



    // create a token for that user


    // we return the response with the user and token
    res.send("register")
}
const login = (req, res) => {
    res.send("login")
}

module.exports = { register, login }
