
const express = require("express");

const { body, validationResult } = require('express-validator');

const router = express.Router();

const protect = require("../middlewares/protect")
const authorise = require("../middlewares/authorise")

const Post = require("../models/post.model")

router.post("/",

    body("title").isLength({ min: 1 }).withMessage("Please add titlefor the post"),

    body("body").isLength({ min: 1 })
        .withMessage("Please add body for the post"),

    protect,

    authorise(["admin"]),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const post = await Post.create(req.body);
        return res.status(201).json({ post });
    }



);


router.get("/", async (req, res) => {
    if (!req.body.token) {
        return res
            .status(400)
            .json({ status: "failed", message: "User is not logged in" });
    }
    const posts = await Post.find().populate({ path: "user" }).lean().exec();
    return res.status(200).json({ posts });
});

module.exports = router;

