import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: false, required: true },
  password: { type: String, unique: false, required: true },
})

const User = mongoose.model("User", userSchema)

export default User
