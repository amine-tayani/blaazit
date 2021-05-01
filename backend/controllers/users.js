import express from "express"
import User from "../models/User.js"
import admin from "firebase-admin"
import { createRequire } from "module"

const require = createRequire(import.meta.url)
const serviceAccount = require("../config/serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

admin
  .auth()
  .listUsers(20)
  .then((user) => {
    console.log(user)
  })

const router = express.Router()

export const getUser = async (req, res) => {
  const { tokenID } = req.params

  if (!tokenID || !tokenID.length) return
  try {
    admin
      .auth()
      .verifyIdToken(tokenID)
      .then((decodedToken) => {
        let uid = decodedToken.uid
        admin
          .auth()
          .getUser(uid)
          .then((user) => {
            if (!user) {
              const newUser = new User(user.displayName, user.email, user.uid)
              newUser.save()
            }
          })
      })
  } catch (error) {
    res.status(404).json({ message: `error ${error.message}` })
  }
}

export default router
