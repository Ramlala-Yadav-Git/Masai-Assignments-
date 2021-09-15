const express = require('express')
const Post = require("../models/post")
const router = express.Router()


router.post('', async (req, res) => {
    const comment = await Comment.create(req.body)
    return res.status(201).json({ comment })
})
router.get('', async (req, res) => {
    const comment = await Comment.find().populate('postId').lean().exec()
    return res.status(200).json({ comment })
})
router.get('/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id).populate('postId').lean().exec()
    return res.status(200).json({ comment })
})
router.patch('/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id, req.body, { new: true });
    return res.status(200).json({ comment })
})
router.delete('/:id', async (req, res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    return res.status(200).json({ comment })
})

module.exports = router