import mongoose from 'mongoose'

mongoose.set('debug', true)

export default {
  setConnection() {
    // Mongo Atlas serverless instance - just for testing.
    const strconn = `mongodb+srv://serverless:cKI27zvgYFSJIbIh@qa-storylabs.0xdvf.mongodb.net/BUNTEST?retryWrites=true&w=majority`
    const db = mongoose.connection

    console.time('CONN')

    db.on('error', err => console.error('> error occurred from the database', err))
    db.on('connected', () => console.log('connected'))
    db.once('open', () => {
      console.timeEnd('CONN')
      console.log('> BUN successfully open the database at: ', new Date().toLocaleString())
    })
    db.on('disconnected', () => console.log('disconnected'))
    db.on('reconnected', () => console.log('reconnected'))
    db.on('disconnecting', () => console.log('disconnecting'))
    db.on('close', () => console.log('close'))

    return mongoose.connect(strconn, {})
  }
}
