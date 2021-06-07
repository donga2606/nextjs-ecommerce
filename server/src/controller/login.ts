import { User } from "../model/index";
import bcrypt from "bcrypt";
import {
  createRefreshToken,
  generateAccessToken,
} from "../common/generateAccessToken";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user: any = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ err: "This user does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ err: "Incorrect password." });

    const access_token = generateAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });

    res.json({
      msg: "Login Success!",
      access_token,
      refresh_token,
      user,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
