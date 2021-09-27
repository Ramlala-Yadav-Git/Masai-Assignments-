
const express = require('express')

const { Section, Books, Author } = require('../models/library.model')

const app = express()
const router = express.Router()

router.post('/', async (req, res) => {

    const book = await Books.create(req.body);

    return res.status(201).json({ book })

})
router.get('/', async (req, res) => {
    const books = await Books.find().populate("Section").lean().exec()

    return res.status(200).json({ books })

})
router.post("/section", async (req, res) => {
    console.log("hello");
    const section = await Section.create(req.body)
    return res.status(201).json({ section })
})
router.get("/section", async (req, res) => {
    console.log("hello");
    const section = await Section.find().lean().populate("Books").exec()
    return res.status(201).json({ section })
})


module.exports = router;