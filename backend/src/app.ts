import express from 'express'

import { cathAll, notFound } from './app/middleware/errorHandling'
import logRequest from './app/middleware/logRequest'

import routes from './routes'

import './database'

class App {
  server = express.application

  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
    this.erros()
  }

  middlewares(): void {
    this.server.use(express.json())
    this.server.use(logRequest)
  }

  routes(): void {
    this.server.use(routes)
  }

  erros(): void {
    this.server.use(notFound)
    this.server.use(cathAll)
  }
}

export default new App().server
