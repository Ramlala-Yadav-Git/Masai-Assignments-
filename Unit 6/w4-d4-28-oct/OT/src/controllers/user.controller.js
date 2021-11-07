const express = require("express")

const router = express.Router()

const User = require("../models/user.model")

router.get("/", async (req, res) => {
    const users = await User.find().populate().lean().exec();
    return res.status(200).json({ users })
})




module.exports = router

