import { authPayload } from "./../models/auth.model";
import jwt from "jsonwebtoken";
import { authUser } from "./../services/auth.services";
import { NextFunction, Request, Response } from "express";

export class AuthController {
  login(req: Request, res: Response) {
    const token = authUser(req.body.login, req.body.senha);
    if (!token) {
      console.info("[Auth]", "Not autorized:", req.body);
      res.status(401).json({ message: "Invalid credentials" });
      res.end();
      return;
    }
    console.info("[Auth]", "Auth success:", req.body);
    res.json(token);
    res.end();
    return;
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
        res.locals = { user: decoded.username };
        console.info(
          "[JWT Middleware]",
          "validated token for user:",
          decoded.username
        );
      } else {
        console.info("[JWT Middleware]", "Token not found");
        throw new Error("Token not found");
      }
    } catch (error) {
      console.info("[JWT Middleware]", "Invalid token");
      res.status(401).send({ message: "Invalid token" });
      res.end();
      return;
    }
    next();
  }
}
