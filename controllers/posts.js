import express from "express"
import Post from "../models/Post.js"
import multer from "multer"

const router = express.Router()

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()

    const sortedPosts = posts.sort((a, b) => b.createdAt - a.createdAt)

    res.status(200).json(sortedPosts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getPost = async (req, res) => {
  const { id } = req.params

  try {
    const post = await Post.findById(id)

    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./client/public/uploads")
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`)
    },
  }),
  limits: {
    fileSize: 500000000, // max file size 500mb
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|mp4|gif|mkv|mp3|wmv|flv|mov|webm)$/)) {
      return cb(new Error("only upload files videos and images and gifs ."))
    }
    cb(undefined, true)
  },
})

export const addPost = async (req, res) => {
  try {
    const { description } = req.body
    if (!req.file) {
      console.log("file not uploaded")
      return res.status(409).json({ message: "please upload a file" })
    }
    const { filename, mimetype } = req.file
    const newPost = new Post({
      description,
      file_name: filename,
      file_extension: mimetype,
    })
    await newPost.save()
    console.log(newPost)
    res.status(201).json(newPost)
  } catch (error) {
    console.log(error)
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {}

export const deletePost = async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.id)
  res.status(201).json({ post: deletedPost, msg: "post deleted" })
}

export default router
