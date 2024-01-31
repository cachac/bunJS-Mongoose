import { Hono } from 'hono'
import Model from './model.js'

export const router = new Hono()

router.get('/healthcheck', c => c.json({ app: 'NodeJS Mongoose', version: '1.0.0' }))

router.get('/get-users', async c => {
  console.log('/get-users', new Date())
  const users = await Model.find({})
  return c.json(users)
})

router.post('/set-user', async c => {
  console.log('/set-user', new Date())
  const { username } = await c.req.json()
  await new Model({ username }).save()
  return c.json({ created: true })
})
