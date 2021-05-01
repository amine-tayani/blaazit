import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: false },
  googleId: { type: String, unique: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
})

const User = mongoose.model("User", userSchema)

export default User
