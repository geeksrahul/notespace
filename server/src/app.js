import express from 'express'
import dotnev from 'dotenv'
import cors from 'cors'
// routers
import notesRouter from './routes/notes.route.js'
dotnev.config()

const app = express()
// middlewares
app.use(cors())
app.use(express.json())
// plugging routers
app.use("/api/notes", notesRouter)

export default app;