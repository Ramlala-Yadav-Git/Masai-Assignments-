
const express = require("express")


const app = express()




const start = async () => {

    app.listen(process.env.SERVER_PORT, () => {
        console.log("!Hurray connection to the port no 2345");
    })
}