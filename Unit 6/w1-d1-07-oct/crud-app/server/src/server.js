

const express = require("express")
require('dotenv').config()
const connect = require("./configs/db")

const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())

const userController = require("./controllers/user.controller")

app.use("/users", userController)

const start = async () => {
    await connect()
    app.listen(process.env.SERVER_PORT, () => {
        console.log("server")
        console.log("!Hurray listening to port no", process.env.SERVER_PORT)
    })
}

module.exports = start