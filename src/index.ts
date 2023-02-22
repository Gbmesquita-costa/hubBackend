import "express-async-errors"
import "reflect-metadata"
import "./shared/shared"

import { config } from "dotenv"

config()

import express, { NextFunction, Request, Response } from "express"

import cors from "cors"

import { routes } from "./routes/routes"

const app = express()
const port = process.env.PORT ?? 3333

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: "https://hub-dashboard.vercel.app",
    credentials: true,
}))

app.use(routes)

app.use((err: Error, resquest: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.json({ message: err.message })
    }

    return response.status(500).json({
        message: `Internal server error - ${err}`
    })
})

app.listen(port, () => {
    console.log(`⚡ Server is running on localhost: ${port}`)
})