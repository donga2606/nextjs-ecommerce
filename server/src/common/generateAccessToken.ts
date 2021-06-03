import * as dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";

dotenv.config();

const secretToken:any = process.env.TOKEN_SECRET

function generateAccessToken(username:string) {
  return jwt.sign(username, secretToken);
}

export default generateAccessToken;