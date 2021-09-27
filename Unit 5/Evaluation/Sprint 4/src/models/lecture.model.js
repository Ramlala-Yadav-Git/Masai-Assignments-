
const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    profile_photo_url: [{ type: String, required: true }]
}
    , {
        versionKey: false,
        timestamps: true
    })

const Lecture = mongoose.model("lecture", lectureSchema)