const express = require('express')


const connect = require('../config/db')

const app = express()
app.use(express.json())
const usersController = require('../src/controllers/user.controller')

app.use('/users', usersController)
const start = async () => {
    await connect()

    app.listen(1234, () => {
        console.log("Hurray! listening to port no 1234");
    })
}

module.exports = start