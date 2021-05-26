import mongoose from 'mongoose'
import {saveStorage} from './function'

export const connectDatabase = () => {
  mongoose.Promise = require('bluebird')

  return mongoose.connect('mongodb://admin:admin123@45.77.252.184:27017/donga', {
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

