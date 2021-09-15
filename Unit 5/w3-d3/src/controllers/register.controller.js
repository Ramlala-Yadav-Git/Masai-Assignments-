
const express = require('express')
const Register = require('../models/register.model')
const router = express.Router()
const transporter = require("../config/mail")

router.post("/", async (req, res) => {
    const body = await Register.create(req.body);
    console.log(body)

    await transporter.sendMail({
        from: 'Ramlala Yadav', // sender address
        to: body.email, // list of receivers
        subject: `Welcome to ABC system ${body.first_name}  ${body.last_name}`, // Subject line
        text: `Hey, welocme ${body.first_name}  ${body.last_name}`, // plain text body
        html: `<p>Hey, welocme ${body.first_name}  ${body.last_name}</p>`, // html body
    });


    await transporter.sendMail({
        from: 'Ramlala Yadav', // sender address
        to: "admin @1, admin @2, admin @3, admin @4, admin @5", // list of receivers

        subject: `A new user  ${body.first_name}  ${body.last_name} just registered`, // Subject line
        text: `Hey, a new user ${body.first_name}  ${body.last_name} just registered`, // plain text body
        html: "<h1></h1>", // html body
    });


    res.status(201).json({ body })



})

module.exports = router