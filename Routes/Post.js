const express = require("express")

const { AddPost, AllPosts, OnePost, DeletePost, UpdatePost, myPosts } = require("../Controllers/Posts")
const Posts = require("../Models/Posts")

const postRouter = express.Router()

postRouter.post('/addPost', AddPost)

postRouter.get('/getAllPosts',AllPosts)

postRouter.get('/getOnePost/:id',OnePost)

postRouter.delete('/deletePost/:id',DeletePost)

postRouter.put('/updatePost/:id',UpdatePost)

postRouter.get('/getMyPosts/:id',myPosts)

module.exports = postRouter

