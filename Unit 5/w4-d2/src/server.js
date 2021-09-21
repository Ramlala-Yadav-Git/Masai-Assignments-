


const express = require('express')

require('dotenv').config()
const connect = require("./configs/db")

const { register, login } = require("./controllers/auth.controller")
const app = express()

app.post("/register", register)
app.post("/login", login)

app.listen(process.env.SERVER_PORT, async () => {
    await connect()
    console.log("Hurray! listening to port 1234");
})