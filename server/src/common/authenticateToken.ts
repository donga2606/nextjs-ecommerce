const jwt = require("jsonwebtoken");
import { Response, Request } from "express";

function authenticateToken(req: Request, res: Response, next: Function) {
  const authHeader = req.headers["authorization"];

  // get token from user
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: any, user: any) => {
      console.log(err);

      if (err) return res.sendStatus(403);

      // req.user = user
      next();
    }
  );
}

export default authenticateToken;
