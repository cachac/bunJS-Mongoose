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

router.post('/get-id', async c => {
  console.log('/get-id', new Date())
  const { _id } = await c.req.json()
  console.log('_id', _id)
  const user = await Model.find({ _id })
  return c.json(user)
})
