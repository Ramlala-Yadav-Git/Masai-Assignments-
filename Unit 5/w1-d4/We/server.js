


const express = require('express')

const app = express()

app.use(express.json())
app.use(sayHello)

app.get('/users', function (req, res) {

    console.log("Getting user request");

})

function sayHello(req, res, next) {
    console.log("Hello from middleware");
    next()
    console.log('hello from after middleware');
}
function authincate(req, res, next) {
    const user = req.user;
    if (!user) {
        return res.send("You are not allowed")
    }
    return next()
}

app.listen(1234, function () {
    console.log('listening to the server 1234');
})