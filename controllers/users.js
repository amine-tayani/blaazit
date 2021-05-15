import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

const router = express.Router()

// create account middleware
export const createAccount = async (req, res) => {
  try {
    let { username, email, password } = req.body
    // validate existing account
    const existingEmail = await User.findOne({ email: email })
    if (existingEmail) return res.status(400).json({ msg: "*This email already exists." })
    const existingUsername = await User.findOne({ username: username })
    if (existingUsername) return res.status(400).json({ msg: "*This username is unavailable." })
    if (!username) username = email
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    })
    const newAccount = await newUser.save()
    const token = jwt.sign({ id: newAccount._id }, process.env.JWT_SECRET, { expiresIn: "12h" })

    res.json({
      token,
      user: { id: newAccount._id, username: newAccount.username, email: newAccount.email },
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// login to account middleware

export const loginIntoAccount = async (req, res) => {
  try {
    const { email, password } = req.body
    // validate
    const user = await User.findOne({ email: email })
    if (!user) return res.status(400).json({ msg: "No such account has been found." })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ msg: "Email or password is incorrect." })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "12h" })
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Check if token is valid
export const checkIftokenIsValid = async (req, res) => {
  try {
    const token = req.header("x-auth-token")
    if (!token) return res.json("no token found")
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) return res.json("token not valid")
    const user = await User.findById(verified.id)
    if (!user) return res.json(false)
    return res.json(true)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// get authenticated user

export const getUser = async (req, res) => {
  const user = await User.findById(req.user)
  res.json({
    username: user.username,
    email: user.email,
    id: user._id,
  })
}

export default router
