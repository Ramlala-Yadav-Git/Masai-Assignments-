
const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    city: { type: String, required: true }


}, {
    timestamps: true,
    versionKey: false

})

const User = mongoose.model("user", userSchema)

module.exports = User