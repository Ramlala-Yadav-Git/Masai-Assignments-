
const express = require("express")
const connect = require("./configs/db")


const app = express()




const start = async () => {
    await connect()

    app.listen(process.env.SERVER_PORT, () => {
        console.log("!Hurray connection to the port no 2345");
    })
}

module.exports = start