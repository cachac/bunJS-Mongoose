import mongoose from 'mongoose'

mongoose.set('debug', true)

export default {
  setConnection() {
    // replica set
    // const strconn = `mongodb+srv://training:dlpsKAhjAh6UN8qO@freetesting.nrujao5.mongodb.net/?retryWrites=true&w=majority`

    // serverless
    const strconn = `mongodb+srv://qa-storylabs.0xdvf.mongodb.net/BUNTEST?authMechanism=MONGODB-X509&authSource=%24external`
    const db = mongoose.connection

    db.on('error', err => console.error('> error occurred from the database', err))
    db.on('connected', () => console.log('connected'))
    db.once('open', () => console.log('> successfully open the database'))
    db.on('disconnected', () => console.log('disconnected'))
    db.on('reconnected', () => console.log('reconnected'))
    db.on('disconnecting', () => console.log('disconnecting'))
    db.on('close', () => console.log('close'))

    return mongoose.connect(strconn, {
      socketTimeoutMS: 30000,
      connectTimeoutMS: 5000,
      maxPoolSize: 200
      // writeConcern: {
      //   w: 'majority',
      //   j: true,
      //   wtimeout: 5000
      // }
    })
  }
}
