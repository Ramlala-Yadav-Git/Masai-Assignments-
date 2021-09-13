


const express = require("express")

const mongoose = require("mongoose")




const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/student", { useNewUrlParser: true, useUnifiedTopology: true })
}


const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },

    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "instructor",
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
        required: true
    }

}, {
    versionKey: false,
    timestamps: true
})

const Student = mongoose.model("student", studentSchema)


const batchSchema = new mongoose.Schema({
    name: { type: String },



}, {
    versionKey: false,
    timestamps: true
})

const Batch = mongoose.model("batch", batchSchema)


const instructorSchema = new mongoose.Schema({
    name: { Type: String }
}, {
    versionKey: false,
    timestamps: true
})

const Instructor = mongoose.model("instructor", instructorSchema)

const courseSchema = new mongoose.Schema({
    name: { type: String },



}, {
    versionKey: false,
    timestamps: true
})

const Course = mongoose.model("course", courseSchema)
const app = express()

app.use(express.json())

app.post("/students", async (req, res) => {
    const student = await Student.create(req.body)

    return res.status(201).json({ student })
})

app.get("/students", async (req, res) => {
    const students = await Student.find().lean().exec()

    return res.status(200).json({ students })
})




app.listen(1234, async () => {
    await connect()
    console.log('Hurray! listening to port no 1234');
})