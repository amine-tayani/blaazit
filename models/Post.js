import mongoose from "mongoose"

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  description: String,
  selectedFile: String,
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const Post = mongoose.model("Post", postSchema)

export default Post
