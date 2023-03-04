import { AuthController } from "./../controllers/auth.controller";
import { Request, request, Response, response, Router } from "express";

const authController = new AuthController();
const authRouter = Router();

authRouter.post("/login", authController.login);

export default authRouter;
