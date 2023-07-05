import express from 'express'
import db from "./config/Database.js";

const app = express()

try {
    await db.authenticate()
    console.log("database is connected")
} catch (error) {
    console.log(error)
}
app.listen(3000, () => console.log("server is running"))

