import { NextFunction, Request, Response } from 'express'

export default {
  notFound(req: Request, resp: Response, next: NextFunction): void {
    const error: any = new Error('Not found')
    error.status = 404

    next(error)
  },

  cathAll(error: any, req: Request, resp: Response, next: NextFunction): void {
    console.log(`error.message >>> ${error.message} <<<`)

    resp
      .status(error.status || 500)
      .json({ error: `Sorry! There was an error on our server.` })
  },
}
