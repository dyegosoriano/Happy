import cors from 'cors'
import app from './app'

const port = 3333

app.use(cors())
app.listen(port, () => console.log(`🚀  Server is running port: ${port}`))
