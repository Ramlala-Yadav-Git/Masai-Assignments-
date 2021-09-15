
const express = require('express')
const User = require('../models/user.model')
const router = express.Router()
const transporter = require("../config/mail")

router.get("/", async (req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;


    const offset = (page - 1) * size;
    const users = await User.find().skip(offset).limit(size).lean().exec();

    const totalPages = Math.ceil((await User.find().countDocuments().lean().exec()) / size)
    await transporter.sendMail({
        from: 'Ramlala Yadav', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Welcomr to ABC system", // Subject line
        text: "Hello I am Ramlala", // plain text body
        html: "<p>Hello world?</p>", // html body
    });
    res.status(200).json({ data: users, totalPages })



})

module.exports = router