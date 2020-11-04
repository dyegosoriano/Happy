const logRequest = (request, response, next) => {
  const { method, url } = request

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.time(logLabel)
  next()
  console.timeEnd(logLabel)
}

export default logRequest