import mongoose from "mongoose"

const postSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  file_name: {
    type: String,
    required: true,
  },
  file_extension: {
    type: String,
    required: true,
  },
  votes: {
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
