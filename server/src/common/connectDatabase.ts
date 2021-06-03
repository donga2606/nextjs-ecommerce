import mongoose from 'mongoose'
import {saveStorage} from './function'
import * as dotenv from 'dotenv'


dotenv.config()

export const connectDatabase = () => {
  mongoose.Promise = require('bluebird')

  return mongoose.connect(`mongodb://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@${process.env.DB_URL}:27017/${process.env.DB_NAME}`, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true
  })
    .then(async () => {
      console.log('Database connection created')
      
    }).catch((err) => {
      console.log(err)
    })
}


