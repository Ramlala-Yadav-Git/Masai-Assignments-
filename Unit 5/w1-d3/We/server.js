
const express = require('express');

const app = express();
app.use(express.json())
app.get('/', (req, res) => {
    const name = req.query.name

    const a = "Get request hello"
    res.send({ name, a })

})
app.post("/users", (req, res) => {
    const body = req.body

    res.send(body)

})
app.get('/users/:id/:age', (req, res) => {
    const id = req.params.id
    res.send(id)

})
app.listen(12345, () => {
    console.log('lestening to nodemon');
})
