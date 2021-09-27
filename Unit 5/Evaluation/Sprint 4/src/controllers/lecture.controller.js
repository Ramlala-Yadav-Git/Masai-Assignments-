
const express = require("express");

const { body, validationResult } = require('express-validator');

const router = express.Router();

const protect = require("../middlewares/protect")
const authorise = require("../middlewares/authorise")


const User = require("../models/user.model")


const Lecture = require("../models/lecture.model")

const fs = require("fs")

const uploads = require("../utils/fileuploads")

router.post("/", authorise(["admin"]), uploads.array("profile_photo_url", 5), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const files = req.files.map((file) => file.path)
    const lecture = await Lecture.create({
        user: req.body.user,
        profile_photo_url: files
    })


    return res.status(201).json({ data: lecture })
})


router.get("/", async (req, res) => {
    if (!req.body.token) {
        return res
            .status(400)
            .json({ status: "failed", message: "User is not logged in" });
    }
    const posts = await Lecture.find().populate({ path: "user" }).lean().exec();
    return res.status(200).json({ posts });
});


router.get("/:id", async (req, res) => {
    if (!req.body.token) {
        return res
            .status(400)
            .json({ status: "failed", message: "User is not logged in" });
    }
    const posts = await Lecture.findById(req.params.id).populate({ path: "user" }).lean().exec();
    return res.status(200).json({ posts });
});
router.delete("/:id", async (Req, res) => {

    const lecture = await Lecture.findById(req.params.id).lean().exec()

    lecture.profile_photo_url.map((item) => {
        fs.unlink(item, function (err) {
            if (err) throw err
        })
    })

    const user = await Lecture.findByIdAndDelete(req.params.id).lean().exec()

    return res.status(200).json({ data: user })
})

module.exports = router;