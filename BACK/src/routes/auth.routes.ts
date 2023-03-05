import { AuthUser } from "./../controllers/auth.controller";
import { Request, request, Response, response, Router } from "express";

const authRouter = Router();

authRouter.post("/login", AuthUser);

export { authRouter };
