import { NextFunction, Request, Response } from 'express'

const logRequest = (req: Request, resp: Response, next: NextFunction): void => {
  const { method, url } = req

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.time(logLabel)
  next()
  console.timeEnd(logLabel)
}

export default logRequest
