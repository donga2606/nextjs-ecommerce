import * as dotenv from "dotenv";
import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import ProductRouter from "./routes/Product";
import AuthRouter from "./routes/Auth";
import UserRouter from "./routes/User";
import { connectDatabase } from "./common/connectDatabase";
import { ApolloServer, Request } from "apollo-server-express";
import { resolvers } from "./resolver-gql/resolver-gql";
import typeDefs from "./schema-gql/schema-gql";
import loginServices from "./controller/login";
import cookies from 'cookie-parser'

dotenv.config();

// const CronJob = require('cron').CronJob
// const cronjobExample = new CronJob('0 */1 * * * *', () => {
// // Do cronjob in here
//   const exec = require('child_process').exec
//   exec('bash ./backup.sh')
// }, null, true)
// cronjobExample.start()
// port

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

// apollo graphql
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

// middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookies())

// api route
// disable user router, replace by auth
// app.use("/api/user", UserRouter);

app.use("/api/auth", AuthRouter);
app.use("/api/product", ProductRouter);

// connect database
connectDatabase();

http.createServer(app).listen(PORT, () => {
  console.log(
    `Server is running at http://localhost:${PORT}${server.graphqlPath}`
  );
});
