import dotenv from "dotenv"

dotenv.config()

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rgu5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

export default CONNECTION_URL
