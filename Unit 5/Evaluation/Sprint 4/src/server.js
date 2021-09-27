
const express = require("express")
const connect = require("./configs/db")
require("dotenv").config()

const body = require("express-validator")
const { register, login } = require("./controllers/auth.controller")
const userController = require("./controllers/user.controller")


const app = express()
app.use(express.json());
app.use('/users', userController)


app.post("/signup",
    body("name").isLength({ min: 1 }).withMessage("Please enter your name"),
    body("password").isLength({ min: 5 }).withMessage("Please enter a valid password"),
    body("email").isEmail().withMessage("Please enter valid email address"),
    register
)

app.post("/signin",
    body("name").isLength({ min: 1 }).withMessage("Please enter your name"),
    body("password").isLength({ min: 5 }).withMessage("Please enter a valid password"),
    body("email").isEmail().withMessage("Please enter valid email address"),
    login
)





const start = async () => {
    await connect()

    app.listen(process.env.SERVER_PORT, () => {
        console.log("!Hurray connection to the port no 2345");
    })
}

module.exports = start