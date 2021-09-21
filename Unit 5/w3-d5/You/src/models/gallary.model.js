const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        image_urls: [{ type: String, required: true }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Gallery = mongoose.model("gallery", gallerySchema);

module.exports = Gallery;