Post = require("../model/post")

exports.getPosts = async (req, res) => {
    try {
        posts = await Post.find().select("_id title body")
        res.json({
            posts
        })
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
        console.log(err)
    }
}
exports.createPost = (req, res) => {
    const post = new Post(req.body)
    post.save()
    .then((result) => res.json({
        post: {
            _id: result.id,
            title: result.title,
            body: result.body
        }
    }))
}

