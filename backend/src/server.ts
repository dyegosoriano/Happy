import { resolve } from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import './database'

import errorHandling from './app/middleware/errorHandling'
import logRequest from './app/middleware/logRequest'
import routes from './routes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3333

app.use(cors())
app.use(express.json())
app.use(logRequest)

app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.use(errorHandling.notFound)
app.use(errorHandling.cathAll)

app.listen(port, () => console.log(`🚀  Server is running port: ${port}`))
