import express from "express"
import auth from "../middlewares/auth.js"
import { getPosts, getPost, addPost, updatePost, deletePost } from "../controllers/posts.js"

const router = express.Router()

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", auth, addPost)
router.post("/m/:id", auth, updatePost)
router.post("/d/:id", auth, deletePost)

export default router
