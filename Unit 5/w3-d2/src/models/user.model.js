const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: false },
    age: { type: Number, required: true },

}, {
    versionKey: false,
    timestamps: true
})

const User = mongoose.model("user", userSchema)


module.exports = User