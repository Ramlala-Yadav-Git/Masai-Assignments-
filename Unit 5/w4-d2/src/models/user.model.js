

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {},
    lastName: {},
    email: {}

}) =
    userSchema.pre("save", (next) => {

        if (!this.isModified("password")) return next;

        const passwprd = this.password
    })

module.exports = mongoose.model('user', userSchema) 