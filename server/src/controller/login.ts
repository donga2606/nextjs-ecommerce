import generateAccessToken from "../common/generateAccessToken";
import { Request, Response } from "express";

interface ReponseType {
  token: string
}

const loginServices = async (req: Request, res: Response<ReponseType>) => {
  try {
    const { username, password } = req.body;
    const token = generateAccessToken(username);
    
    return res.json({ token });
  } catch (err) {
    res.status(500);
  }
};

export default loginServices;
