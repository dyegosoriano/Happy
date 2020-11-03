export const notFound = (request, response, next) => {
  const error: any = new Error('Not found')
  error.status = 404
  next(error)
}

export const cathAll = (error, request, response, next) => {
  response.status(error.status || 500)
  response.json({ error: error.message })
}
