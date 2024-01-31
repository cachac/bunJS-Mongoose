import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { router } from './router.js'
import db from './node-database.js'

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

console.log(`NodeJS/Hono - Mongoose Testing listening to port 5000 - NODE JS | REST 🚀`)

// START server
db.setConnection()

serve ({
  fetch: app.fetch,
  port: 5000
})
