const express = require("express");
const User = require("../models/user.model");
const fs = require("fs");
const router = express.Router();

const upload = require("../utils/fileUpload");

router.post("/", upload.single("profile_pic"), async (req, res) => {
    const user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        profile_pic: req.file.path,
    });

    return res.status(201).json({ data: user });
});
router.get("/", async (req, res) => {
    const user = await User.find().lean().exec();
    return res.status(200).json({ data: user });
});
router.patch("/:id", upload.single("profile_pic"), async (req, res) => {
    const temp = await User.findById(req.params.id).lean().exec();
    if (req.path) {
        fs.unlink(temp.profile_pic, function (err) {
            if (err) throw err;
            console.log("File deleted!");
        });
        req.body.profile_pic = req.file.path;
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        .lean()
        .exec();
    return res.status(200).json({ data: user });
});

router.delete("/:id", async (req, res) => {
    const temp = await User.findById(req.params.id).lean().exec();
    fs.unlink(temp.profile_pic, function (err) {
        if (err) throw err;
        console.log("File deleted!");
    });
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).json({ data: user });
});

module.exports = router;