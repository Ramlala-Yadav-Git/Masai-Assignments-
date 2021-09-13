


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

    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
        required: true
    },

    batchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true
    }

}, {
    versionKey: false,
    timestamps: true
})

const Student = mongoose.model("student", studentSchema)


const batchSchema = new mongoose.Schema({
    name: { type: String, required: true },



}, {
    versionKey: false,
    timestamps: true
})

const Batch = mongoose.model("batch", batchSchema)


const instructorSchema = new mongoose.Schema({
    name: { type: String, required: true }
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
    const students = await Student.find().lean().populate("courseId").populate("instructorId").populate("batchId").exec()

    return res.status(200).json({ students })
})
app.get("/students/age", async (req, res) => {
    const students = await Student.find({ age: { $gt: 18 } }).lean().exec()

    return res.status(200).json({ students })
})
app.get("/students/course", async (req, res) => {
    const students = await Student.find({ "courseId": "613f1bc81d5c2d7714de4591" }).lean().exec()

    return res.status(200).json({ students })
})
app.get("/students/men", async (req, res) => {
    const totalMen = await Student.find({ "gender": "male" }).countDocuments().lean().exec()

    return res.status(200).json({ totalMen })
})
app.get("/students/women", async (req, res) => {
    const totalWomen = await Student.find({ "gender": "female" }).countDocuments().lean().exec()

    return res.status(200).json({ totalWomen })
})
app.get("/students/total", async (req, res) => {
    const totalStudents = await Student.find().countDocument().lean().exec()

    return res.status(200).json({ totalStudents })
})
app.get("/students/batch", async (req, res) => {
    const s1 = await Student.find({ "batchId": "613f1c091d5c2d7714de4594" }).countDocuments().lean().exec()
    const s2 = await Student.find({ "batchId": "613f1c131d5c2d7714de4596" }).countDocuments().lean().exec()
    const s3 = await Student.find({ "batchId": "613f290688760a55d8df8e5b" }).countDocuments().lean().exec()
    let maxBatchStudent = Math.max(s1, s2, s3)

    return res.status(200).json({ maxBatchStudent })
})
app.get("/students/instructor", async (req, res) => {
    const s1 = await Student.find({ "instructorId": "613f2da31b3ac4722c239ae8" }).lean().exec()
    const s2 = await Student.find({ "instructorId": "613f2caf7afa0984e8136f3f" }).lean().exec()
    const s3 = await Student.find({ "instructorId": "613f1d00028dd870e0396861" }).lean().exec()
    let max = Math.max(s1.length, s2.length, s3.length)
    let a;
    if (s1.length == max) {
        a = s1;
    }
    else if (s2.length == max) {
        a = s2;
    }
    else {
        a = s3
    }
    let instructorName = await Instructor.find({ "instructorId": a[0].instructorId }).lean().exec()


    return res.status(200).json({ instructorName, a, s2, s3 })
})
app.post("/batchs", async (req, res) => {
    const batch = await Batch.create(req.body)

    return res.status(201).json({ batch })
})
app.get("/batchs", async (req, res) => {
    const batch = await Batch.find().lean().exec()

    return res.status(200).json({ batch })
})

app.post("/courses", async (req, res) => {
    const course = await Course.create(req.body)

    return res.status(201).json({ course })
})

app.get("/courses", async (req, res) => {
    const course = await Course.find().lean().exec()

    return res.status(200).json({ course })
})

app.post("/instructors", async (req, res) => {
    const instructor = await Instructor.create(req.body)

    return res.status(201).json({ instructor })
})

app.get("/instructors", async (req, res) => {
    const instructor = await Instructor.find().lean().exec()

    return res.status(200).json({ instructor })
})



app.listen(1234, async () => {
    await connect()
    console.log('Hurray! listening to port no 1234');
})