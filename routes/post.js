const {getPosts, createPost} = require("../controllers/post")
const {createValidator} = require("../validators")
const express = require("express")
const router = express.Router()

router.get("/", getPosts)
router.post("/post", createValidator, createPost)

module.exports = router
