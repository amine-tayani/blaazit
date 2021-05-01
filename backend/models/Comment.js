import mongoose from "mongoose"

const commentSchema = mongoose.Schema(
  {
    comment: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    upvotes: { type: Number },
    downvotes: { type: Number },
  },
  { timestamps: true }
)

const Comment = mongoose.model("Comment", commentSchema)

export default Comment
