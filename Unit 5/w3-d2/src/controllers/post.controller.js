const express = require('express')
const Post = require("../models/post")
const router = express.Router()



router.post("", async (req, res) => {
    const post = await Post.create(req.body)
    return res.status(201).json({ post })

})
router.get("", async (req, res) => {
    const post = await Post.find().populate("userId").populate("tagsId").lean().exec()
    return res.status(200).json({ post })

})
router.get("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id).populate("userId").populate("tagsId").lean().exec()
    return res.status(200).json({ post })

})
router.patch("/:id", async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(200).json({ post })

})
router.patch("/:id", async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json({ post })

})

module.exports = router

