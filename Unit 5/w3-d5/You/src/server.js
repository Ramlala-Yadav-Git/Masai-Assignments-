const express = require("express");

const connect = require("./configs/db");

const app = express();
app.use(express.json());
const usersController = require("../src/controllers/user.controller");
const galleryController = require("../src/controllers/gallary.controller");

app.use("/users", usersController);
app.use("/gallery", galleryController);

const start = async () => {
    await connect();

    app.listen(1234, () => {
        console.log("Hurray! listening to port no 1234");
    });
};

module.exports = start;