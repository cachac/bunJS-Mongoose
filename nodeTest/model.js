import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    username: { type: String, required: true }
  },
  {
    collection: 'UserTest',
    timestamps: true
  }
)

export default mongoose.model('UserTest', schema)
