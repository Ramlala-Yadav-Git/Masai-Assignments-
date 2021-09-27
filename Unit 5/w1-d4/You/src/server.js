const express = require("express")

const connect = require('./configs/db')


const app = express()
app.use(express.json())

const controller = require("./controllers/section.controller")

app.use("/book", controller)



const start = async () => {
    await connect();
    app.listen(1234, () => {

        console.log("Hurray connected to port no 1234");
    })
}

module.exports = start