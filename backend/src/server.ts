// Third party
import cors from 'cors'
import express from 'express'

// Local
import routes from './router'

const app = express()
app.use(cors())
app.use(express.json())

// Routes
app.use(routes)

app.listen(3333, () => {
  console.log('Server running!');
})