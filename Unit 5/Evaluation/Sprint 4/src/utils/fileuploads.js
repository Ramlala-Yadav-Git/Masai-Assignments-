const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, "../uploads"))
    },
    filename: function (req, file, callback) {
        // console.log(file)const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        callback(null, uniqueSuffix + file.originalname);

    },
})
const fileFilter = function (req, file, callback) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
        callback(null, true)
    }
    else {
        callback(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter,
})
module.exports = upload