import { authPayload } from "./../models/auth.model";
import { Auth, AuthInterface } from "../models/auth.model";
import jwt from "jsonwebtoken";

const DEFAULT_LOGIN = process.env.DEFAULT_LOGIN || "letscode"
const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD || "lets@123";
const JWT_SECRET = process.env.JWT_SECRET || "secret";

const checkUser = (userInfo: AuthInterface): boolean => {
  if (
    userInfo.username === DEFAULT_LOGIN &&
    userInfo.password === DEFAULT_PASSWORD
  )
    return true;
  return false;
};

const generateToken = (userInfo: AuthInterface) => {
  const payload: authPayload = { username: userInfo.username };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

export const authUser = (
  username: string,
  password: string
): string | boolean => {
  const authUser = new Auth(username, password);
  if (checkUser(authUser)) return generateToken(authUser);
  return false;
};
