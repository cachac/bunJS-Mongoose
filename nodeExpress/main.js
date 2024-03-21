import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import routes from './router.js'
import db from './node-database.js'

const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(routes)

process.on('uncaughtException', err => {
  console.error('AHHHHHHHHHHHHHHHHHHHHHHHHHH! :', err)
  process.exit(1)
})

process.on('unhandledRejection', err => {
  console.error('ERRRRRRRRRRRRRRRRRRRRRRRRRR! :', err)
  process.exit(1)
})

app.listen(4000, () => {
  console.log(`nodeJS - Mongoose Testing listening to port 4000 - NODE JS | REST 🚀`)

  db.setConnection()
})
