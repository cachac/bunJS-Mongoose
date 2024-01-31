import express from 'express'
import Model from './model.js'

const router = express.Router()

router.get('/healthcheck', (_, res) => {
  res.send({ app: 'NodeJS Mongoose', version: '1.0.0' })
})

router.get('/get-users', async (req, res) => {
  console.log('/get-users', new Date())
  const users = await Model.find({})

  return res.send(users)
})

router.post('/set-user', async (req, res) => {
  console.log('/set-user', new Date())
  const { username } = await req.body
  await new Model({ username }).save()
  return res.send({ created: true })
})

router.post('/get-id', async (req, res) => {
  console.log('/get-id', new Date())
  const { _id, username } = await req.body

  const user = await Model.find(_id ? { _id } : { username })
  return res.send(user)
})

export default router
