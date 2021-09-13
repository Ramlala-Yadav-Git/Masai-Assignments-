const express = require('express')
const res = require('express/lib/response')
const mongoose = require('mongoose')


const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/test")
}



const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: false },
    age: { type: Number, required: true },

}, {
    versionKey: false,
    timestamps: true
})

const User = mongoose.model("user", userSchema)
//post model
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    tagIds: [
        // { type: mongoose.Schema }
        { type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true },

    ]

}, {
    versionKey: false,
    timestamps: true
})

const Post = mongoose.model('post', postSchema)

//comment model 

const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true,

    }

}, {
    versionKey: false,
    timestamps: true
})
const Comment = mongoose.model("comment", commentSchema);

const tagSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Tag = mongoose.model("tag", tagSchema);
const app = express()
app.use(express.json())
// CRUD operations

//== FOr User

app.post('/users', async (req, res) => {
    const user = await User.create(req.body)

    return res.status(201).json({ user })
})


// get all user

app.get('/users', async (req, res) => {
    const users = User.find().lean().exec();
    return res.status(200).json({ users })
})
app.get('/users:/id', async (req, res) => {
    const user = User.findById(req.params.id).lean().exec();
    return res.status(200).json({ user })
})
app.delete('/users:/id', async (req, res) => {
    const user = User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ user })
})

// crud operation for tag


app.post('/tags', async (req, res) => {
    const tag = await Tag.create(req.body);
    return res.status(200).json({ tag })
})

app.get('/tags', async (req, res) => {
    const tags = await Tag.find().lean().exec();
    return res.status(200).json({ tags })
})

app.get('/tags/:id', async (req, res) => {
    const tags = await Tag.findById(req.params.id).lean().exec();
    return res.status(200).json({ tags })
})
app.patch('/tags/:id', async (req, res) => {
    const tags = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(200).json({ tags })
})
app.delete('/tags/:id', async (req, res) => {
    const tags = await Tag.findByIdAndDelete(req.params.id);
    return res.status(200).json({ tags })
})

//crud operation for post
//create a post 

app.post("/posts", async (req, res) => {
    const post = await Post.create(req.body)
    return res.status(201).json({ post })

})
app.get("/posts", async (req, res) => {
    const post = await Post.find().populate("userId").populate("tagsId").lean().exec()
    return res.status(200).json({ post })

})
app.get("/posts/:id", async (req, res) => {
    const post = await Post.findById(req.params.id).populate("userId").populate("tagsId").lean().exec()
    return res.status(200).json({ post })

})
app.patch("/posts/:id", async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(200).json({ post })

})
app.patch("/posts/:id", async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json({ post })

})


//crud for comment

app.post('/comments', async (req, res) => {
    const comment = await Comment.create(req.body)
    return res.status(201).json({ comment })
})
app.get('/comments', async (req, res) => {
    const comment = await Comment.find().populate('postId').lean().exec()
    return res.status(200).json({ comment })
})
app.get('/comments/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id).populate('postId').lean().exec()
    return res.status(200).json({ comment })
})
app.patch('/comments/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id, req.body, { new: true });
    return res.status(200).json({ comment })
})
app.delete('/comments/:id', async (req, res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    return res.status(200).json({ comment })
})

// get all comments for a post 

app.get('/posts/:id/comments', async (req, res) => {
    const comments = await Comment.find({ postId: req.params.id }).lean().exec()
    const post = await Post.findById(req.params.id).lean().exec()

    return res.status(200).json({ comments, post })
})

app.listen(1234, async () => {
    await connect()
    console.log('Hurray! listening to port no 1234');
})