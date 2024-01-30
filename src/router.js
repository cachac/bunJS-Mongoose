import { Hono } from 'hono'
import Model from './model'

export const router = new Hono()

router.get('/healthcheck', c => c.json({ app: 'BunJS Mongoose', version: '1.0.0' }))

router.get('/get-users', async c => {
  const users = await Model.find({})
  return c.json(users)
})

router.post('/set-user', async c => {
  const { username } = await c.req.json()
  console.log('c.req.body', username)
  await new Model({ username }).save()
  return c.json({ created: true })
})
