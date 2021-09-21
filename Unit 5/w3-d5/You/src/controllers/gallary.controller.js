const express = require("express");
const User = require("../models/user.model");
const Gallery = require("../models/gallary.model");
const fs = require("fs");
const router = express.Router();

const upload = require("../utils/fileUpload");

router.post("/", upload.array("image_urls", 5), async (req, res) => {
    const files = req.files.map((file) => file.path);
    const gallery = await Gallery.create({
        user: req.body.user,
        image_urls: files,
    });

    return res.status(201).json({ data: gallery });
});
router.get("/", async (req, res) => {
    const gallery = await Gallery.find().lean().exec();
    return res.status(200).json({ data: gallery });
});

router.delete("/:id", async (req, res) => {
    const temp = await Gallery.findById(req.params.id).lean().exec();
    temp.image_urls.map((item) => {
        fs.unlink(item, function (err) {
            if (err) throw err;
            console.log("File deleted!");
        });
    });
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).json({ data: user });
});

module.exports = router;