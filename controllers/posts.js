import express from "express"
import Post from "../models/Post.js"

const router = express.Router()

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()

    res.status(200).json(posts)
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

export const addPost = async (req, res) => {
  const { description, selectedFile, username } = req.body
  if (!description | username) {
    res.status(400).json({ msg: "fill the data" })
  }

  const newPost = new Post({ description, selectedFile, username })

  try {
    await newPost.save()

    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {}

export const deletePost = async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.id)
  res.status(201).json({ post: deletedPost, msg: "post deleted" })
}

export default router
