const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({

}, {
    timestamps: true,
    versionKey: false
})