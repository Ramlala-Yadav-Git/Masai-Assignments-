


const express = require("express")

const mongoose = require("mongoose")

const app = express()


const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/student", { useNewUrlParser: true, useUnifiedTopology: true })
}


const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },




}, {
    versionKey: false,
    timestamps: true
})

const Student = mongoose.model("student", studentSchema)


const batchSchema = new mongoose.Schema({
    name: { type: String },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true
    },


})

const Batch = mongoose.model("batch", batchSchema)


const instructorSchema = new mongoose.Schema({
    name: { Type: String }
})

const Instructor = mongoose.model("instructor", instructorSchema)

const courseSchema = new mongoose.Schema({
    name: { type: String },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true
    }

})

const Course = mongoose.model("course", courseSchema)

app.listen(1234, async () => {
    await connect()
    console.log('Hurray! listening to port no 1234');
})