

const express = require('express')

const app = express()
const user = require("./users.json")
const users = user.users;
app.use(express.json())

app.get("/", (req, res) => {

    res.send("Welcome to Home Page")
})
app.get("/users", (req, res) => {



    res.send(users)
})
app.post("/users", (req, res) => {

    const body = req.body

    users.push(body)


    res.send(users)
})
app.patch("/users/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body
    const mapData = users.map((e) => {
        return e.id === Number(id) ? body : e
    })
    res.send(mapData)
})
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const filterData = users.filter((el) => {
        return el.id !== Number(id)
    })
    res.send(filterData)
})


app.listen(1234, () => {
    console.log("listhennig to port 1234");
})