import express, { Router } from "express"
import auth from "../middlewares/auth.js"
import { getPosts, getPost, addPost, updatePost, deletePost, upload } from "../controllers/posts.js"

const router = express.Router()

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", upload.single("file"), auth, addPost)
router.put("/:id", auth, updatePost)
router.delete("/d/:id", auth, deletePost)

export default router
