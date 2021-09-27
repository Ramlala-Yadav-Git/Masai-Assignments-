

const mongoose = require('mongoose')

const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, required: false }],


}, {
    timestamps: true,
    versionKey: false
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;
    next()
})
userSchema.methods.checkPassword = function (password) {
    const passwordHash = this.password;
    return bcrypt.compareSync(password, passwordHash)
}

const User = mongoose.model("user", userSchema)

module.exports = User