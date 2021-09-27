const express = require("express");
const User = require("../models/user.model");
const fs = require("fs");
const router = express.Router();

const upload = require("../utils/fileuploads");

router.post("/", upload.single("profile_photo_url"), async (req, res) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        roles: req.body.roles,
        profile_photo_url: req.file.path,
    });

    return res.status(201).json({ data: user });
});
router.get("/", async (req, res) => {
    const user = await User.find().lean().exec();
    return res.status(200).json({ data: user });
});




module.exports = router