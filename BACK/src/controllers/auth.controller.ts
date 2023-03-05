import { authPayload } from "./../models/auth.model";
import jwt from "jsonwebtoken";
import { authUser } from "./../services/auth.services";
import { NextFunction, Request, Response } from "express";

export class AuthController {
  login(req: Request, res: Response) {
    const token = authUser(req.body.login, req.body.senha);
    if (!token) {
      res.status(401).json({ message: "Invalid credentials" }).end();
    }
    res.json(token).end();
  }

  tokenValidation(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ", "") || "";
    const JWT_SECRET = process.env.JWT_SECRET || "";

    try {
      if (authorization) {
        const decoded: authPayload = jwt.verify(token, JWT_SECRET) as {
          username: string;
        };
      } else {
        throw new Error("Token not found");
      }
    } catch (error) {
      res.status(401).send({ message: "Invalid token" }).end();
    }
    next();
  }
}
