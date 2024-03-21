import mongoose from 'mongoose'

mongoose.set('debug', true)

export default {
  setConnection() {
    // serverless
    const strconn = `mongodb+srv://serverless:cKI27zvgYFSJIbIh@qa-storylabs.0xdvf.mongodb.net/BUNTEST?retryWrites=true&w=majority`
    const db = mongoose.connection

    db.on('error', err => console.error('> error occurred from the database', err))
    db.on('connected', () => console.log('connected'))
    db.once('open', () => console.log('> NODE successfully open the database'))
    db.on('disconnected', () => console.log('disconnected'))
    db.on('reconnected', () => console.log('reconnected'))
    db.on('disconnecting', () => console.log('disconnecting'))
    db.on('close', () => console.log('close'))

    return mongoose.connect(strconn, {
      socketTimeoutMS: 30000,
      connectTimeoutMS: 5000,
      maxPoolSize: 200
    })
  }
}