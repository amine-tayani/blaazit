import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import CONNECTION_URL from "./db/database.js"

if (process.env.NODE_ENV !== "production") dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("database connected successfully "))
  .catch((error) => console.log(`${error} did not connect`))

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
