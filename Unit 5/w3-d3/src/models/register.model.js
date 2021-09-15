

const mongoose = require('mongoose')

const registerSchema = mongoose.Schema({
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    email: { type: String, required: false },




})

const Register = mongoose.model("register", registerSchema)

module.exports = Register;