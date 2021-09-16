

const express = require('express')
const User = require('../models/user.model')

const router = express.Router()
const { body, validationResult } = require('express-validator')


router.post('/',
    body("first_name").isLength({ min: 1 }).withMessage("first name is required"),
    body("last_name").isLength({ min: 1 }).withMessage("last name is required"),
    body("email").isEmail().withMessage("email is required and should be valid"),
    body("gender").isLength({ min: 3 }).withMessage("gender should be male , female or other is required"),
    body("age").isLength({ min: 1, max: 100 }).withMessage("age is required and should be in between 1 to 100"),
    body("pincode").isLength({ min: 6, max: 6 }).withMessage("pincode should be exact six digits"),


    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ data: errors.array() })
        }
        const user = await User.create(req.body)

        res.status(201).json({ data: user })
    })

module.exports = router
