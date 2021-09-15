


const post = (model) => async (req, res) => {
    const item = await model.create(req.body)

    return res.status(201).json({ itme })
}


const get = (model) => async (req, res) => {
    const item = await model.find().lean().exec()


    return res.status(200).json({ item })
}

module.exports = (model) => {
    return {
        post: post(model),
        get: get(model)

    }
}