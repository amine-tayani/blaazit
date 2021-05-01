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

export const createPost = async (req, res) => {
  const { description, selectedFile, username } = req.body

  const newPost = new Post({ description, selectedFile, username })

  try {
    await newPost.save()

    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {}

export const deletePost = async (req, res) => {}

export default router
