import { User } from "../model/index";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "../common/generateAccessToken";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    
    const rf_token = req.headers.authorization;

    if (!rf_token) return res.status(400).json({ err: "Please login now!" });

    const refreshToken: any = process.env.REFRESH_TOKEN;
    const result: any = jwt.verify(rf_token, refreshToken);

    if (!result)
      return res
        .status(400)
        .json({ err: "Your token is incorrect or has expired." });

    const user = await User.findById(result.id);

    if (!user) return res.status(400).json({ err: "User does not exist." });

    const access_token = generateAccessToken({ id: user._id });
    res.json({
      access_token,
      user,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
