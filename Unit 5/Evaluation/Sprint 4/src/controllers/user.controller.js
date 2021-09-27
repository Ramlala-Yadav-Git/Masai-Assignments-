const express = require("express");
const User = require("../models/user.model");
const fs = require("fs");
const router = express.Router();

const upload = require("../utils/fileuploads");

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




module.exports = router