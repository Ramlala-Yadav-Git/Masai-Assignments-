const express = require('express')
const Product = require('../models/product.model')
const router = express.Router()

const upload = require("../utils/fileUpload")
router.post('/single', upload.single("productImage"), async (req, res) => {
    console.log(req.file)
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image_urls: req.file.path
    })

    return res.status(201).json({ data: product })

})

router.post("/multiple", upload.any("productImage"), async (req, res) => {
    const files = req.files.map((file) => file.path);
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image_urls: files
    })
    return res.status(201).json({ data: product })

})

module.exports = router