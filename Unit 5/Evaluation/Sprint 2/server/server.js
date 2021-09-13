


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
    course: { type: String, required: true }



}, {
    versionKey: false,
    timestamps: true
})

const Student = mongoose.model("student", studentSchema)


app.listen(1234, async () => {
    await connect()
    console.log('Hurray! listening to port no 1234');
})