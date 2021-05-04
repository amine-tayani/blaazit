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
    const existingUser = await User.findOne({ email: email })
    if (existingUser)
      return res.status(400).json({ msg: "An account with this email already exists." })
    if (!username) username = email
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    })
    const savedUser = await newUser.save()
    res.json(savedUser)
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
    if (!user)
      return res.status(400).json({ msg: "No account with this email has been registered." })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ msg: "You have entered invalid data." })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
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
    if (!token) return res.json(false)
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) return res.json(false)
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
    displayName: user.displayName,
    id: user._id,
  })
}

export default router
