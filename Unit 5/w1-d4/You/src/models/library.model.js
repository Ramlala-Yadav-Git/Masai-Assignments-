
const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    booksIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Books" }]
}, {
    versionKey: false,
    timestamps: true
})

const Section = mongoose.model("Section", sectionSchema)

const booksSchema = new mongoose.Schema({
    name: { type: String, required: true },
    body: { type: String, required: true },
    sectionIds: { type: mongoose.Schema.Types.ObjectId, ref: "Section" }

}, {
    versionKey: false,
    timestamps: true
})
const Books = mongoose.model("Books", booksSchema)


const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    booksIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Books" }]
}, {
    versionKey: false,
    timestamps: true
})
const Author = mongoose.model('Author', authorSchema)

module.exports = {
    Section,
    Books,
    Author
}