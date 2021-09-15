const express = require('express')
const res = require('express/lib/response')
const mongoose = require('mongoose')

const connect = require("./config/db")

const userController = require("./controllers/user.controller")
const postController = require("./controllers/post.controller")
const tagController = require("./controllers/tag.controller")
const commentController = require("./controllers/comment.controller")


app.use("/user", userController)
app.use("/tags", tagController)
app.use("/post", postController)
app.use("/comment", commentController)




const app = express()
app.use(express.json())




// get all comments for a post 

// app.get('/posts/:id/comments', async (req, res) => {
//     const comments = await Comment.find({ postId: req.params.id }).lean().exec()
//     const post = await Post.findById(req.params.id).lean().exec()

//     return res.status(200).json({ comments, post })
// })

app.listen(1234, async () => {
    await connect()
    console.log('Hurray! listening to port no 1234');
})