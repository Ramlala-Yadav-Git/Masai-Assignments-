const express = require("express");
const app = express()
const cors = require('cors')

const connect = require("./config/db");
const userController = require("./controllers/user.controller")
const userRegister = require('./controllers/register.controller')
app.use(cors())
app.use(express.json())
app.use("/users", userController)
app.use("/users/register", userRegister)

const start = async () => {
    await connect()

    app.listen(1234, () => {
        console.log("Hurray! listening to port no 1234");
    })
}

module.exports = start