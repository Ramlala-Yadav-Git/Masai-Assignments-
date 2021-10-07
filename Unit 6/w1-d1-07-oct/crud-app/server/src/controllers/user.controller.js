
const express = require("express")
const router = express.Router()
const User = require("../models/user.model")

router.get("/", async function (req, res) {



    try {

        var page = +req.query.page || 1;
        var size = +req.query.limit || 10;
        var age = req.query.age;
        var city = req.query.city;
        var gender = req.query.gender;
        var sort = req.query.sort || "asce";
        var to = (page - 1) * size;
        console.log(age, city, gender, sort)

        var data = await User.find().lean().exec()


        if (age !== "all") {
            data = data.filter((item) => item.age >= Number(age));
        }
        if (gender !== "all") {
            data = data.filter((item) => item.gender === gender);
        }
        if (city !== "all") {
            data = data.filter((item) => item.city === city);
            console.log(data)

        }
        if (sort) {
            if (sort === "asce") {
                data = data.sort((a, b) => a.age - b.age);
            } else if (sort === "desc") {
                data = data.sort((a, b) => b.age - a.age);
            }
        }
        const total = data.length;
        const pages = Math.ceil(total / 10);
        const from = page * 10;
        return res.status(200).json({
            count: total,
            pages,
            page,
            users: data.slice(to, from),
        });
    }
    catch (err) {
        console.log(err);
        return res.status(400).json("SOmething went wrong please try again ")
    }
})
router.get("/:id", async function (req, res) {
    const id = req.params.id;

    try {
        const user = await User.findOne({ _id: id }).lean().exec()
        if (!user) {
            return res.status(400).json("User dosen't exits")
        }

        return res.status(200).json({
            user: user
        })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json("Something went wrong please try again")
    }
})

router.post("/", async function (req, res) {
    const request = req.body;
    console.log(request)
    if (!request) {
        return res.status(400).json("Please add required data")
    }

    try {
        const user = await User.create(req.body);
        res.status(201).json({
            user: user,

        })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json("Something went wrong please tyr again")
    }
})

router.patch("/:id", async function (req, res) {
    const id = req.params.id
    // console.log(id)
    if (!id) {
        return res.status(400).json("Please add required data")
    }
    try {
        const isUser = await User.findOne({ _id: id }).lean().exec()
        if (!isUser) {
            return res.status(400).json("User dosen't exists")
        }
        // console.log(isUser)

        const name = req.body.name;
        const age = req.body.age;
        const gender = req.body.gender;
        const city = req.body.city;
        if (name) {
            const user = await User.updateOne({ _id: id }, { name: name })
        }
        if (age) {
            const user = await User.updateOne({ _id: id }, { age: age })

        }
        if (gender) {
            const user = await User.updateOne({ _id: id }, { gender: gender })

        }
        if (city) {
            const user = await User.updateOne({ _id: id }, { city: city })

        }
        const user = await User.findOne({ _id: id }).lean().exec()
        return res.status(201).json({
            user: user
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json("Somthing went wrong please try again")
    }
})
router.delete("/:id", async function (req, res) {

    try {
        const id = req.params.id
        const user = await User.remove({ _id: id }, { single: true })

        res.status(201).json({
            message: "user deleted successfully",
            user: user
        })

    }
    catch (err) {
        return res.status(400).json("Something went wrong please try again")
    }
})


module.exports = router