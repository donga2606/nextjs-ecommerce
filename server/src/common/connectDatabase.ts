import mongoose from 'mongoose'
import {saveStorage} from './function'

export const connectDatabase = () => {
  mongoose.Promise = require('bluebird')

  return mongoose.connect('mongodb://localhost:27017/shopDemo', {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true
  })
    // .then(async () => {
    //   console.log('Database connection created')
      
    // }).catch((err) => {
    //   console.log(err)
    // })
}

