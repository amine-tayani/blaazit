import express from "express"
import auth from "../middlewares/auth.js"

import { createAccount, getUser } from "../controllers/users.js"
import { loginIntoAccount } from "../controllers/users.js"
import { checkIftokenIsValid } from "../controllers/users.js"

const router = express.Router()

router.post("/register", createAccount)
router.post("/login", loginIntoAccount)
router.post("/tokenIsValid", checkIftokenIsValid)
router.get("/", auth, getUser)

export default router
