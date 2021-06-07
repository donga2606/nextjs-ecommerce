import * as dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";

dotenv.config();

const secretToken:any = process.env.TOKEN_SECRET
const refreshToken: any = process.env.REFRESH_TOKEN

const generateAccessToken = (payload: {}) => {
  return jwt.sign(payload, secretToken);
}

const createRefreshToken = (payload: {}) => {
  return jwt.sign(payload, refreshToken, {expiresIn: '7d'})
}

export {generateAccessToken, createRefreshToken};