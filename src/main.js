import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { router } from './router.js'
import db from './database.js'

const app = new Hono()

app.use('*', cors())
app.route('/', router)
app.onError((err, c) => {
  console.error('Global Aplication Error :>> ', err)
  return c.text('App Error Message', 500)
})

process.on('uncaughtException', err => {
  console.error('AHHHHHHHHHHHHHHHHHHHHHHHHHH! :', err)
  process.exit(1)
})

process.on('unhandledRejection', err => {
  console.error('ERRRRRRRRRRRRRRRRRRRRRRRRRR! :', err)
  process.exit(1)
})

console.log(`BunJS - Mongoose Testing listening to port 3000 - BUN JS | REST 🚀`)

// START server
db.setConnection()

export default {
  fetch: app.fetch,
  port: 3000
}
