
const mongoose = require("mongoose")

const connect = () => {

    return mongoose.connect("mongodb://127.0.0.1:27017/auth", {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}

module.exports = connect