

const express = require('express')

const mongoose = require('mongoose')

const app = express()


const connect = () => {

    return mongoose.connect("mongodb://127.0.0.1:27017/movie", {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

app.use(express.json())

const userSchema = new mongoose.Schema({
    movieName: { type: String },
    movieGenre: { type: String },
    productionYear: { type: Number },
    budget: { type: Number }

}, {
    versionKey: false,
    timestamps: true
})

const User = mongoose.model("movie", userSchema)

//get all user
app.get('/movies', async (req, res) => {
    try {

        const users = await User.find().lean().exec()   //thenable

        res.send(users)
    }
    catch (err) {
        res.status(400).json({ status: "error", message: err.message })
    }
})

app.post('/movies', async (req, res) => {
    try {

        const user = await User.create(req.body)

        res.status(201).json({ user })
    }
    catch (err) {
        res.status(400).json({ status: "error", message: err.message })
    }
})
app.patch("/movies/:id", async (req, res) => {
    try {

        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({ user })
    }
    catch (err) {
        res.status(400).json({ status: "error", message: err.message })
    }
})

app.get("/movies/:id", async (req, res) => {
    try {

        const user = await User.findById(req.params.id).lean().exec();
        res.status(200).json({ user })
    }
    catch (err) {
        res.status(400).json({ status: "error", message: err.message })
    }
})
app.delete("/movies/:id", async (req, res) => {
    try {


        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json({ user })
    }
    catch (err) {
        res.status(400).json({ status: "error", message: err.message })
    }

})
app.listen(1234, async () => {
    await connect()
    console.log("Litening to the server 1234");
})