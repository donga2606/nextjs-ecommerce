import * as dotenv from 'dotenv'
import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import ProductRouter from './routes/Product'
import { connectDatabase } from './common/connectDatabase'
import {ApolloServer} from 'apollo-server-express'
import {resolvers} from './resolver-gql/resolver-gql'
import typeDefs from './schema-gql/schema-gql'
import {graphqlHTTP} from 'express-graphql'


dotenv.config()

// port
const PORT: number = parseInt(process.env.PORT as string, 10)

// create app
const app = express()

// apollo
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({app})

// middleware
app.use(morgan('dev'))  
app.use(helmet())
app.use(cors())
app.use(express.json())

// api route
app.use('/api/product', ProductRouter)

// connect database
connectDatabase(); 


// app.use('/graphql', graphqlHTTP({ schema: Schema, pretty: true }))


http.createServer(app).listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`)
})

